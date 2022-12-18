import { Box, Container, Fade, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useId } from "react";
import SubPaginasHeader from "../components/SubPaginasHeader";
import car from "../assets/car.png";
import axios from "axios";

interface Values {
  placa: string;
  color: string;
  modelo: string;
  asientos: number;
}

const initialValues: Values = {
  placa: "",
  color: "",
  modelo: "",
  asientos: 1,
};
const schema = yup.object().shape({
  placa: yup.string().required("Campo requerido").length(7, "La placa debe tener 6 caracteres"),
  color: yup.string().required("Campo requerido"),
  modelo: yup.string().required("Campo requerido"),
  asientos: yup
    .number()
    .required("Campo requerido")
    .moreThan(0, "El número de asientos debe ser mayor a 0")
    .lessThan(8, "El número de asientos debe ser menor a 8"),
});

const RegistroVehiculo = (): JSX.Element => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (user: Values, { setSubmitting }: FormikHelpers<Values>) => {
    if (user.asientos < 1 || user.asientos > 8) {
      enqueueSnackbar("¡El número de asientos debe estar entre 1 y 8!", { variant: "error" });
      return;
    } else {
      setSubmitting(true);
      const url = "https://ulift-backend.up.railway.app/api/user/vehicle";
      //const url = "http://localhost:3000/api/user/vehicle";
      const token = localStorage.getItem("token");
      var data = JSON.stringify({
        model: user.modelo,
        plate: user.placa,
        color: user.color,
        seats: user.asientos,
      });

      const config = {
        method: "post",
        url: url,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          enqueueSnackbar("¡Vehículo registrado con éxito!", { variant: "success" });
          navigate("/perfil");
        })
        .catch((error) => {
          console.log(error);
          enqueueSnackbar("¡Error al registrar el vehículo!", { variant: "error" });
        });
    }
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
                  <Field
                    component={TextField}
                    name="asientos"
                    label="Asientos del vehículo"
                    required
                  />
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
        sx={{ width: "80%", position: "absolute", bottom: 0, right: 0 }}
      />
    </Box>
  );
};

export default RegistroVehiculo;
