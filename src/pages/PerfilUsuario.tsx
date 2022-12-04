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
  EmailRounded as EmailIcon,
  PhoneRounded as PhoneIcon,
  PersonRounded as PersonIcon,
  BadgeRounded as BadgeIcon,
  Email,
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
  gender: "",
  photo: "",
  trips: 0,
  rating: 0,
  emergencyContact: "",
  emergencyName: "",
};

const PerfilUsuario = (): JSX.Element => {
  const navigate = useNavigate();
  const [userInfo, setUser] = useState({});
  const url = "https://ulift-backend.up.railway.app/api/user/profile";

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    const response = await api_instance.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(response.data.user);
    usuario.name = response.data.user.nameU + " " + response.data.user.lastname;
    usuario.id = response.data.user.id;
    usuario.email = response.data.user.email;
    usuario.emergencyContact = response.data.user.emergencyContact;
    usuario.emergencyName = response.data.user.emergencyName;
    usuario.trips = response.data.user.trips;
    usuario.rating = response.data.user.rate;
    usuario.gender = response.data.user.gender;
    usuario.photo = response.data.user.photo;
    if (response.data.user.role === "E") {
      usuario.role = "Estudiante";
    } else if (response.data.user.role === "D") {
      usuario.role = "Docente";
    } else {
      usuario.role = "Trabajador";
    }

    console.log(usuario);
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
            id={usuario.email}
            photo={usuario.photo}
            rides={usuario.trips}
            rating={usuario.rating}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              m: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mb: 2,
              }}
            >
              <EmailIcon color="primary" />
              <Typography ml={2}>
                <b>Correo electrónico:</b> {usuario.email}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mb: 2,
              }}
            >
              <BadgeIcon color="primary" />
              <Typography ml={2}>
                <b>Rol:</b> {usuario.role}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mb: 2,
              }}
            >
              <PersonIcon color="primary" />
              <Typography ml={2}>
                <b>Contacto de emergencia:</b> {usuario.emergencyName}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mb: 2,
              }}
            >
              <PhoneIcon color="primary" />
              <Typography ml={2}>
                <b>Teléfono de emergencia:</b> {usuario.emergencyContact}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Vehículos registrados
              </Typography>

              {/* Mapear los nombres de los vehículos registrados */}
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Rutas registradas
              </Typography>

              {/* Mapear los nombres de las rutas registradas */}
            </Box>
          </Box>
        </Container>

        <Box
          sx={{
            mt: 5,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          {/* <Divider />
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
          </Card> */}
          <Divider />
          <Card
            sx={{
              width: "100%",
              height: "70px",
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
                height: "70px",
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
              navigate("/registroRuta");
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
