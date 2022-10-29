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
  CardActionArea,
} from "@mui/material";
import {
  ChatRounded as ChatIcon,
  CheckCircleOutlineRounded as AcceptIcon,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
interface UserProps {
  name: string;
  // photo: object;
  lastMsg: string;
  userId: string;
}

const ChatMini = (props: UserProps): JSX.Element => {
  return (
    <Card
      sx={{
        width: "360px",
        height: "75px",
        boxShadow: "none",
        p: 0,
        mb: 0.5,
      }}
    >
      <CardActionArea
        sx={{ p: 0, display: "flex", height: "100%" }}
        component={Link}
        to={`/chatPrivado/${props.userId}`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxShadow: "none",
            width: "360px",
            height: "80px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            p: 0,
          }}
        >
          <Box alignItems="center" mr={2}>
            {/* Aquí se tiene que cambiar para colocar la imagen */}
            <Avatar sx={{ width: "50px", height: "50px" }}>N</Avatar>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", width: "360px" }}>
            <Box
              sx={{
                width: "250px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                {props.name}
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                height: "20px",
                width: "250px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontSize: "0.875rem",
                fontWeight: "700",
              }}
            >
              <Typography
                sx={{
                  color: grey,
                }}
              >
                {props.lastMsg}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChatMini;
