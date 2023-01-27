import { Box, Container, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import React from "react";
import { NavBar } from "../components/NavBar";

const FAQs = (): JSX.Element => {
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
              FAQs
            </Typography>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default FAQs;
