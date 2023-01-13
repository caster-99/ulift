import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { ChatRounded, HailRounded as PedirColaIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { grey } from "@mui/material/colors";
import axios from "axios";

interface ColasDisponibles {
  id: string;
  email: string;
  nameU: string;
  lastname: string;
  liftID: string;
  photo: string;
  role: string;
}

const ListaEsperaParaPasajeros = (): JSX.Element => {
  var pasajeros: ColasDisponibles[] = [];

  const p1: ColasDisponibles = {
    id: "string",
    email: "string",
    nameU: "string",
    lastname: "string",
    liftID: "string",
    photo: "string",
    role: "string",
  };
  pasajeros.push(p1);

  return (
    <Box display={"flex"} flexDirection="column">
      {pasajeros.map((user, index) => (
        <Conductor
          key={index}
          id={user.id}
          email={user.email}
          nameU={user.nameU}
          lastname={user.lastname}
          liftID={user.liftID}
          photo={user.photo}
          role={user.role}
        />
      ))}
    </Box>
  );
};

export default ListaEsperaParaPasajeros;

export const Conductor = (usuario: ColasDisponibles): JSX.Element => {
  const foto = "https://ulift-backend.up.railway.app/" + usuario.photo;

  const navigate = useNavigate();

  const handleClick = (id: string) => () => {
    navigate("/colaEnProceso/pasajero");
    console.log(id);

    const data = JSON.stringify({
      liftID: id,
    });

    const token = localStorage.getItem("token");

    const config = {
      method: "post",
      url: "https://ulift-backend.up.railway.app/api/lift/request",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <Avatar sx={{ width: 50, height: 50, marginBottom: 1 }} src={foto} />
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
            {usuario.nameU}
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
          <IconButton sx={{ marginRight: 1 }} onClick={handleClick(usuario.liftID)}>
            <PedirColaIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
