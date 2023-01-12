import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import UsuarioTarjeta from "./UsuarioTarjeta";
import { User } from "../types";
import {
  ChatRounded,
  CheckCircleOutlineRounded,
  HailRounded as PedirColaIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { grey } from "@mui/material/colors";

interface Props {
  usuario: User;
  pasajeros: User[];
}
const ListaEsperaParaPasajeros = ({ pasajeros }: Props): JSX.Element => {
  return (
    <Box display={"flex"} flexDirection="column">
      {pasajeros.map((user) => (
        <Conductor key={user.id} usuario={user} pasajeros={pasajeros} />
      ))}
    </Box>
  );
};

export default ListaEsperaParaPasajeros;

export const Conductor = ({ usuario }: Props): JSX.Element => {
  const foto = "https://ulift-backend.up.railway.app/" + usuario.photo;

  const navigate = useNavigate();
  const handleClick = (id: string) => () => {
    navigate("/colaEnProceso/pasajero");
    console.log(id);
  };

  const goChat = (id: string) => () => {
    navigate("/chatPrivado/" + id);
  };

  return (
    <Card
      sx={{
        width: "95%",
        height: "60px",
        backgroundColor: grey[100],
        boxShadow: "none",
        p: 0,
        m: 0,
        mt: 1.5,
        borderRadius: 2,
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
          <Avatar sx={{ width: 50, height: 50, marginBottom: 1 }} src={foto} />
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
            {usuario.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <IconButton sx={{ marginRight: 1 }} onClick={goChat(usuario.id)}>
            <ChatRounded color="primary" />
          </IconButton>
          <IconButton sx={{ marginRight: 1 }} onClick={handleClick(usuario.id)}>
            <PedirColaIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
    // <ListItem
    // secondaryAction={
    //     <IconButton sx={{ marginRight: 1 }} onClick={handleClick(user.id)}>
    //       <PedirColaIcon />
    //     </IconButton>
    //   }
    // <ListItemButton
    //   onClick={goChat(user.id)}
    // >
    //   <ListItemAvatar>
    //     <Avatar sx={{ width: 50, height: 50 }} src={foto} />
    //   </ListItemAvatar>
    //   <ListItemText
    //     primary={user.name}
    //     primaryTypographyProps={{
    //       fontWeight: 600,
    //     }}
    //   />
    // </ListItemButton>
    // </ListItem>
  );
};
