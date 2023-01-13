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

interface Props {
  usuario: User;
  pasajeros: User[];
}

var elegidos: User[] = [];

const ListaEsperaParaConductores = ({ pasajeros }: Props): JSX.Element => {
  const navigate = useNavigate();
  console.log("Lista de solicitudes de cola");
  console.log(pasajeros);

  return (
    <Box display={"flex"} flexDirection="column" alignItems="center" justifyContent="center">
      <List dense sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {pasajeros.map((user) => (
          <PasajeroListaEspera usuario={user} pasajeros={pasajeros} key={user.id} />
        ))}
      </List>

      {/* Cuando haya seleccionado al menos uno o el límite indicado y si es conductor , debe habilitarse esta opción */}
      {pasajeros.length > 0 && (
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

export const PasajeroListaEspera = ({ usuario, pasajeros }: Props): JSX.Element => {
  const foto = "https://ulift-backend.up.railway.app/" + usuario.photo;
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = (id: string) => () => {
    if (isActive === false) {
      setIsActive((current) => !current);
      elegidos.push(pasajeros.find((usuario) => usuario.id === id) as User);
      console.log(elegidos.flatMap((usuario) => usuario.name + " " + usuario.id));
    } else {
      if (pasajeros.find((usuario) => usuario.id === id)) {
        setIsActive((current) => !current);
        elegidos.splice(
          elegidos.indexOf(pasajeros.find((usuario) => usuario.id === id) as User),
          1
        );
        console.log(elegidos.flatMap((usuario) => usuario.name + " " + usuario.id));
      }
    }

    // setIsActive(true);
  };
  const goChat = (id: string) => () => {
    navigate("/chat/" + id);
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
            {usuario.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <IconButton sx={{ marginRight: 1 }} onClick={goChat(usuario.id)}>
            <ChatRounded color="primary" />
          </IconButton>
          <IconButton sx={{ marginRight: 1 }} onClick={handleClick(usuario.id)}>
            <LocIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
