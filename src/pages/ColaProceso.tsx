import {
  Avatar,
  Box,
  Checkbox,
  Container,
  Fade,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavBar } from "../components/NavBar";
import React from "react";
import CheckParaConductores from "../components/CheckParaConductores";
import CheckParaPasajeros from "../components/CheckParaPasajeros";
import { useParams } from "react-router-dom";

const ColaProceso = (): JSX.Element => {
  var tipoUsuario: string;
  const params = useParams();
  tipoUsuario = params.tipo!;
  console.log("hola " + tipoUsuario);
  return (
    <Box>
      <NavBar />
      <Fade in timeout={800}>
        <Box>
          <Container maxWidth="md" sx={{ p: 3 }}>
            <Typography
              color="primary"
              textAlign="left"
              fontSize={{ xs: 27, md: 30 }}
              fontWeight={600}
              mb={{ xs: 2, sm: 3 }}
              mt={-5}
            >
              Cola en proceso
            </Typography>
            {/* Si no hay nada en proceso aún */}
            <Typography fontSize={{ xs: 14, md: 17 }}>No hay ninguna cola en proceso</Typography>
            {tipoUsuario === "conductor" && <CheckParaConductores />}
            {tipoUsuario === "pasajero" && <CheckParaPasajeros />}
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default ColaProceso;
