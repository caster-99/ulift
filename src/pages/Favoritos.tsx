import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { NavBar } from "../components/NavBar";

const Favoritos = (): JSX.Element => {
  return (
    <Box>
      <NavBar />
      <Box>
        <Container maxWidth="md" sx={{ p: 3 }}>
          <Typography
            color="primary"
            textAlign="center"
            fontSize={{ xs: 27, md: 30 }}
            fontWeight={600}
            mb={{ xs: 2, sm: 3 }}
          >
            Favoritos
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Favoritos;
