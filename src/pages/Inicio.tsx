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

const Inicio = (): JSX.Element => {
  const [isDialogOfrecerOpen, setDialogOfrecerOpen] = useState(false);
  const [isDialogPedirOpen, setDialogPedirOpen] = useState(false);

  const openOfrecerDialog = () => {
    setDialogOfrecerOpen(true);
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
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};
export default Inicio;
