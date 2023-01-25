import React from "react";
import { Box } from "@mui/material";
import UserListItem from "./UserListItem";
import { Colas } from "../types";

interface Props {
  historial: Colas[];
}

const ListaHistorialUsuarios = ({ historial }: Props): JSX.Element => {
  return (
    <Box display={"flex"} flexDirection="column">
      {historial.map((cola, index) => (
        <UserListItem
          liftID={cola.liftID}
          email={cola.email}
          name={cola.name}
          lastname={cola.lastname}
          routename={cola.routename}
          waitingTime={cola.waitingTime}
          time={cola.time}
          date={cola.date}
          model={cola.model}
          color={cola.color}
          photo={cola.photo}
          rate={cola.rate}
          plate={cola.plate}
          seats={cola.seats}
          path={cola.path}
          key={index}
          //role="Estudiante"
        />
      ))}
    </Box>
  );
};

export default ListaHistorialUsuarios;
