import { Box, Container, Fade, Typography } from "@mui/material";
import React from "react";
import SubPaginasHeader from "../components/SubPaginasHeader";

const RegistroVehiculo = (): JSX.Element => {
  return (
    <Box>
      <SubPaginasHeader pageName="Registro de vehículo" />
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
              Registro de vehículo
            </Typography>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default RegistroVehiculo;
