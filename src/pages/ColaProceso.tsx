import { Box, Container, Fade, Typography } from "@mui/material";
import { NavBar } from "../components/NavBar";
import CheckParaConductores from "../components/CheckParaConductores";
import CheckParaPasajeros from "../components/CheckParaPasajeros";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const ColaProceso = (): JSX.Element => {
  var tipoUsuario: string;
  const params = useParams();
  tipoUsuario = params.tipo!;

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
            {localStorage.getItem("mode") === "F" && (
              <Typography fontSize={{ xs: 14, md: 17 }}>No hay ninguna cola en proceso</Typography>
            )}
            {tipoUsuario === "conductor" && localStorage.getItem("mode") !== "F" && (
              <CheckParaConductores />
            )}
            {tipoUsuario === "pasajero" && localStorage.getItem("mode") !== "F" && (
              <CheckParaPasajeros />
            )}
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default ColaProceso;
