import { Box, Typography, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import Link from "../components/Link";

// interface Values {
//   email: string;
//   password: string;
// }

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

const InicioSesion = () => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Box>
      <Typography
        component="h1"
        color="primary.main"
        fontWeight="600"
        fontSize="27px"
        align="center"
        mb={3}
      >
        Inicio de sesión
      </Typography>

      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({ isSubmitting, isValid }) => (
          <Stack component={Form} spacing={2}>
            <Field component={TextField} name="email" label="Correo" required />
            <Field component={TextField} name="password" label="Contraseña" required />
            <LoadingButton type="submit" loading={isSubmitting} variant="contained">
              Ingresar
            </LoadingButton>
            <Typography align="center">
              ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
            </Typography>
          </Stack>
        )}
      </Formik>
    </Box>
  );
};

export default InicioSesion;
