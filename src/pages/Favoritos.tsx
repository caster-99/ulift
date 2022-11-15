import { SpeedDial } from "@mui/lab";
import { Box, Container, SpeedDialAction, SpeedDialIcon, Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Fade from "@mui/material/Fade";
import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import ConductoresFavoritosDialogo from "../components/ConductoresFavoritosDialogo";
import PasajeroFavoritoDialogo from "../components/PasajeroFavoritoDialogo";
import {
  HailRounded as PasajeroFavoritoIcon,
  DriveEtaRounded as ConductorFavoritoIcon,
} from "@mui/icons-material";
import ListaUsuarios from "../components/ListaUsuarios";
import ListaConductores from "../components/ListaConductores";

const Favoritos = (): JSX.Element => {
  const [isDialogPasajeroFavoritoOpen, setDialogPasajeroFavoritoOpen] = useState(false);
  const [isDialogConductorFavoritoOpen, setDialogConductorFavoritoOpen] = useState(false);
  const [value, setValue] = React.useState("1");
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

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <NavBar />
      <Fade in timeout={800}>
        <Box>
          <Container maxWidth="md">
            <Typography
              color="primary"
              textAlign="left"
              fontSize={{ xs: 24 }}
              fontWeight={600}
              mb={{ xs: 2, sm: 3 }}
              mt={-2}
            >
              Favoritos
            </Typography>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} variant="fullWidth">
                  <Tab label="Conductores" value="1" />
                  <Tab label="Pasajeros" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <ListaConductores />
              </TabPanel>
              <TabPanel value="2">
                <ListaUsuarios />
              </TabPanel>
            </TabContext>
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
