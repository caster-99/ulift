import { Box, Container, Typography } from "@mui/material";
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
          {/* Si no hay ningún chat aún */}
          <Typography fontSize={{ xs: 14, md: 17 }}>No has iniciado ningún chat</Typography>
          <Box display={"flex"} flexDirection="column">
            <ChatMini name="Luisa" lastMsg="Holaaaa aaaaaa" userId="1234" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" userId="5254" />
            <ChatMini name="Luisa" lastMsg="Holaaaa aaaaaa" userId="53" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" userId="44587" />
            <ChatMini name="Luisa" lastMsg="Holaaaa aaaaaa" userId="752" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" userId="725" />
            <ChatMini name="Luisa" lastMsg="Holaaaa aaaaaa" userId="727" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" userId="7837" />
            <ChatMini name="Luisa" lastMsg="Holaaaa aaaaaa" userId="732" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" userId="73" />
            <ChatMini name="Luisa" lastMsg="Holaaaa aaaaaa" userId="793" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" userId="045" />
            <ChatMini name="Luisa" lastMsg="Holaaaa aaaaaa" userId="735" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" userId="9234" />
            <ChatMini name="Luisa" lastMsg="Holaaaa aaaaaa" userId="70" />
            <ChatMini name="Luisa" lastMsg="Holaaaaaaaaaa" userId="15" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Chats;
