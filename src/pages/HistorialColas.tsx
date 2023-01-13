import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { NavBar } from "../components/NavBar";
import ListaHistorialUsuarios from "../components/ListaHistorialUsuarios";
import ListaHistorialConductores from "../components/ListaHistorialConductores";
import React from "react";
import axios from "axios";
import { Colas } from "../types";

var historial: Colas[] = [];

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
        historial = response.data.history.map((hist: any) => {
          var trip = {} as Colas; //arreglo auxiliar

          trip.name = hist.name + " " + hist.lastname;
          trip.routename = hist.routename;
          trip.time = hist.time.toString();
          trip.date = hist.date.toString();
          trip.car = hist.model + " " + hist.color;
          trip.photo = hist.photo;
          trip.rate = hist.rate;
          trip.plate = hist.plate;

          return trip;
        });

        console.log(historial);
        console.log(historial.length);
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
                <ListaHistorialConductores historial={historial} />
              </TabPanel>
              <TabPanel value="2">
                <ListaHistorialUsuarios historial={historial} />
              </TabPanel>
            </TabContext>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default HistorialColas;
