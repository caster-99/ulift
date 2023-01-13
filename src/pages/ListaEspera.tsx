import { Button, Box, Container, Fade, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import ListaEsperaParaConductores from "../components/ListaEsperaParaConductores";
import ListaEsperaParaPasajeros from "../components/ListaEsperaParaPasajeros";
import axios from "axios";
import { useEffect } from "react";
import { User } from "../types";

interface ColasDisponibles {
  driverID: number;
  email: string;
  gender: string;
  lastname: string;
  liftID: number;

  name: string;

  photo: string;

  role: string;
}

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
    })
    .catch(function (error) {
      console.log(error);
    });

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
            {/* {requests.length === 0 && (
              <Typography fontSize={{ xs: 14, md: 17 }} mb={{ xs: 2, sm: 3 }}>
                No hay nadie en la lista de espera
              </Typography>
            )} */}

            {tipoUsuario === "conductor" && <ListaEsperaParaConductores />}
            {tipoUsuario === "pasajero" && <ListaEsperaParaPasajeros />}
          </Container>
          <Button
            onClick={() => {
              window.location.reload();
            }}
            sx={{
              mt: 5,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            Refrescar
          </Button>
        </Box>
      </Fade>
    </Box>
  );
};

export default ListaEspera;
