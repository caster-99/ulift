import {
  Box,
  Container,
  Typography,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import {
  AccessTimeRounded as TimeIcon,
  DirectionsCarFilledRounded as CarIcon,
  EditRounded as EditIcon,
  AddLocationAltRounded as LocationIcon,
  RampLeftRounded as RutaIcon,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import Profile from "../components/Profile";
import logo from "../assets/logo512.png";
import { useNavigate } from "react-router-dom";
import api_instance from "../api/api_instance";
import { User } from "../types/index";

const usuario: User = {
  name: "",
  id: "",
  email: "",
  role: "",
  genre: "",
};

const PerfilUsuario = (): JSX.Element => {
  const navigate = useNavigate();
  const [userInfo, setUser] = useState({});
  const url = "https://ulift-backend-production.up.railway.app/api/user/profile";

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    const response = await api_instance.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(response.data.user);
    console.log(response.data.user.nameU);
    usuario.name = response.data.user.nameU + " " + response.data.user.lastname;
    usuario.id = response.data.user.id;
    usuario.email = response.data.user.email;
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Box>
      <NavBar />
      <Box justifyContent="space-between" flexDirection="column" flexGrow={1}>
        <Container maxWidth="md" sx={{ p: 2 }}>
          <Profile
            name={usuario.name}
            id="user@ucab.edu.ve"
            photo={{ logo }}
            rides={2}
            rating={3}
          />
        </Container>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Divider />
          <Card
            sx={{
              display: "none",
              width: "100%",
              height: "80px",
              boxShadow: "none",
              p: 0,
            }}
            onClick={() => {
              navigate("/registroVehiculo");
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                boxShadow: "none",
                width: "100%",
                height: "80px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              <EditIcon />
              <Typography sx={{ fontWeight: 600, fontSize: 16, ml: 2 }}>Editar Perfil</Typography>
            </CardContent>
          </Card>
          <Divider />
          <Card
            sx={{
              width: "100%",
              height: "80px",
              boxShadow: "none",
              p: 0,
            }}
            onClick={() => {
              navigate("/registroVehiculo");
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                boxShadow: "none",
                width: "100%",
                height: "80px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              <CarIcon />
              <Typography sx={{ fontWeight: 600, fontSize: 16, ml: 2 }}>
                Agregar Vehículo{" "}
              </Typography>
            </CardContent>
          </Card>
          <Divider />
          <Card
            sx={{
              width: "100%",
              height: "80px",
              boxShadow: "none",
              p: 0,
            }}
            onClick={() => {
              navigate("/registroVehiculo");
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                boxShadow: "none",
                width: "100%",
                height: "80px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              <RutaIcon />
              <Typography sx={{ fontWeight: 600, fontSize: 16, ml: 2 }}>Agregar Ruta </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default PerfilUsuario;
