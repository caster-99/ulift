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

const ListaEsperaParaPasajeros = (): JSX.Element => {
  const p1: User = {
    name: "Luisa",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "1234",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };

  const p2: User = {
    name: "Maria",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "11121",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };

  const p3: User = {
    name: "Ana",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "4567",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };

  const p4: User = {
    name: "Eva",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "8910",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };
  var pasajeros: User[] = [];

  pasajeros.push(p1);
  pasajeros.push(p2);
  pasajeros.push(p3);
  pasajeros.push(p4);

  return (
    <Box display={"flex"} flexDirection="column">
      {pasajeros.map((user) => (
        <Conductor
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          role={user.role}
          gender={user.gender}
          photo={user.photo}
          trips={user.trips}
          rating={user.rating}
          emergencyContact={user.emergencyContact}
          emergencyName={user.emergencyName}
          vehicles={user.vehicles}
          destinations={user.destinations}
          routes={user.routes}
        />
      ))}
    </Box>
  );
};

export default ListaEsperaParaPasajeros;

export const Conductor = (user: User): JSX.Element => {
  const foto = "https://ulift-backend.up.railway.app/" + user.photo;

  const navigate = useNavigate();
  const handleClick = (id: string) => () => {
    navigate("/colaEnProceso");
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
            {user.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <IconButton sx={{ marginRight: 1 }} onClick={goChat(user.id)}>
            <ChatRounded color="primary" />
          </IconButton>
          <IconButton sx={{ marginRight: 1 }} onClick={handleClick(user.id)}>
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
