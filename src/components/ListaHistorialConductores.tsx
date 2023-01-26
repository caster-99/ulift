import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import UserListItem from "./UserListItem";

import axios from "axios";
import InfoHistorialDialogo from "./InfoHistorialDialogo";

interface Colas {
  color: string;
  date: string;
  email: string;
  lastname: string;
  liftID: number;
  model: string;
  name: string;
  path: string;
  photo: string;
  plate: string;
  rate: number;
  routename: string;
  seats: number;
  time: string;
  waitingTime: number;
}
interface Props {
  historial: Colas[];
}
var histConductor: Colas[] = [];

const ListaHistorialConductores = ({ historial }: Props): JSX.Element => {
  const token = localStorage.getItem("token");
  const [isInfoUserOpen, setDialogInfoUser] = useState(false);

  const openInfoUserDialog = () => {
    setDialogInfoUser(true);
  };

  const closeInfoUserDialog = () => {
    setDialogInfoUser(false);
  };

  console.log("hist" + historial.flatMap((cola) => cola.name));

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
        />
      ))}
    </Box>
  );
};

export default ListaHistorialConductores;
