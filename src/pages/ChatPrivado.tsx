import { Box, Container, Fade, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import HeaderChat from "../components/HeaderChat";
import axios from "axios";
import { OptionMessage } from "../types";
/*import io from "socket.io-client";

const socket = io("http://localhost:3001");*/

const ChatPrivado = (): JSX.Element => {
  const params = useParams();

  var requests: OptionMessage[] = [];
  const token = localStorage.getItem("token");
  var requestAConductores = {
    method: "get",
    url: "https://ulift-backend.up.railway.app/api/chat/chat",
    headers: { Authorization: `Bearer ${token}` },
  };

  axios(requestAConductores)
    .then(function (response) {
      requests = response.data.requests;
      console.log("requests");
      console.log(requests);
    })
    .catch(function (error) {
      console.log(error);
    });



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