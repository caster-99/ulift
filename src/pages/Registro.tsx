import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  MenuItem,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { ArrowBackRounded as ArrowBackRoundedIcon } from "@mui/icons-material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { RadioGroup, TextField } from "formik-mui";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import PasswordField from "../components/PasswordField";
import Link from "../components/Link";
import { useId } from "react";
import Select from "../components/Select";
import api_instance from "../api/api_instance";

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
    .test(
      "role",
      "Selecciona tu rol en la UCAB, por favor",
      (value) => value !== "Indique su rol en la UCAB"
    ),
  photo: yup.mixed().required("Ingresa una foto, por favor"),
  condiciones: yup.boolean().oneOf([true], "Debes aceptar los términos y condiciones"),
  emergencyName: yup.string().required("Ingresa el nombre de tu contacto de emergencia, por favor"),
  emergencyPhone: yup
    .string()
    .required("Ingresa el número de teléfono de tu contacto de emergencia, por favor"),
});

const Registro = (): JSX.Element => {
  const labelId = useId();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // Al presionar el botón de registrarse
  // se ejecuta esta función para llamar a la API
  const onSubmit = async (user: Values, { setSubmitting }: FormikHelpers<Values>) => {
    console.log("Registro");
    setSubmitting(true);

    // api_instance({
    //   method: "post",
    //   url: "api/login",
    //   data: user,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    //   .then((res) => {
    //     console.log(res);
    //     enqueueSnackbar("¡Ahora puedes iniciar sesión!", { variant: "success" });
    //     navigate(`/login`);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     enqueueSnackbar("¡Algo salió mal!", { variant: "error" });
    //   });
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

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Stack component={Form} spacing={2}>
            <Field component={TextField} name="name" label="Nombres" required />
            <Field component={TextField} name="lastName" label="Apellidos" required />
            <FormControl>
              <FormLabel id={labelId}>Género</FormLabel>
              <Field component={RadioGroup} name="sex" row aria-labelledby={labelId}>
                <FormControlLabel
                  value="male"
                  control={<Radio disabled={isSubmitting} />}
                  label="Masculino"
                  disabled={isSubmitting}
                />
                <FormControlLabel
                  value="female"
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
            <Select variant="outlined" displayEmpty required name="role">
              <MenuItem sx={{ color: "text.secondary" }} value="">
                Indique su rol en la UCAB
              </MenuItem>
              <Divider />
              <MenuItem value="Estudiante">Estudiante</MenuItem>
              <MenuItem value="Docente">Docente</MenuItem>
              <MenuItem value="Personal Administrativo">Personal Administrativo</MenuItem>
              <MenuItem value="Personal Servicios Generales">Personal Servicios Generales</MenuItem>
            </Select>
            <Field
              component={TextField}
              name="contactoEmergencia"
              label="Nombre de contacto de emergencia"
              required
            />

            {/* <Field
              component={TextField}
              name="tlfEmergencia"
              label="Número de contacto de emergencia"
              required
            /> */}

            <input type={"file"} name="photo" required />

            <label style={{ fontFamily: "Quicksand", fontSize: 12, fontWeight: 600 }}>
              <Field type="checkbox" name="condiciones" required />
              Acepto que se que la UCAB no es responsable de nada que suceda en la aplicación,
              siendo esta un proyecto independiente de la institución.
            </label>

            <LoadingButton
              type="submit"
              loading={isSubmitting}
              loadingIndicator="Procesando..."
              variant="contained"
              color="primary"
            >
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
