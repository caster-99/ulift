import { Box, Container, Fade, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import ListaEsperaParaConductores from "../components/ListaEsperaParaConductores";
import ListaEsperaParaPasajeros from "../components/ListaEsperaParaPasajeros";
import axios from "axios";
import { useEffect } from "react";
import { User } from "../types";

const ListaEspera = (): JSX.Element => {
  //Necesito establecer los tipos de usuario, es decir, saber si es un conducto o un pasajero
  //porque a cada uno se le va a mostrar algo distinto
  var tipoUsuario: string;
  const params = useParams();
  tipoUsuario = params.tipo!;
  var requests: User[] = [];
  const token = localStorage.getItem("token");
  var requestAConductores = {
    method: "get",
    url: "https://ulift-backend.up.railway.app/api/lift/requests",
    headers: { Authorization: `Bearer ${token}` },
  };

  axios(requestAConductores)
    .then(function (response) {
      requests = response.data.requests;
      console.log("requests");
      console.log(requests);
    })
    .catch(function (error) {
      console.log(error);
    });

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
  var usuarios: User[] = [];

  usuarios.push(p1);
  usuarios.push(p2);
  usuarios.push(p3);
  usuarios.push(p4);

  return (
    <Box>
      <NavBar />
      <Fade in timeout={800}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Container maxWidth="md" sx={{ p: 3, alignItems: "center" }}>
            <Typography
              color="primary"
              textAlign="left"
              fontSize={{ xs: 27, md: 30 }}
              fontWeight={600}
              mb={{ xs: 2, sm: 3 }}
              mt={-5}
            >
              Lista de espera
            </Typography>
            {requests.length === 0 && (
              <Typography fontSize={{ xs: 14, md: 17 }} mb={{ xs: 2, sm: 3 }}>
                No hay nadie en la lista de espera
              </Typography>
            )}
            {requests.length > 0 && tipoUsuario === "conductor" && (
              <ListaEsperaParaConductores pasajeros={requests} usuario={p1} />
            )}
            {tipoUsuario === "pasajero" && (
              <ListaEsperaParaPasajeros pasajeros={usuarios} usuario={p1} />
            )}
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default ListaEspera;
