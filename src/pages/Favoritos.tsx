import { SpeedDial } from "@mui/lab";
import { Box, Container, SpeedDialAction, SpeedDialIcon, Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Fade from "@mui/material/Fade";
import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import ConductoresFavoritosDialogo from "../components/ConductoresFavoritosDialogo";
import PasajeroFavoritoDialogo from "../components/PasajeroFavoritoDialogo";
import {
  HailRounded as PasajeroFavoritoIcon,
  DriveEtaRounded as ConductorFavoritoIcon,
} from "@mui/icons-material";
import ListaUsuarios from "../components/ListaPasajeros";
import ListaConductores from "../components/ListaConductores";
import axios from "axios";
import { User } from "../types";

const Favoritos = (): JSX.Element => {
  var favoritos: User[] = [];

  const fetchFav = () => {
    const token = localStorage.getItem("token");

    var config = {
      method: "get",
      url: "https://ulift-backend.up.railway.app/api/favorites",
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.favorites));
        favoritos = response.data.favorites;
        console.log(favoritos);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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

  useEffect(() => {
    fetchFav();
  }, []);

  const verTipo = () => {
    //Aqui tienes que agarrar el arreglo de favoritos y ver el tipo de favoritos que hay segun lo que esta en la BD
  };

  const p1: User = {
    name: "Luisa",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "1234",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };

  const p2: User = {
    name: "Maria",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "11121",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };

  const p3: User = {
    name: "Ana",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "4567",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };

  const p4: User = {
    name: "Eva",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "8910",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };
  var pasajeros: User[] = [];

  pasajeros.push(p1);
  pasajeros.push(p2);
  pasajeros.push(p3);
  pasajeros.push(p4);

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
                {favoritos.length === 0 && (
                  <Typography fontSize={{ xs: 14, md: 17 }}>
                    Aun no tienes conductores favoritos
                  </Typography>
                )}
                {favoritos.length! > 0 && <ListaConductores conductores={pasajeros} />}
              </TabPanel>
              <TabPanel value="2">
                {favoritos.length === 0 && (
                  <Typography fontSize={{ xs: 14, md: 17 }}>
                    Aun no tienes pasajeros favoritos
                  </Typography>
                )}
                {favoritos.length! > 0 && <ListaUsuarios pasajeros={pasajeros} />}
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
