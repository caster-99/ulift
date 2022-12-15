import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { NavBar } from "../components/NavBar";
import ListaHistorialUsuarios from "../components/ListaHistorialUsuarios";
import ListaHistorialConductores from "../components/ListaHistorialConductores";
import React from "react";

const HistorialColas = (): JSX.Element => {
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
