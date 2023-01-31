import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  Stack,
  TextField as TextFieldMUI,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { ArrowBackRounded as ArrowBackRoundedIcon } from "@mui/icons-material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Autocomplete, AutocompleteRenderInputParams, RadioGroup, TextField } from "formik-mui";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import PasswordField from "../components/PasswordField";
import Link from "../components/Link";
import { useId, useState } from "react";
import axios from "axios";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";

interface Values {
  name: string;
  lastName: string;
  sex: string;
  email: string;
  password: string;
  repeatPassword: string;
  photo: File;
  condiciones: boolean;
  role: string;
  emergencyName: string;
  emergencyContact: string;
  lat: string;
  lng: string;
}

const initialValues: Values = {
  name: "",
  lastName: "",
  sex: "male",
  email: "",
  password: "",
  repeatPassword: "",
  photo: new File([], ""),
  condiciones: false,
  role: "",
  emergencyName: "",
  emergencyContact: "",
  lat: "",
  lng: "",
};

const Registro = (): JSX.Element => {
  var latitude = "";
  var longitude = "";
  const labelId = useId();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const data = new FormData();
  const optionsUser = ["Estudiante", "Docente", "Trabajador"];

  const ucab = { lat: 8.296423157514385, lng: -62.71283272286731 };

  const containerStyle = {
    width: "100%",
    height: "400px",
    margin: "2px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
    libraries: ["places", "drawing"],
  });

  // Al presionar el botón de registrarse
  // se ejecuta esta función para llamar a la API
  const registrar = async (user: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setSubmitting(true);

    data.append("email", user.email);
    data.append("password", user.password);
    data.append("name", user.name);
    data.append("lastname", user.lastName);
    data.append("gender", user.sex);

    if (user.role === "Estudiante") {
      data.append("role", "E");
    } else if (user.role === "Docente") {
      data.append("role", "D");
    } else if (user.role === "Trabajador") {
      data.append("role", "T");
    }

    data.append("emergencyContact", user.emergencyContact);
    data.append("emergencyName", user.emergencyName);
    data.append("lat", latitude.toString()!);
    data.append("lng", longitude.toString()!);

    for (let [key, value] of data) {
      console.log(`${key}: ${value}`);
    }

    console.log(data.get("photo"));

    const config = {
      method: "post",
      url: "https://ulift-backend.up.railway.app/api/signup",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        enqueueSnackbar("¡Ahora puedes iniciar sesión!", { variant: "success" });
        navigate(`/login`);
      })
      .catch(function (error) {
        console.log(error);

        enqueueSnackbar("¡Algo salió mal!", { variant: "error" });
        data.delete("email");
        data.delete("password");
        data.delete("name");
        data.delete("lastname");
        data.delete("emergencyContact");
        data.delete("emergencyName");
        data.delete("role");
        data.delete("gender");
        data.delete("lat");
        data.delete("lng");
        const inputs = document.getElementsByTagName("input");
        if (inputs.length > 0) {
          for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            if (input != null && input.type === "file") {
              if (input.files != null && input.files.length > 0) {
                input.value = "";
              }
            }
          }
        }
      });
  };

  return (
    <Box>
      <IconButton
        color="primary"
        sx={{ position: "absolute", left: 10, top: 16 }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackRoundedIcon />
      </IconButton>
      <Typography
        component={"h2"}
        variant={"h2"}
        fontWeight="600"
        fontSize="24px"
        align="center"
        mb={3}
      >
        Registro de usuario
      </Typography>
      <Typography fontWeight="500" fontSize="16px" align="center" mb={3}>
        Ingresa tus datos para continuar
      </Typography>

      <Formik initialValues={initialValues} onSubmit={registrar}>
        {({ isSubmitting, touched, errors }) => (
          <Stack component={Form} spacing={2}>
            <Field component={TextField} name="name" label="Nombres" required />
            <Field component={TextField} name="lastName" label="Apellidos" required />
            <FormControl>
              <FormLabel id={labelId}>Género</FormLabel>
              <Field component={RadioGroup} name="sex" row aria-labelledby={labelId}>
                <FormControlLabel
                  value="M"
                  control={<Radio disabled={isSubmitting} />}
                  label="Masculino"
                  disabled={isSubmitting}
                />
                <FormControlLabel
                  value="F"
                  control={<Radio disabled={isSubmitting} />}
                  label="Femenino"
                  disabled={isSubmitting}
                />
              </Field>
            </FormControl>

            <Field component={TextField} name="email" type="email" label="Correo UCAB" required />

            <Field component={PasswordField} name="password" label="Contraseña" required />
            <Field
              component={PasswordField}
              name="repeatPassword"
              label="Repetir Contraseña"
              required
            />
            <Field
              name="role"
              component={Autocomplete}
              options={optionsUser}
              fullWidth
              renderInput={(params: AutocompleteRenderInputParams) => (
                <TextFieldMUI
                  {...params}
                  name="role"
                  error={touched.role && !!errors.role}
                  helperText={touched.role && errors.role}
                  label="Rol en la UCAB"
                  required
                />
              )}
            />
            <Field
              component={TextField}
              name="emergencyName"
              label="Nombre de contacto de emergencia"
              required
            />

            <Field
              component={TextField}
              name="emergencyContact"
              label="Número de contacto de emergencia"
              required
            />

            <input
              type={"file"}
              name="photo"
              required
              accept="image/png, image/jpeg"
              onChange={() => {
                const inputs = document.getElementsByTagName("input");
                if (inputs.length > 0) {
                  for (let i = 0; i < inputs.length; i++) {
                    const input = inputs[i];
                    if (input != null && input.type === "file") {
                      if (input.files != null && input.files.length > 0) {
                        data.append("photo", input.files[0]);
                      }
                    }
                  }
                }
              }}
            />

            <Typography fontWeight="500" fontSize="18px" align="left">
              Ingresa tu destino principal en el mapa:
            </Typography>
            {isLoaded && (
              <GoogleMap id="map" mapContainerStyle={containerStyle} center={ucab} zoom={15}>
                <MarkerF
                  position={ucab}
                  visible={true}
                  draggable={true}
                  onDragEnd={(e) => {
                    latitude = e.latLng?.lat().toString()!;
                    longitude = e.latLng?.lng().toString()!;
                  }}
                />
              </GoogleMap>
            )}

            <label style={{ fontFamily: "Quicksand", fontSize: 12, fontWeight: 600 }}>
              <Field type="checkbox" name="condiciones" required />
              Acepto que se que la UCAB no es responsable de nada que suceda en la aplicación,
              siendo esta un proyecto independiente de la institución.
            </label>

            <LoadingButton type="submit" loading={isSubmitting} variant="contained">
              Registrarse
            </LoadingButton>
            <Typography align="center">
              ¿Ya tienes cuenta?
              <Link to="/login">
                <Typography fontWeight="600"> Inicia sesión </Typography>
              </Link>
            </Typography>
          </Stack>
        )}
      </Formik>
    </Box>
  );
};

export default Registro;
