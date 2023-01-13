import { Box, Container, Fade, Typography, Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderChat from "../components/HeaderChat";
import { OptionMessage } from "../types";

var mensajes: OptionMessage[] = [];

const ChatPrivado = (): JSX.Element => {
  const params = useParams();

  const fetchChat = () => {
    const token = localStorage.getItem("token");

    var config = {
      method: "get",
      url: "'http://localhost:3002/api/messages'",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.messages));
        mensajes = response.data.messages.map((msjes: any) => {
          var chat = {} as OptionMessage; //arreglo auxiliar

          chat.messageID = msjes.messageID;
          chat.description = msjes.description;

          return chat;
        });

        console.log(mensajes);
        console.log(mensajes.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  fetchChat();

  useEffect(() => {
    fetchChat();
  }, []);

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
            user id: {params.userId}
          </Typography>
        </Container>
      </Fade>
    </Box>
  );
};

export default ChatPrivado;
