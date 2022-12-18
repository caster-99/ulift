import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import UsuarioTarjeta from "./UsuarioTarjeta";
import UserWaitingListItem from "./UserWaitingListItem";
import { useNavigate } from "react-router-dom";

const ListaEsperaParaConductores = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Box display={"flex"} flexDirection="column" alignItems="center" justifyContent="center">
      {/* <Grid container spacing={{ xs: 2, md: 3 }} m={4} p={0}>
        <UserWaitingListItem name="Luisa" />
        <UserWaitingListItem name="Luisa" />
        <UserWaitingListItem name="Luisa" />
        <UserWaitingListItem name="Luisa" />
        <UserWaitingListItem name="Luisa" />
      </Grid> */}
      <List dense sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <UserWaitingListItem name="Luisa" id="1" />
        <UserWaitingListItem name="Luisa" id="1" />
        <UserWaitingListItem name="Luisa" id="1" />
        <UserWaitingListItem name="Luisa" id="1" />
        <UserWaitingListItem name="Luisa" id="1" />
        <UserWaitingListItem name="Luisa" id="1" />
        <UserWaitingListItem name="Luisa" id="1" />
      </List>

      {/* Cuando haya seleccionado al menos uno o el límite indicado y si es conductor , debe habilitarse esta opción */}
      <Button
        variant="contained"
        onClick={() => {
          //
          navigate("/colaEnProceso");
        }}
      >
        Empezar viaje
      </Button>
    </Box>
  );
};

export default ListaEsperaParaConductores;
