import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from "@mui/material";
import {
  CheckCircleOutlineRounded as AcceptIcon,
  ChatRounded,
  DriveEtaRounded as LocIcon,
} from "@mui/icons-material";
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
  const navigate = useNavigate();

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
  const goChat = (id: string) => () => {
    navigate("/chatPrivado/" + id);
  };

  return (
    <Card
      sx={{
        width: "95%",
        height: "60px",
        backgroundColor: grey[100],
        boxShadow: "none",
        p: 0,
        m: 0,
        mt: 1.5,
        borderRadius: 2,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          boxShadow: "none",
          width: "100%",
          height: "60px",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        <Box alignItems="center" mr={2} mt={1}>
          {/* Aquí se tiene que cambiar para colocar la imagen */}
          <Avatar sx={{ width: "50px", height: "50px" }}>N</Avatar>
        </Box>

        <Box
          sx={{
            width: "100%",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
            }}
          >
            {user.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <IconButton sx={{ marginRight: 1 }} onClick={goChat(user.id)}>
            <ChatRounded color="primary" />
          </IconButton>
          <IconButton sx={{ marginRight: 1 }} onClick={handleClick(user.id)}>
            <LocIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
