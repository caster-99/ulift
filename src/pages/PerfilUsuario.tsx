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
  Grid,
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
  LocationOnRounded as LocationOnIcon,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import Profile from "../components/Profile";
import logo from "../assets/logo512.png";
import { useNavigate } from "react-router-dom";
import api_instance from "../api/api_instance";
import { User } from "../types/index";
import InfoCard from "../components/InfoCard";
import { useSnackbar } from "notistack";

const usuario: User = {
  name: "",
  lastname: "",
  id: "",
  email: "",
  role: "",
  gender: "",
  photo: "",
  trips: 0,
  rating: 0,
  emergencyContact: "",
  emergencyName: "",
  vehicles: [],
  destinations: [],
  routes: [],
};

const PerfilUsuario = (): JSX.Element => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const url = "https://ulift-backend.up.railway.app/api/user/profile";
  //const url = "http://localhost:3000/api/user/profile";
  const fetchUser = async () => {
    const token = localStorage.getItem("token");

    const response = await api_instance.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    usuario.name = response.data.user.nameU;
    usuario.lastname = response.data.user.lastname;
    usuario.id = response.data.user.id;
    usuario.email = response.data.user.email;
    usuario.emergencyContact = response.data.user.emergencyContact;
    usuario.emergencyName = response.data.user.emergencyName;
    usuario.trips = response.data.user.trips;
    usuario.rating = response.data.user.rate;
    usuario.gender = response.data.user.gender;
    usuario.photo = response.data.user.photo;
    usuario.vehicles = response.data.user.vehicles;
    usuario.destinations = response.data.user.destination;
    usuario.routes = response.data.user.routes;

    if (response.data.user.role === "E") {
      usuario.role = "Estudiante";
    } else if (response.data.user.role === "D") {
      usuario.role = "Docente";
    } else {
      usuario.role = "Trabajador";
    }
  };

  fetchUser();

  return (
    <Box>
      <NavBar />
      <Box justifyContent="space-between" flexDirection="column" flexGrow={1}>
        <Container maxWidth="md" sx={{ p: 2 }}>
          <Profile
            id={usuario.id}
            name={usuario.name}
            lastname={usuario.lastname}
            email={usuario.email}
            role={usuario.role}
            gender={usuario.gender}
            photo={usuario.photo}
            trips={usuario.trips}
            rating={usuario.rating}
            emergencyContact={usuario.emergencyContact}
            emergencyName={usuario.emergencyName}
            vehicles={usuario.vehicles}
            destinations={usuario.destinations}
            routes={usuario.routes}
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
              {usuario.vehicles.length === 0 && (
                <Typography fontSize={{ xs: 14, md: 17 }} m={2}>
                  No hay vehículos registrados
                </Typography>
              )}
              <Grid container spacing={{ xs: 2, md: 3 }}>
                {usuario.vehicles?.map((v) => (
                  <InfoCard
                    key={v.plate}
                    title={"Placa: " + v.plate}
                    subtitile={"Modelo: " + v.model}
                  />
                ))}
              </Grid>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Rutas registradas
              </Typography>
              {/* Mapear los nombres de las rutas registradas */}
              {usuario.routes.length === 0 && (
                <Typography fontSize={{ xs: 14, md: 17 }} m={2}>
                  No hay rutas registradas
                </Typography>
              )}

              <Grid container spacing={{ xs: 2, md: 3 }}>
                {usuario.routes?.map((v) => (
                  <InfoCard
                    key={v.rNumber}
                    title={"Nombre de la ruta: " + v.name}
                    subtitile={"Activa: " + v.active}
                  />
                ))}
              </Grid>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Destinos registrados
              </Typography>
              {/* Mapear los nombres de las rutas registradas */}
              {usuario.destinations.length === 0 && (
                <Typography fontSize={{ xs: 14, md: 17 }} m={2}>
                  Error al cargar destinos
                </Typography>
              )}

              <Grid container spacing={{ xs: 2, md: 3 }}>
                {usuario.destinations?.map((v, index) => (
                  <InfoCard
                    key={index}
                    title={"Nombre del destino: " + v.name}
                    subtitile={"Latitud y Longitud: " + v.lat + " " + v.lng}
                  />
                ))}
              </Grid>
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
          <Divider />
          <Card
            sx={{
              display: "flex",
              width: "100%",
              height: "80px",
              boxShadow: "none",
              p: 0,
            }}
            onClick={() => {
              navigate("/registroDestino");
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
              <LocationIcon />
              <Typography sx={{ fontWeight: 600, fontSize: 16, ml: 2 }}>Agregar Destino</Typography>
            </CardContent>
          </Card>
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
              if (usuario.vehicles.length === 0) {
                enqueueSnackbar("Debe registrar un vehículo antes de registrar una ruta", {
                  variant: "warning",
                });
              }
              if (usuario.vehicles.length >= 1) {
                navigate("/registroRuta");
              }
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
