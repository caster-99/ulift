import { Box, Typography, Stack, TextField as Text } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import Link from "../components/Link";
import PasswordField from "../components/PasswordField";
import { useNavigate } from "react-router-dom";

interface Values {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Ingresa tu correo, por favor")
    .email("Ingresa un correo válido, por favor"),
  password: yup.string().required("Ingresa tu contraseña, por favor"),
});

const InicioSesion = (): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const onSubmit = async (user: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setSubmitting(true);

    // const error = await logIn(user);

    // if (error) {
    //   setSubmitting(false);
    //   return enqueueSnackbar(error, { variant: "error" });
    // }

    enqueueSnackbar("¡Bienvenido de vuelta!", { variant: "success" });
    navigate(`/`);
  };
  return (
    <Box>
      <Typography component="h1" fontWeight="600" fontSize="24px" align="center" mb={3}>
        Inicio de sesión
      </Typography>
      <Typography fontWeight="500" fontSize="16px" align="center" mb={3}>
        Ingresa tus datos para continuar
      </Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Stack component={Form} spacing={2}>
            <Field component={TextField} name="email" label="Correo" required />

            <Field
              margin="normal"
              component={PasswordField}
              name="password"
              label="Contraseña"
              required
            />
            <LoadingButton type="submit" loading={isSubmitting} variant="contained" color="primary">
              Ingresar
            </LoadingButton>
            <Typography align="center">
              ¿No tienes cuenta?{" "}
              <Link to="/signup">
                <Typography fontWeight="600"> Regístrate aquí </Typography>
              </Link>
            </Typography>
          </Stack>
        )}
      </Formik>
    </Box>
  );
};

export default InicioSesion;
