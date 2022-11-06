import React from "react";
import { Box } from "@mui/material";
import UserListItem from "../components/UserListItem";

const ListaUsuarios = (): JSX.Element => {
  return (
    <Box display={"flex"} flexDirection="column">
      <UserListItem
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />{" "}
      <UserListItem
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />{" "}
      <UserListItem
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />{" "}
      <UserListItem
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />{" "}
      <UserListItem
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />{" "}
      <UserListItem
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
    </Box>
  );
};

export default ListaUsuarios;
