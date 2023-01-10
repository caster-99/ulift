import { Box, Container, Fab, Fade, Grid, Tooltip, Typography, Tabs } from "@mui/material";
import React from "react";
import { NavBar } from "../components/NavBar";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  DriveEtaRounded as OfrecerColaIcon,
  HailRounded as PedirColaIcon,
} from "@mui/icons-material";

import { useState } from "react";
import BuscarColaDialogo from "../components/BuscarColaDialogo";
import OfrecerColaDialogo from "../components/OfrecerColaDialogo";
import ConductorDisponible from "../components/ConductorDisponible";
import InfoUserDialogo from "../components/InfoUserDialogo";
import axios from "axios";
import { Route, Vehicle } from "../types";
import AlertaDialogo from "../components/AlertaDialogo";

const Inicio = (): JSX.Element => {
  var vehiculos: Vehicle[] = [];
  var rutas: Route[] = [];
  const token = localStorage.getItem("token");
  var queryVehiculos = {
    method: "get",
    url: "https://ulift-backend.up.railway.app/api/user/vehicle",
    headers: { Authorization: `Bearer ${token}` },
  };

  var queryRutas = {
    method: "get",
    url: "https://ulift-backend.up.railway.app/api/user/route",
    headers: { Authorization: `Bearer ${token}` },
  };

  axios(queryVehiculos)
    .then(function (response) {
      vehiculos = response.data.vehicles;
      console.log(vehiculos);
    })
    .catch(function (error) {
      console.log(error);
    });

  axios(queryRutas)
    .then(function (response) {
      rutas = response.data.routes;
      console.log(rutas);
    })
    .catch(function (error) {
      console.log(error);
    });

  const [isDialogOfrecerOpen, setDialogOfrecerOpen] = useState(false);
  const [isDialogPedirOpen, setDialogPedirOpen] = useState(false);
  const [alerta, setAlerta] = useState(false);

  const openOfrecerDialog = () => {
    if (vehiculos.length === 0) {
      alert(
        "No tienes vehiculos registrados. Para poder proceder, debe registrar un vehículo en su perfil."
      );
    } else if (rutas.length === 0) {
      alert(
        "No tienes rutas registradas. Para poder proceder, debe registrar una ruta en su perfil."
      );
    } else {
      setDialogOfrecerOpen(true);
    }
  };

  const closeOfrecerDialog = () => {
    setDialogOfrecerOpen(false);
  };

  const openPedirDialog = () => {
    setDialogPedirOpen(true);
  };

  const closePedirDialog = () => {
    setDialogPedirOpen(false);
  };

  return (
    <Box>
      <NavBar />
      <Fade in timeout={800}>
        <Box>
          <Container maxWidth="md" sx={{ p: 2 }}>
            <Box display={"flex"} flexDirection="column">
              <Typography
                color="primary"
                textAlign="left"
                fontSize={{ xs: 24 }}
                fontWeight={600}
                mb={{ xs: 2, sm: 3 }}
                mt={-5}
              >
                Conductores disponibles
              </Typography>
              {/* Si no hay nada en proceso aún */}
              <Typography fontSize={{ xs: 14, md: 17 }}>
                No hay ningún conductor disponible
              </Typography>

              {/* Si hay conductores disponibles, se saca de la API directamente y se muestra 
              la siguiente información */}

              <Grid container spacing={{ xs: 2, md: 3 }}>
                <ConductorDisponible
                  name="Luisa"
                  time="10"
                  seats={2}
                  location="Los olivos"
                  userId="1234"
                  role="Estudiante"
                />
              </Grid>
            </Box>
            <SpeedDial
              ariaLabel="acciones"
              sx={{ position: "fixed", bottom: "8%", right: "5%" }}
              icon={<SpeedDialIcon />}
              FabProps={{
                color: "secondary",
                size: "large",
              }}
            >
              <SpeedDialAction
                icon={<PedirColaIcon />}
                onClick={openPedirDialog}
                tooltipTitle="Buscar"
                tooltipOpen
              />
              {isDialogPedirOpen && (
                <BuscarColaDialogo isOpen={isDialogPedirOpen} closeDialog={closePedirDialog} />
              )}
              <SpeedDialAction
                icon={<OfrecerColaIcon />}
                onClick={openOfrecerDialog}
                tooltipTitle="Ofrecer"
                tooltipOpen
              />
              {isDialogOfrecerOpen && (
                <OfrecerColaDialogo isOpen={isDialogOfrecerOpen} closeDialog={closeOfrecerDialog} />
              )}
            </SpeedDial>
            {/* {alerta && (
              <AlertaDialogo
                isOpen={alerta}
                titulo="¡No puede ofrecer una cola aún!"
                mensaje="No tienes vehiculos registrados. Para poder proceder, debe registrar un vehículo en su perfil."
              />
            )} */}
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};
export default Inicio;
