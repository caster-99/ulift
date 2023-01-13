import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { NavBar } from "../components/NavBar";
import ListaHistorialUsuarios from "../components/ListaHistorialUsuarios";
import ListaHistorialConductores from "../components/ListaHistorialConductores";
import React from "react";
import axios from "axios";

const HistorialColas = (): JSX.Element => {
  const fetchHist = () => {
    const token = localStorage.getItem("token");

    var config = {
      method: "get",
      url: "https://ulift-backend.up.railway.app/api/lift/history",
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.history));
        /* favoritos = response.data.favorites.map((fav: any) => {
          var usuarios = {} as User; //arreglo auxiliar

          usuarios.name = fav.nameU;
          usuarios.trips = fav.n_trips;
          usuarios.rating = fav.rate;
          usuarios.photo = fav.photo;

          return usuarios;
        });

        console.log(favoritos);
        console.log(favoritos.length); */
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  fetchHist();
  const [value, setValue] = React.useState("1");
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
              Historial de colas
            </Typography>
            <Typography fontSize={{ xs: 14, md: 17 }}>No hay colas que mostrar</Typography>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} variant="fullWidth">
                  <Tab label="Conductores" value="1" />
                  <Tab label="Pasajeros" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <ListaHistorialConductores />
              </TabPanel>
              <TabPanel value="2">
                <ListaHistorialUsuarios />
              </TabPanel>
            </TabContext>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default HistorialColas;
