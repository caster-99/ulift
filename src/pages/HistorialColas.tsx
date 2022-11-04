import { Box, Container, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { NavBar } from "../components/NavBar";

const HistorialColas = (): JSX.Element => {
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
              Historial de colas
            </Typography>
            <Typography fontSize={{ xs: 14, md: 17 }}>No hay colas que mostrar</Typography>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default HistorialColas;
