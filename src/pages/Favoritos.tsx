import { SpeedDial } from "@mui/lab";
import { Box, Container, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import ConductoresFavoritosDialogo from "../components/ConductoresFavoritosDialogo";
import PasajeroFavoritoDialogo from "../components/PasajeroFavoritoDialogo";
import {
  HailRounded as PasajeroFavoritoIcon,
  DriveEtaRounded as ConductorFavoritoIcon,
} from "@mui/icons-material";

const Favoritos = (): JSX.Element => {
  const [isDialogPasajeroFavoritoOpen, setDialogPasajeroFavoritoOpen] = useState(false);
  const [isDialogConductorFavoritoOpen, setDialogConductorFavoritoOpen] = useState(false);
  const openPasajeroFavoritoDialog = () => {
    setDialogPasajeroFavoritoOpen(true);
  };

  const closePasajeroFavoritoDialog = () => {
    setDialogPasajeroFavoritoOpen(false);
  };

  const openConductorFavoritoDialog = () => {
    setDialogConductorFavoritoOpen(true);
  };

  const closeConductorFavoritoDialog = () => {
    setDialogConductorFavoritoOpen(false);
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
              <SpeedDialAction
                icon={<ConductorFavoritoIcon />}
                onClick={openConductorFavoritoDialog}
                tooltipTitle="Conductor"
                tooltipOpen
              />
              <ConductoresFavoritosDialogo
                isOpen={isDialogConductorFavoritoOpen}
                closeDialog={closeConductorFavoritoDialog}
              />
              <SpeedDialAction
                icon={<PasajeroFavoritoIcon />}
                onClick={openPasajeroFavoritoDialog}
                tooltipTitle="Pasajero"
                tooltipOpen
              />
              <PasajeroFavoritoDialogo
                isOpen={isDialogPasajeroFavoritoOpen}
                closeDialog={closePasajeroFavoritoDialog}
              />
            </SpeedDial>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default Favoritos;
