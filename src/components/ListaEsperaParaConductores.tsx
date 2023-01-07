import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from "@mui/material";
import { CheckCircleOutlineRounded as AcceptIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { User } from "../types";

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

var elegidos: User[] = [];

const ListaEsperaParaConductores = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Box display={"flex"} flexDirection="column" alignItems="center" justifyContent="center">
      <List dense sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {pasajeros.map((user) => (
          <PasajeroListaEspera
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

export const PasajeroListaEspera = (user: User): JSX.Element => {
  const foto = "https://ulift-backend.up.railway.app/" + user.photo;
  const [isActive, setIsActive] = useState(false);

  const handleClick = (id: string) => () => {
    if (isActive === false) {
      setIsActive((current) => !current);
      elegidos.push(pasajeros.find((user) => user.id === id) as User);
      console.log(elegidos.flatMap((user) => user.name + " " + user.id));
    } else {
      if (pasajeros.find((user) => user.id === id)) {
        setIsActive((current) => !current);
        elegidos.splice(elegidos.indexOf(pasajeros.find((user) => user.id === id) as User), 1);
        console.log(elegidos.flatMap((user) => user.name + " " + user.id));
      }
    }

    // setIsActive(true);
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton sx={{ marginRight: 1 }} onClick={handleClick(user.id)}>
          <AcceptIcon color="primary" />
        </IconButton>
      }
      sx={{
        width: "100%",
        height: "60px",
        mt: 1.5,
        backgroundColor: isActive ? "#40B4E5" : grey[100],
        color: isActive ? "white" : "",
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
