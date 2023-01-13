import React from "react";
import { Box } from "@mui/material";
import UserListItem from "./UserListItem";
import { Lift } from "../types";

interface Props {
  historial: Lift[];
}

const ListaHistorialConductores = (/* { historial }: Props */): JSX.Element => {
  return (
    <Box display={"flex"} flexDirection="column">
      {/* {historial.map((lift) => (
        <UserListItem
          name="Luisa"
          time="11:34 AM"
          date="14/12/2022"
          location="Los olivos"
          userId="1234"
          role="Estudiante"
        />
      ))} */}
    </Box>
  );
};

export default ListaHistorialConductores;
