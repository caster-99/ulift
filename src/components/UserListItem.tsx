//Para usar en el historial de colas
import React, { useState } from "react";
import {
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import InfoHistorialDialogo from "./InfoHistorialDialogo";
import { Colas } from "../types";

const UserListItem = (props: Colas): JSX.Element => {
  const [isInfoUserOpen, setDialogInfoUser] = useState(false);
  const foto = "https://ulift-backend.up.railway.app/" + props.photo;

  const openInfoUserDialog = () => {
    setDialogInfoUser(true);
  };

  const closeInfoUserDialog = () => {
    setDialogInfoUser(false);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          width: "100%",
          height: "75px",
          boxShadow: "none",
          p: 0,
          mb: 0.5,
        }}
        onClick={openInfoUserDialog}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxShadow: "none",
            width: "100%",
            height: "80px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            p: 0,
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ width: 50, height: 50 }} src={foto} />
            </ListItemAvatar>
            <Typography>
              {props.name} {props.lastname}
            </Typography>
          </ListItem>
        </CardContent>
      </Card>
      <Divider />
      <InfoHistorialDialogo
        isOpen={isInfoUserOpen}
        closeDialog={closeInfoUserDialog}
        cola={props}
      />
    </Grid>
  );
};

export default UserListItem;
