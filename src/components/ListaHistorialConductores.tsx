import React from "react";
import { Box } from "@mui/material";
import UserListItem from "./UserListItem";

const ListaHistorialConductores = (): JSX.Element => {
  return (
    <Box display={"flex"} flexDirection="column">
      <UserListItem
        name="Luisa"
        time="11:34 AM"
        date="14/12/2022"
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
      <UserListItem
        name="Luisa"
        time="11:34 AM"
        date="14/12/2022"
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
      <UserListItem
        name="Luisa"
        time="11:34 AM"
        date="14/12/2022"
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
      <UserListItem
        name="Luisa"
        time="11:34 AM"
        date="14/12/2022"
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
      <UserListItem
        name="Luisa"
        time="11:34 AM"
        date="14/12/2022"
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
      <UserListItem
        name="Luisa"
        time="11:34 AM"
        date="14/12/2022"
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
    </Box>
  );
};

export default ListaHistorialConductores;