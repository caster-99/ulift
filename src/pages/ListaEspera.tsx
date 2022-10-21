import { Box, Container, Fade, Typography } from "@mui/material";
import React from "react";
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
              textAlign="center"
              fontSize={{ xs: 27, md: 30 }}
              fontWeight={600}
              mb={{ xs: 2, sm: 3 }}
            >
              Lista de espera
            </Typography>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default ListaEspera;
