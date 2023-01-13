import React from "react";
import { Box } from "@mui/material";
import UserListItem from "./UserListItem";
import { Colas } from "../types";

interface Props {
  historial: Colas[];
}

const ListaHistorialConductores = ({ historial }: Props): JSX.Element => {
  return (
    <Box display={"flex"} flexDirection="column">
      {historial.map((cola) => (
        <UserListItem
          name={cola.name}
          time={cola.time}
          date={cola.date}
          location={cola.routename}
          car={cola.car}
          photo={cola.photo}
          plate={cola.plate}
          rate={cola.rate}
          //role="Estudiante"
        />
      ))}
    </Box>
  );
};

export default ListaHistorialConductores;
