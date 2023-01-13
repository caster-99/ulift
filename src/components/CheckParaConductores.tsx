import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import { User } from "../types";
import { grey } from "@mui/material/colors";
import RatingDialogo from "./RatingDialogo";

const CheckParaConductores = (): JSX.Element => {
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
    id: "11121",
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
    id: "4567",
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
    id: "8910",
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

  const [open, setOpen] = React.useState(false);

  const abrirDialogo = () => {
    setOpen(true);
  };
  const cerrarDialogo = () => {
    setOpen(false);
  };

  const finViaje = () => {
    console.log("Viaje finalizado");
    abrirDialogo();
  };

  const fetchUser = async () => {
    // var requestsString = JSON.parse(localStorage.getItem("requests")!);
    // requests = requestsString;
    // console.log("arreglo de requests" + requests);
    console.log("elegidos: " + localStorage.getItem("elegidos")!);
  };

  fetchUser();
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
              key={user.id}
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
      <Button variant="contained" sx={{ width: "100%", marginTop: "10px" }} onClick={finViaje}>
        Finalizar viaje (debe aparecer cuando todos sean dejados)
      </Button>
      {open && (
        <RatingDialogo
          isOpen={open}
          closeDialog={cerrarDialogo}
          pasajeros={pasajeros}
          tipo="conductor"
        />
      )}
    </Box>
  );
};

export default CheckParaConductores;

export const UserListItem = (user: User): JSX.Element => {
  const foto = "https://ulift-backend.up.railway.app/" + user.photo;
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(parseInt(value));
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(parseInt(value));
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    const d = new Date();
    let hour = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log("Viaje de " + value + " finalizado a las: " + hour);
    //Aquí se debe mandar a la bd o agregar a un arreglo la info de cuando se dejó
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={handleToggle(user.id)}
          checked={checked.indexOf(parseInt(user.id)) !== -1}
          disabled={checked.indexOf(parseInt(user.id)) !== -1}
        />
      }
      sx={{
        width: "100%",
        height: "60px",
        mt: 1.5,
        backgroundColor: grey[100],
        borderRadius: 2,
      }}
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar sx={{ width: 50, height: 50 }} src={foto} />
        </ListItemAvatar>
        <Typography sx={{ fontWeight: 600, marginLeft: 1 }}>{user.name}</Typography>
      </ListItemButton>
    </ListItem>
  );
};
