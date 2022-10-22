import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  AddAPhotoRounded as AddPhotoIcon,
  ArrowBackRounded as ArrowBackRoundedIcon,
} from "@mui/icons-material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { CheckboxWithLabel, RadioGroup, TextField } from "formik-mui";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import PasswordField from "../components/PasswordField";
import Link from "../components/Link";
import { useId } from "react";

interface Values {
  name: string;
  sex: string;
  email: string;
  password: string;
  repeatPassword: string;
  photo: object;
  condiciones: boolean;
}

const initialValues: Values = {
  name: "",
  sex: "male",
  email: "",
  password: "",
  repeatPassword: "",
  photo: {},
  condiciones: false,
};
const SUPPORTED_FORMATS = ["image/jpg", "image/png", "image/jpeg", "image/gif"];
const schema = yup.object().shape({
  name: yup.string().required("Ingresa tu nombre, por favor"),
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
  photo: yup.mixed().required("Ingresa una foto, por favor"),
  condiciones: yup.boolean().oneOf([true], "Debes aceptar los términos y condiciones"),
});

const Registro = (): JSX.Element => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const labelId = useId();

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
            {/* <Button variant="contained" component="label" startIcon={<AddPhotoIcon />}>
              <input accept="image/*" type="file" name="photo" />
            </Button> */}
            <input type={"file"} name="photo" required />

            <label style={{ fontFamily: "Quicksand", fontSize: 12, fontWeight: 600 }}>
              <Field type="checkbox" name="condiciones" required />
              Acepto que se que la UCAB no es responsable de nada
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
