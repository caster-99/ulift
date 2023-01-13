import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import { ChatRounded, DriveEtaRounded as LocIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { User } from "../types";
import axios from "axios";

interface Props {
  usuario: User;
  pasajeros: User[];
}
interface ColasDisponibles {
  driverID: string;
  email: string;
  name: string;
  lastname: string;
  liftID: string;
  photo: string;
  role: string;
}

interface SolicitudUsuarios {
  usuario: ColasDisponibles;
  solicitudes: ColasDisponibles[];
}

var elegidos: ColasDisponibles[] = [];

const ListaEsperaParaConductores = (): JSX.Element => {
  var requests: ColasDisponibles[] = [];
  const token = localStorage.getItem("token");
  var requestAConductores = {
    method: "get",
    url: "https://ulift-backend.up.railway.app/api/lift/requests",
    headers: { Authorization: `Bearer ${token}` },
  };

  axios(requestAConductores)
    .then(function (response) {
      requests = response.data.requests;
      console.log("requests");
      console.log(requests);
    })
    .catch(function (error) {
      console.log(error);
    });

  const navigate = useNavigate();
  // console.log("Lista de solicitudes de cola");
  // console.log(pasajeros);

  return (
    <Box display={"flex"} flexDirection="column" alignItems="center" justifyContent="center">
      <List dense sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {requests.map((user, index) => (
          <PasajeroListaEspera usuario={user} solicitudes={requests} key={index} />
        ))}
      </List>

      {/* Cuando haya seleccionado al menos uno o el límite indicado y si es conductor , debe habilitarse esta opción */}
      {requests.length > 0 && (
        <Button
          variant="contained"
          onClick={() => {
            navigate("/colaEnProceso");
          }}
        >
          Empezar viaje
        </Button>
      )}
    </Box>
  );
};

export default ListaEsperaParaConductores;

export const PasajeroListaEspera = ({ usuario, solicitudes }: SolicitudUsuarios): JSX.Element => {
  const foto = "https://ulift-backend.up.railway.app/" + usuario.photo;
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = (id: string) => () => {
    if (isActive === false) {
      setIsActive((current) => !current);
      elegidos.push(solicitudes.find((usuario) => usuario.driverID === id) as ColasDisponibles);
      console.log(elegidos.flatMap((usuario) => usuario.name + " " + usuario.driverID));
    } else {
      if (solicitudes.find((usuario) => usuario.driverID === id)) {
        setIsActive((current) => !current);
        elegidos.splice(
          elegidos.indexOf(
            solicitudes.find((usuario) => usuario.driverID === id) as ColasDisponibles
          ),
          1
        );
        console.log(elegidos.flatMap((usuario) => usuario.name + " " + usuario.driverID));
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
        backgroundColor: isActive ? "#40B4E5" : grey[100],
        color: isActive ? "white" : "",
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
          <Avatar sx={{ width: 50, height: 50 }} src={foto} />
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
            {usuario.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <IconButton sx={{ marginRight: 1 }} onClick={goChat(usuario.driverID)}>
            <ChatRounded color="primary" />
          </IconButton>
          <IconButton sx={{ marginRight: 1 }} onClick={handleClick(usuario.driverID)}>
            <LocIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
