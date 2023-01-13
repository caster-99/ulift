import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { NavBar } from "../components/NavBar";
import ListaHistorialUsuarios from "../components/ListaHistorialUsuarios";
import ListaHistorialConductores from "../components/ListaHistorialConductores";
import React from "react";
import axios from "axios";
import { Colas } from "../types";

var histConductor: Colas[] = [];
var histPasajero: Colas[] = [];

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
        for (let i = 0; i < response.data.liftsConductor.length; i++) {
          histConductor[i] = response.data.liftsConductor[i];
        }

        // histConductor = response.data.liftsConductor.map((hist: any) => {
        //   var trip = {} as Colas; //arreglo auxiliar
        //   trip.liftID = hist.liftID;
        //   trip.email = hist.email;
        //   trip.name = hist.name;
        //   trip.lastname = hist.lastname;
        //   trip.routename = hist.routename;
        //   trip.waitingTime = hist.waitingTime;
        //   trip.time = hist.time;
        //   trip.date = hist.date;
        //   trip.model = hist.model;
        //   trip.color = hist.color;
        //   trip.photo = hist.photo;
        //   trip.rate = hist.rate;
        //   trip.plate = hist.plate;
        //   trip.seats = hist.seats;
        //   trip.path = hist.path;
        //   console.log(hist);
        //   return trip;
        // }

        for (let i = 0; i < response.data.liftsPasajero.length; i++) {
          histPasajero[i] = response.data.liftsPasajero[i];
        }
        // histPasajero = response.data.liftsPasajero.map((hist: any) => {
        //   var trip = {} as Colas; //arreglo auxiliar

        //   trip.liftID = hist.liftID;
        //   trip.email = hist.email;
        //   trip.name = hist.name;
        //   trip.lastname = hist.lastname;
        //   trip.routename = hist.routename;
        //   trip.waitingTime = hist.waitingTime;
        //   trip.time = hist.time;
        //   trip.date = hist.date;
        //   trip.model = hist.model;
        //   trip.color = hist.color;
        //   trip.photo = hist.photo;
        //   trip.rate = hist.rate;
        //   trip.plate = hist.plate;
        //   trip.seats = hist.seats;
        //   trip.path = hist.path;

        //   return trip;
        // });
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
                <ListaHistorialConductores historial={histConductor} />
              </TabPanel>
              <TabPanel value="2">
                <ListaHistorialUsuarios historial={histPasajero} />
              </TabPanel>
            </TabContext>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default HistorialColas;
