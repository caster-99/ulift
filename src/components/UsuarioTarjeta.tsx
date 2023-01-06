import React, { useState } from "react";
import {
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Card,
  CardContent,
  Grid,
  IconButton,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import InfoUserDialogo from "./InfoUserDialogo";
import { useNavigate } from "react-router-dom";
import { ArrowCircleLeft, ChatRounded } from "@mui/icons-material";
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
    navigate("/perfilExterno/" + props.userId);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          width: "100%",
          height: "50px",
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
            height: "100%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            p: 0,
          }}
        >
          <ListItem
            secondaryAction={
              <IconButton>
                <ArrowCircleLeft />
              </IconButton>
            }
          >
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
    </Grid>
  );
};

export default UsuarioTarjeta;
