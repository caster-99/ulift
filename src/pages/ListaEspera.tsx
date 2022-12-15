import { Box, Container, Fade, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { NavBar } from "../components/NavBar";
import UserWaitingListItem from "../components/UserWaitingListItem";

const ListaEspera = (): JSX.Element => {
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
          <Container maxWidth="md" sx={{ p: 3 }}>
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
            <Grid container spacing={{ xs: 2, md: 3 }} m={4} p={0}>
              <UserWaitingListItem name="Luisa" />
              <UserWaitingListItem name="Luisa" />
              <UserWaitingListItem name="Luisa" />
              <UserWaitingListItem name="Luisa" />
              <UserWaitingListItem name="Luisa" />
            </Grid>
          </Container>
          {/* Cuando haya seleccionado al menos uno, debe habilitarse esta opción */}
          <Button variant="contained">Empezar viaje</Button>
        </Box>
      </Fade>
    </Box>
  );
};

export default ListaEspera;
