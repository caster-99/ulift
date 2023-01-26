import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import RatingDialogo from "./RatingDialogo";
import { useSnackbar } from "notistack";
import { User } from "../types";
import axios from "axios";

var conductor: User;

const CheckParaPasajeros = (): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();

  //Solicitar a la API el destino en el que fue dejado el pasajero

  var config = {
    method: "get",
    url: "https://ulift-backend.up.railway.app/api/lift/driver",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      conductor = response.data.driver;
    })
    .catch(function (error) {
      console.log(error);
    });

  const [open, setOpen] = React.useState(false);

  const abrirDialogo = () => {
    setOpen(true);
  };
  const cerrarDialogo = () => {
    setOpen(false);
  };

  const handleClick = () => {
    const d = new Date();
    let hour = d.getHours() + ":" + d.getMinutes();

    var config = {
      method: "post",
      url: "https://ulift-backend.up.railway.app/api/lift/complete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        enqueueSnackbar("Cola finalizada a las " + hour + ", recuerda calificar a tu conductor.", {
          variant: "success",
        });
        setTimeout(() => {
          abrirDialogo();
        }, 5000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box display={"flex"} flexDirection="column">
      <Typography fontSize={{ xs: 14, md: 17 }} textAlign="left">
        Indica si fuiste dejado en el lugar correcto:
      </Typography>
      {/* <Typography fontSize={{ xs: 17, md: 20 }} fontWeight="500" textAlign="center" margin={4}>
        En las cercanías de XXXX
      </Typography> */}
      <Container
        maxWidth="md"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" sx={{ width: "100%", marginTop: "10px" }} onClick={handleClick}>
          Viaje finalizado
        </Button>
        {open && (
          <RatingDialogo isOpen={open} closeDialog={cerrarDialogo} p={conductor} tipo="pasajero" />
        )}
      </Container>
    </Box>
  );
};

export default CheckParaPasajeros;
