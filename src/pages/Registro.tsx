import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  AddAPhotoRounded as AddPhotoIcon,
  ArrowBackRounded as ArrowBackRoundedIcon,
} from "@mui/icons-material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import PasswordField from "../components/PasswordField";
import Link from "../components/Link";

interface Values {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  photo: object;
}

const initialValues: Values = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
  photo: {},
};

const schema = yup.object().shape({
  name: yup.string().required("Ingresa tu nombre, por favor"),
  email: yup.string().required("Ingresa tu email, por favor").email("Email inválido"),
  password: yup
    .string()
    .required("Ingresa una contraseña, por favor")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  repeatPassword: yup
    .string()
    .required("Ingresa tu contraseña nuevamente, por favor")
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
  photo: yup.object().required("Ingresa una foto, por favor"),
});

const Registro = (): JSX.Element => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (user: Values, { setSubmitting }: FormikHelpers<Values>) => {
    //    setSubmitting(true);

    // const { repeatPassword, ...userData } = user;

    // const error = await signUp({ ...userData, type: "nurse" });

    // if (error) {
    //   setSubmitting(false);
    //   return enqueueSnackbar(error, { variant: "error" });
    // }
    enqueueSnackbar("¡Ahora puedes iniciar sesión!", { variant: "success" });
    navigate(`/login`);
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

      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Stack component={Form} spacing={2}>
            <Field component={TextField} name="name" label="Nombres y Apellidos" required />
            <Field component={TextField} name="email" type="email" label="Correo UCAB" required />

            <Field component={PasswordField} name="password" label="Contraseña" required />
            <Field
              component={PasswordField}
              name="repeatPassword"
              label="Repetir Contraseña"
              required
            />
            <Button variant="contained" component="label" startIcon={<AddPhotoIcon />}>
              Foto de perfil
              <input hidden accept="image/*" type="file" name="photo" />
            </Button>
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
