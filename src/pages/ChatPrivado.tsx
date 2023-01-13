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
  var data = JSON.stringify({
    "messageID" : 1
  });
  var requestMessage = {
    method: "post",
    url: "http://localhost:3002/api/messages",
    headers: { Authorization: `Bearer ${token}`,
    "Content-Type" : "application/json"
   },
    data: data
  };

  axios(requestMessage)
    .then(function (response) {
      requests = response.data.description;
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