import { Box, Container, Fab, Fade, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";

const Inicio = () => {
  return (
    <Box>
      <Container maxWidth="md" sx={{ p: 3 }}>
        <Typography
          color="primary.main"
          textAlign="center"
          fontSize={{ xs: 27, md: 30 }}
          fontWeight={600}
          mb={{ xs: 2, sm: 3 }}
        >
          Inicio
        </Typography>
      </Container>
    </Box>
  );
};
export default Inicio;
