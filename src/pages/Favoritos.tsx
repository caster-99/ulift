import { SpeedDial } from "@mui/lab";
import { 
  Box, 
  Container, 
  SpeedDialAction, 
  SpeedDialIcon, 
  Typography, 
  Tab,
} from "@mui/material";
import {
  TabContext,
  TabList,
  TabPanel,
} from "@mui/lab";
import Fade from "@mui/material/Fade";
import React, { useState } from "react";
import BuscarColaDialogo from "../components/BuscarColaDialogo";
import { NavBar } from "../components/NavBar";
import OfrecerColaDialogo from "../components/OfrecerColaDialogo";
import ListaUsuarios from "../components/ListaUsuarios";
import {
  ArrowCircleUpRounded as OfrecerColaIcon,
  ArrowCircleDownRounded as PedirColaIcon,
} from "@mui/icons-material";

const Favoritos = (): JSX.Element => {
  const [isDialogOfrecerOpen, setDialogOfrecerOpen] = useState(false);
  const [isDialogPedirOpen, setDialogPedirOpen] = useState(false);

  const [value, setValue] = React.useState('1');

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

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <NavBar />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Conductores" value="1" />
            <Tab label="Pasajeros" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ListaUsuarios/>
        </TabPanel>
        <TabPanel value="2">
          <ListaUsuarios/>
        </TabPanel>
      </TabContext>
      <Fade in timeout={800}>
        <Box>
          

          <Container maxWidth="md" sx={{ p: 3 }}>
            {/* <Typography
              color="primary"
              textAlign="center"
              fontSize={{ xs: 27, md: 30 }}
              fontWeight={600}
              mb={{ xs: 2, sm: 3 }}
            >
              Favoritos
            </Typography>{" "} */}

            

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
