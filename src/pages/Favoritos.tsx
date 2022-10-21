import { SpeedDial } from "@mui/lab";
import { Box, Container, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import React, { useState } from "react";
import BuscarColaDialogo from "../components/BuscarColaDialogo";
import { NavBar } from "../components/NavBar";
import OfrecerColaDialogo from "../components/OfrecerColaDialogo";
import {
  ArrowCircleUpRounded as OfrecerColaIcon,
  ArrowCircleDownRounded as PedirColaIcon,
} from "@mui/icons-material";

const Favoritos = (): JSX.Element => {
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
          <Container maxWidth="md" sx={{ p: 3 }}>
            <Typography
              color="primary"
              textAlign="center"
              fontSize={{ xs: 27, md: 30 }}
              fontWeight={600}
              mb={{ xs: 2, sm: 3 }}
            >
              Favoritos
            </Typography>{" "}
            <SpeedDial
              ariaLabel="acciones"
              sx={{ position: "fixed", bottom: "8%", right: "5%" }}
              icon={<SpeedDialIcon />}
              FabProps={{
                color: "secondary",
                size: "large",
              }}
            >
              <SpeedDialAction icon={<PedirColaIcon />} onClick={openPedirDialog} />
              {/* Aquí llamar a los dialogos correspondientes */}
              <BuscarColaDialogo isOpen={isDialogPedirOpen} closeDialog={closePedirDialog} />
              <SpeedDialAction icon={<OfrecerColaIcon />} onClick={openOfrecerDialog} />
              <OfrecerColaDialogo isOpen={isDialogOfrecerOpen} closeDialog={closeOfrecerDialog} />
            </SpeedDial>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default Favoritos;
