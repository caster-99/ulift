import { Box, Container, Fade, Typography } from "@mui/material";
import { NavBar } from "../components/NavBar";

const ListaEspera = (): JSX.Element => {
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
              Lista de espera
            </Typography>
            {/* Si no hay nada en proceso aún */}
            <Typography fontSize={{ xs: 14, md: 17 }}>
              No hay nadie en la lista de espera
            </Typography>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default ListaEspera;
