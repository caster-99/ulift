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
import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";
import axios from "axios";

interface Values {
  name: string;
  lat: number;
  lng: number;
}

const initialValues: Values = {
  name: "",
  lat: 0,
  lng: 0,
};
const schema = yup.object().shape({
  name: yup.string().required("Campo requerido"),
});

const RegistroDestino = (): JSX.Element => {
  var latitude = "";
  var longitude = "";
  const navigate = useNavigate();
  const data = new FormData();
  const { enqueueSnackbar } = useSnackbar();
  const ucab = { lat: 8.296423157514385, lng: -62.71283272286731 };
  const containerStyle = {
    width: "100%",
    height: "400px",
    margin: "2px",
    marginTop: "20px",
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDiBDk9jPW-I_ka-HEAH5gZO2wfXblZ88k",
    libraries: ["places", "drawing"],
  });
  const onSubmit = async (user: Values, { setSubmitting }: FormikHelpers<Values>) => {
    data.append("name", user.name);
    data.append("lat", latitude.toString()!);
    data.append("lng", longitude.toString()!);

    for (let [key, value] of data) {
      console.log(`${key}: ${value}`);
    }

    const token = localStorage.getItem("token");
    const config = {
      method: "post",
      url: "https://ulift-backend.up.railway.app/api/user/destination",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate(-1);
      })
      .catch(function (error) {
        console.log(error);
        enqueueSnackbar("¡Algo salió mal!", { variant: "error" });
        data.delete("name");
        data.delete("lat");
        data.delete("lng");
      });
  };

  return (
    <Box>
      <SubPaginasHeader pageName="Registro de Destino" />
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
              mt: 6,
              position: "relative",
            }}
          >
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
              {({ isSubmitting }) => (
                <Stack component={Form} spacing={2} justifyContent="center" alignContent={"center"}>
                  <Field component={TextField} name="name" label="Nombre del destino" required />
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

                  <LoadingButton type="submit" loading={isSubmitting} variant="contained">
                    Registrar destino
                  </LoadingButton>
                </Stack>
              )}
            </Formik>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default RegistroDestino;
