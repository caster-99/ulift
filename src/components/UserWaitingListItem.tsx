import React from "react";
import {
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Stack,
  Card,
  Grid,
  CardContent,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import {
  ChatRounded as ChatIcon,
  CheckCircleOutlineRounded as AcceptIcon,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
interface UserProps {
  name: string;
  id: string;
  // photo: object;
}

const UserWaitingListItem = (props: UserProps): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={5} m={0} pt={1}>
      <Card
        sx={{
          width: "95%",
          height: "60px",
          backgroundColor: grey[100],
          boxShadow: "none",
          p: 0,
          m: 0,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxShadow: "none",
            width: "100%",
            height: "60px",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          <Box alignItems="center" mr={2} mt={1}>
            {/* Aquí se tiene que cambiar para colocar la imagen */}
            <Avatar sx={{ width: "50px", height: "50px" }}>N</Avatar>
          </Box>

          <Box
            sx={{
              width: "100%",
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
          <Box>
            <IconButton
              sx={{ marginRight: 1 }}
              onClick={() => {
                console.log("Aceptar ¿y quitar de la lista?");
              }}
            >
              <AcceptIcon color="primary" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserWaitingListItem;
