import { Box, Container, Fade, Typography } from "@mui/material";
import React from "react";
import SubPaginasHeader from "../components/SubPaginasHeader";

const ListaEspera = (): JSX.Element => {
  return (
    <Box>
      <SubPaginasHeader pageName="Lista de espera" />
      <Fade in timeout={800}>
        <Box>
          <Container maxWidth="md" sx={{ p: 3, mt: 4 }}>
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
