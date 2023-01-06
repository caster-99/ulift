import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import UsuarioTarjeta from "./UsuarioTarjeta";
import UserWaitingListItem from "./UserWaitingListItem";
import { useNavigate } from "react-router-dom";
import { User } from "../types";

const CheckParaConductores = (): JSX.Element => {
  const navigate = useNavigate();
  const p1: User = {
    name: "Luisa",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "1234",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };

  const p2: User = {
    name: "Maria",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "1234",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };

  const p3: User = {
    name: "Ana",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "1234",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };

  const p4: User = {
    name: "Eva",
    email: "luisa",
    gender: "Femenino",
    role: "Estudiante",
    id: "1234",
    photo: "https://i.imgur.com/0cQ3X7A.png",
    trips: 0,
    rating: 0,
    emergencyContact: "123456789",
    emergencyName: "Luisa",
    vehicles: [],
    destinations: [],
    routes: [],
  };
  var pasajeros: User[] = [];

  pasajeros.push(p1);
  pasajeros.push(p2);
  pasajeros.push(p3);
  pasajeros.push(p4);

  return (
    <Box>
      <Typography fontSize={{ xs: 14, md: 17 }} textAlign="left">
        Marca los pasajeros a medida que los vas dejando en sus destinos.
      </Typography>
      <Container
        maxWidth="md"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <List dense sx={{ width: "100%", maxWidth: 360 }}>
          {pasajeros.map((user) => (
            <UserListItem
              id={user.id}
              name={user.name}
              email={user.email}
              role={user.role}
              gender={user.gender}
              photo={user.photo}
              trips={user.trips}
              rating={user.rating}
              emergencyContact={user.emergencyContact}
              emergencyName={user.emergencyName}
              vehicles={user.vehicles}
              destinations={user.destinations}
              routes={user.routes}
            />
          ))}
        </List>
      </Container>
      <Button
        variant="contained"
        sx={{ width: "100%", marginTop: "10px" }}
        //    onClick={() => navigate("/")}
      >
        Finalizar viaje (debe aparecer cuando todos sean dejados)
      </Button>
    </Box>
  );
};

export default CheckParaConductores;

export const UserListItem = (values: User, listId: number): JSX.Element => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={handleToggle(listId)}
          checked={checked.indexOf(listId) !== -1}
          disabled={checked.indexOf(listId) !== -1}
        />
      }
      sx={{ width: "100%", height: "50px" }}
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src={values.photo} />
        </ListItemAvatar>
        <ListItemText primary={values.name} id={values.id} />
      </ListItemButton>
    </ListItem>
  );
};
