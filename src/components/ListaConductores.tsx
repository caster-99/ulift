import React from "react";
import { Box } from "@mui/material";
import UsuarioTarjeta from "./UsuarioTarjeta";
import { User } from "../types";
import Typography from "@mui/material/Typography";

interface Props {
  conductores: User[];
}

const ListaConductores = ({ conductores }: Props): JSX.Element => {
  return (
    <Box display={"flex"} flexDirection="column">
      {conductores.length === 0 && (
        <Typography fontSize={{ xs: 14, md: 17 }}>No hay ningún conductor disponible</Typography>
      )}
      {conductores.map((user) => (
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
export default ListaConductores;
