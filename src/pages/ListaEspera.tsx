import { Box, Container, Fade, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import UserWaitingListItem from "../components/UserWaitingListItem";
import ListaEsperaParaConductores from "../components/ListaEsperaParaConductores";
import ListaEsperaParaPasajeros from "../components/ListaEsperaParaPasajeros";

const ListaEspera = (): JSX.Element => {
  const navigate = useNavigate();
  //Necesito establecer los tipos de usuario, es decir, saber si es un conducto o un pasajero
  //porque a cada uno se le va a mostrar algo distinto
  var tipoUsuario;
  tipoUsuario = "pasajero";
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
            {/* Si no hay nada en proceso aún */}
            <Typography fontSize={{ xs: 14, md: 17 }} mb={{ xs: 2, sm: 3 }}>
              No hay nadie en la lista de espera
            </Typography>
            {tipoUsuario === "conductor" && <ListaEsperaParaConductores />}
            {tipoUsuario === "pasajero" && <ListaEsperaParaPasajeros />}
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default ListaEspera;
