import React from "react";
import { Box } from "@mui/material";
import UsuarioTarjeta from "./UsuarioTarjeta";

const ListaEsperaParaPasajeros = (): JSX.Element => {
  return (
    <Box display={"flex"} flexDirection="column">
      <UsuarioTarjeta
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
      <UsuarioTarjeta
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
      <UsuarioTarjeta
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
      <UsuarioTarjeta
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
      <UsuarioTarjeta
        name="Luisa"
        time="10"
        seats={2}
        location="Los olivos"
        userId="1234"
        role="Estudiante"
      />
      <UsuarioTarjeta
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

export default ListaEsperaParaPasajeros;
