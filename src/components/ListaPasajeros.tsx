import React from "react";
import { Box } from "@mui/material";
import UsuarioTarjeta from "./UsuarioTarjeta";
import { User } from "../types";
interface Props {
  pasajeros: User[];
}

const ListaPasajeros = ({ pasajeros }: Props): JSX.Element => {
  return (
    <Box display={"flex"} flexDirection="column">
      {pasajeros.map((user, index) => (
        <UsuarioTarjeta
          key={index}
          id={user.id}
          name={user.name}
          lastname={user.lastname}
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
