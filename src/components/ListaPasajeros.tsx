import React from "react";
import { Box } from "@mui/material";
import UsuarioTarjeta from "./UsuarioTarjeta";
import { User } from "../types";

const ListaPasajeros = (): JSX.Element => {
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
        <UsuarioTarjeta
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
export default ListaPasajeros;
