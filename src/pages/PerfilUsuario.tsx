import {
  Box, 
  Container, 
  Typography, 
  MenuItem, 
  MenuList, 
  ListItemIcon, 
  ListItemText, 
  Divider, } from "@mui/material";
  import {
    AccessTimeRounded as TimeIcon,
    DirectionsCarFilledRounded as CarIcon,
    AddLocationAltRounded as LocationIcon,
  } from "@mui/icons-material";
import React from "react";
import { NavBar } from "../components/NavBar";
import Profile from "../components/Profile";

const PerfilUsuario = (): JSX.Element => {
  return (
    <Box>
      <NavBar />
      <Box justifyContent="space-between" flexDirection="column" flexGrow={1}>
        <Container maxWidth="md" sx={{ p: 2 }}>
          <Profile/>
        </Container>

        <MenuList>
          <Divider />
            <MenuItem>
              <ListItemIcon>
                <CarIcon fontSize="small" color="primary"/>
              </ListItemIcon>
              <ListItemText 
                primary="Agregar Vehiculo"
                primaryTypographyProps={{
                  fontWeight: 600,
                }}
               />
            </MenuItem>
          <Divider />
        </MenuList>
      </Box>
    </Box>
  );
};

export default PerfilUsuario;
