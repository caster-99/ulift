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
            <ChatMini
              name="Luisa"
              lastMsg="Holaaaa aaaaaa"
              userId="1234"
              photo="https://cdn.icon-icons.com/icons2/933/PNG/512/user-shape_icon-icons.com_72487.png"
            />
            <ChatMini
              name="Luisa"
              lastMsg="Holaaaa aaaaaa"
              userId="1234"
              photo="https://cdn.icon-icons.com/icons2/933/PNG/512/user-shape_icon-icons.com_72487.png"
            />
            <ChatMini
              name="Luisa"
              lastMsg="Holaaaa aaaaaa"
              userId="1234"
              photo="https://cdn.icon-icons.com/icons2/933/PNG/512/user-shape_icon-icons.com_72487.png"
            />
            <ChatMini
              name="Luisa"
              lastMsg="Holaaaa aaaaaa"
              userId="1234"
              photo="https://cdn.icon-icons.com/icons2/933/PNG/512/user-shape_icon-icons.com_72487.png"
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Chats;
