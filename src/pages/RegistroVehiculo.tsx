import {
  Box,
  Button,
  ButtonGroup,
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
import logo from "../assets/logo512.png";

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
          maxWidth="md"
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <Box component="img" src={logo} alt="logo" sx={{ width: "70%", mb: 1 }} />
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
        </Box>
      </Fade>
    </Box>
  );
  // return (
  //   <Box>
  //     <SubPaginasHeader pageName="Registro de vehículo" />
  //     <Fade in timeout={800}>
  //       <Box>
  //         <Container maxWidth="md" sx={{ p: 3, mt: 4 }}>
  //           <Typography
  //             color="primary"
  //             textAlign="center"
  //             fontSize={{ xs: 27, md: 30 }}
  //             fontWeight={600}
  //             mb={{ xs: 2, sm: 3 }}
  //           >
  //             Registro de vehículo
  //           </Typography>

  //         </Container>
  //       </Box>
  //     </Fade>
  //   </Box>
  // );
};

export default RegistroVehiculo;
