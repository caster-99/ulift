import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { NavBar } from "../components/NavBar";
import ChatMini from "../components/ChatMini";

const Chats = (): JSX.Element => {
  return (
    <Box>
      <NavBar />
      <Box>
        <Container maxWidth="md">
          <Typography
            color="primary"
            textAlign="left"
            fontSize={{ xs: 24 }}
            fontWeight={600}
            mb={{ xs: 2, sm: 3 }}
            mt={-2}
          >
            Chats
          </Typography>

          <Box display={"flex"} flexDirection="column">
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Chats;
