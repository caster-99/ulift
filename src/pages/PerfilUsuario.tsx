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

const PerfilUsuario = (): JSX.Element => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = () => {
      api_instance
        .get("api/user/profile", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(function (response) {
          if (response.status === 200) {
            // const data = response.json();
            // setUser(data);
            console.log(response);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getUser();
  }, []);

  return (
    <Box>
      <NavBar />
      <Box justifyContent="space-between" flexDirection="column" flexGrow={1}>
        <Container maxWidth="md" sx={{ p: 2 }}>
          <Profile name="Usuario" id="user@ucab.edu.ve" photo={{ logo }} rides={2} rating={3} />
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
