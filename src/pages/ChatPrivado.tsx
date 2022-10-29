import { Box, Container, Fade, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import HeaderChat from "../components/HeaderChat";

const ChatPrivado = (): JSX.Element => {
  const params = useParams();
  return (
    <Box>
      <HeaderChat />
      <Fade in timeout={800}>
        <Container maxWidth="md" sx={{ p: 3, mt: 4 }}>
          <Typography
            color="primary"
            textAlign="center"
            fontSize={{ xs: 27, md: 30 }}
            fontWeight={600}
            mb={{ xs: 2, sm: 3 }}
          >
            Aquí va el chat con {params.userId} (El nombre aún no se puede cambiar porque hay que
            buscar en la BD el nombre con el Id)
          </Typography>
        </Container>
      </Fade>
    </Box>
  );
};

export default ChatPrivado;
