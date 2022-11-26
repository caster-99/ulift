import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Container,
  Divider,
  Fade,
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
import Select from "../components/Select";
import SubPaginasHeader from "../components/SubPaginasHeader";
import car from "../assets/car.png";

interface Values {
  placa: string;
  color: string;
  modelo: string;
}

const initialValues: Values = {
  placa: "",
  color: "",
  modelo: "",
};
const schema = yup.object().shape({
  placa: yup.string().required("Campo requerido"),
  color: yup.string().required("Campo requerido"),
  modelo: yup.string().required("Campo requerido"),
});

const RegistroVehiculo = (): JSX.Element => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const labelId = useId();

  const onSubmit = async (user: Values, { setSubmitting }: FormikHelpers<Values>) => {
    //    setSubmitting(true);

    // const { repeatPassword, ...userData } = user;

    // const error = await signUp({ ...userData});

    // if (error) {
    //   setSubmitting(false);
    //   return enqueueSnackbar(error, { variant: "error" });
    // }
    enqueueSnackbar("¡Ahora puedes iniciar sesión!", { variant: "success" });
    navigate(`/login`);
  };

  return (
    <Box>
      <SubPaginasHeader pageName="Registro de Vehículo" />
      <Fade in timeout={800}>
        <Box
          //maxWidth="md"
          m={-1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              maxWidth: 450,
              mb: 3,
              mt: 12,
              position: "relative",
            }}
          >
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
              {({ isSubmitting }) => (
                <Stack component={Form} spacing={2} justifyContent="center" alignContent={"center"}>
                  <Field component={TextField} name="placa" label="Placa del vehículo" required />
                  <Field component={TextField} name="color" label="Color del vehículo" required />
                  <Field component={TextField} name="modelo" label="Modelo del vehículo" required />

                  <LoadingButton type="submit" loading={isSubmitting} variant="contained">
                    Registrar vehículo
                  </LoadingButton>
                </Stack>
              )}
            </Formik>
          </Container>
        </Box>
      </Fade>
      <Box
        component="img"
        src={car}
        alt="car"
        sx={{ width: 400, position: "absolute", bottom: 0, right: 0 }}
      />
    </Box>
  );
};

export default RegistroVehiculo;
