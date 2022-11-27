import {
  AutocompleteRenderInputParams,
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  MenuItem,
  Radio,
  Stack,
  TextField as TextFieldMUI,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { ArrowBackRounded as ArrowBackRoundedIcon } from "@mui/icons-material";
import { Field, Form, Formik, FormikHelpers, useFormik, useFormikContext } from "formik";
import { Autocomplete, RadioGroup, TextField } from "formik-mui";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import PasswordField from "../components/PasswordField";
import Link from "../components/Link";
import { useId } from "react";
import Select from "../components/Select";
import api_instance from "../api/api_instance";
import car from "../assets/luisa.jpeg";
import { render } from "react-dom";
import axios from "axios";

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
  emergencyPhone: string;
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
  emergencyPhone: "",
};
const validationSchema = yup.object().shape({
  name: yup.string().required("Ingresa tu nombre, por favor"),
  lastName: yup.string().required("Ingresa tu apellido, por favor"),
  sex: yup.string().required("Selecciona tu género, por favor"),
  email: yup.string().required("Ingresa tu email, por favor").email("Email inválido"),
  password: yup
    .string()
    .required("Ingresa una contraseña, por favor")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  repeatPassword: yup
    .string()
    .required("Ingresa tu contraseña nuevamente, por favor")
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
  role: yup
    .string()
    .required("Selecciona tu rol en la UCAB, por favor")
    .typeError("Selecciona tu rol en la UCAB, por favor"),
  photo: yup.mixed().required("Ingresa una foto, por favor"),
  condiciones: yup.boolean().oneOf([true], "Debes aceptar los términos y condiciones"),
  emergencyName: yup.string().required("Ingresa tu nombre, por favor"),
  emergencyPhone: yup
    .string()
    .required("Ingresa el número de teléfono de tu contacto de emergencia, por favor"),
});

const optionsUser = ["Estudiante", "Docente", "Trabajador"];

const Registro = (): JSX.Element => {
  const labelId = useId();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const formikProps = useFormikContext();

  // Al presionar el botón de registrarse
  // se ejecuta esta función para llamar a la API
  const registrar = async (user: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setSubmitting(true);
    const file = document.getElementById("photo");
    const data = new FormData();

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

    data.append("emergencyContact", user.emergencyPhone);
    data.append("emergencyName", user.emergencyName);
    data.append("photo", car, "luisa.jpeg");

    const config = {
      method: "post",
      url: "http://localhost:3000/api/signup",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        enqueueSnackbar("Usuario registrado con éxito", { variant: "success" });
      })
      .catch(function (error) {
        console.log(error);
        enqueueSnackbar("Error al registrar usuario", { variant: "error" });
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
      <Typography component="h1" fontWeight="600" fontSize="24px" align="center" mb={3}>
        Registro de usuario
      </Typography>
      <Typography fontWeight="500" fontSize="16px" align="center" mb={3}>
        Ingresa tus datos para continuar
      </Typography>

      <Stack component={Form} spacing={2}>
        <Field component={TextField} name="name" label="Nombres" required />
        <Field component={TextField} name="lastName" label="Apellidos" required />
        <FormControl>
          <FormLabel id={labelId}>Género</FormLabel>
          <Field component={RadioGroup} name="sex" row aria-labelledby={labelId}>
            <FormControlLabel value="M" control={<Radio />} label="Masculino" />
            <FormControlLabel value="F" control={<Radio />} label="Femenino" />
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
            <TextFieldMUI {...params} name="role" label="Rol en la UCAB" required />
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
          name="tlfEmergencia"
          label="Número de contacto de emergencia"
          required
        />

        <input
          type="file"
          name="photo"
          required
          id="photo"
          // onChange={(event) => {
          //   setFieldValue("file", event.currentTarget.files[0]);
          // }}
        />

        <label style={{ fontFamily: "Quicksand", fontSize: 12, fontWeight: 600 }}>
          <Field type="checkbox" name="condiciones" required />
          Acepto que se que la UCAB no es responsable de nada que suceda en la aplicación, siendo
          esta un proyecto independiente de la institución.
        </label>

        <LoadingButton type="submit" variant="contained">
          Registrarse
        </LoadingButton>
        <Typography align="center">
          ¿Ya tienes cuenta?
          <Link to="/login">
            <Typography fontWeight="600"> Inicia sesión </Typography>
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Registro;
