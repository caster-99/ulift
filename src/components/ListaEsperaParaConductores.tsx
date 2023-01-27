import { useEffect, useState } from "react";
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
import { useSnackbar } from "notistack";

interface ColasDisponibles {
  color: string;
  date: Date;
  distanceLastNode: number;
  id: number;
  email: string;
  gender: string;
  lastname: string;
  liftID: number;
  model: string;
  nameU: string;
  path: string;
  photo: string;
  plate: string;
  rName: string;
  rate: number;
  role: string;
  seats: number;
  time: Date;
  waitingTime: number;
  newRate: number | null;
}

interface SolicitudUsuarios {
  usuario: ColasDisponibles;
  solicitudes: ColasDisponibles[];
}

var elegidos: ColasDisponibles[] = [];
var flag: boolean = false;
var requests: ColasDisponibles[] = [];

const ListaEsperaParaConductores = (): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();
  const fetchUser = async () => {
    var requestsString = JSON.parse(localStorage.getItem("requests")!);
    requests = requestsString;
  };
  fetchUser();
  const navigate = useNavigate();

  function empezarViaje() {
    //aqui se debe pasar la lista de elegidos a la cola en proceso
    let j = 0;
    for (let i = 0; i < elegidos.length; i++) {
      var data = JSON.stringify({
        id: elegidos[i].id,
        dNumber: 1,
      });
      console.log(data);
      var config = {
        method: "post",
        url: "https://ulift-backend.up.railway.app/api/lift/accept",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      var startLift = {
        method: "post",
        url: "https://ulift-backend.up.railway.app/api/lift/start",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      axios(config).then(function (response) {
        console.log("Ejecutando accept");
        console.log(JSON.stringify(response.data.message));
      });

      axios(startLift).then(function (response) {
        console.log("Ejecutando start");
        console.log(JSON.stringify(response.data));
      });
    }

    var dataLift = JSON.stringify({
      liftID: localStorage.getItem("liftID"),
    });

    var createRatings = {
      method: "post",
      url: "https://ulift-backend.up.railway.app/api/lift/createR",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: dataLift,
    };

    axios(createRatings).then(function (response) {
      console.log("Ejecutando create ratings");
      console.log(JSON.stringify(response.data));
      enqueueSnackbar("El viaje ya va a comenzar ", { variant: "info" });
      setTimeout(() => {
        localStorage.setItem("elegidos", JSON.stringify(elegidos));
        flag = true;
        navigate("/colaEnProceso/conductor");
      }, 8000);
    });
  }

  return (
    <Box display={"flex"} flexDirection="column" alignItems="center" justifyContent="center">
      {/* Cuando haya seleccionado al menos uno o el límite indicado y si es conductor , debe habilitarse esta opción */}
      {flag && (
        <Typography fontSize={{ xs: 14, md: 17 }} mb={{ xs: 2, sm: 3 }}>
          Proceso terminado
        </Typography>
      )}
      {!flag && (
        <List dense sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {requests.map((user, index) => (
            <PasajeroListaEspera usuario={user} solicitudes={requests} key={index} />
          ))}
        </List>
      )}

      {!flag && requests.length > 0 && (
        <Button variant="contained" onClick={empezarViaje}>
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
  solicitudes = requests;
  console.log(
    "arreglo de requests " + requests.flatMap((usuario) => usuario.nameU + " " + usuario.id)
  );
  const handleClick = (id: number) => () => {
    if (isActive === false) {
      setIsActive((current) => !current);
      elegidos.push(solicitudes.find((usuario) => usuario.id === id) as ColasDisponibles);
      console.log(elegidos.flatMap((usuario) => usuario.nameU + " " + usuario.id));
    } else {
      if (solicitudes.find((usuario) => usuario.id === id)) {
        setIsActive((current) => !current);
        elegidos.splice(
          elegidos.indexOf(solicitudes.find((usuario) => usuario.id === id) as ColasDisponibles),
          1
        );
      }
    }

    // setIsActive(true);
  };
  const goChat = (id: number) => () => {
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
              fontStyle: "bold",
            }}
          >
            {usuario.nameU} {usuario.lastname}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* <IconButton sx={{ marginRight: 1 }} onClick={goChat(usuario.id)}>
            <ChatRounded color="primary" />
          </IconButton> */}
          <IconButton sx={{ marginRight: 1 }} onClick={handleClick(usuario.id)}>
            <LocIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
