import React from "react";
import {
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Stack,
  Box,
  Typography,
  Card,
} from "@mui/material";
import {
  ChatRounded as ChatIcon,
  CheckCircleOutlineRounded as AcceptIcon,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
interface UserProps {
  name: string;
  // photo: object;
  lastMsg: string;
}

const ChatMini = (props: UserProps): JSX.Element => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <Card
      sx={{
        width: "100%",
        height: "80px",
        boxShadow: "none",

        p: 0,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          boxShadow: "none",
          width: "100%",
          height: "80px",
        }}
      >
        <Box alignItems="center" mr={2} onClick={handleClick}>
          {/* Aquí se tiene que cambiar para colocar la imagen */}
          <Avatar sx={{ width: "50px", height: "50px" }}>N</Avatar>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }} onClick={handleClick}>
          <Typography sx={{ fontWeight: 600 }}>{props.name}</Typography>
          <Typography sx={{ color: grey }}>{props.lastMsg}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChatMini;
