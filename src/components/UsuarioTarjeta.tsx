import React, { useState } from "react";
import {
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import InfoUserDialogo from "./InfoUserDialogo";
import { useNavigate } from "react-router-dom";
interface UserProps {
  name: string;
  // photo: object;
  time: string;
  userId: string;
  seats: number;
  location: string;
  role: string;
}

const UsuarioTarjeta = (props: UserProps): JSX.Element => {
  const navigate = useNavigate();
  const openInfoUserDialog = () => {
    navigate("/perfil/" + props.userId);
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
              <Avatar>{props.userId}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={props.name}
              primaryTypographyProps={{
                fontWeight: 600,
              }}
            />
          </ListItem>
        </CardContent>
      </Card>
      <Divider />
    </Grid>
  );
};

export default UsuarioTarjeta;
