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
import RatingPasajeros from "./RatingPasajeros";
import axios from "axios";
import { useSnackbar } from "notistack";

const CheckParaConductores = (): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();

  var pasajeros: User[] = [];

  const [open, setOpen] = React.useState(false);

  const abrirDialogo = () => {
    setOpen(true);
  };
  const cerrarDialogo = () => {
    setOpen(false);
  };

  const finViaje = () => {
var config = {
      method: "post",
      url: "https://ulift-backend.up.railway.app/api/lift/complete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        enqueueSnackbar("Cola finalizada recuerda calificar a tus pasajeros.", {
          variant: "success",
        });
        setTimeout(() => {
          abrirDialogo();
        }, 5000);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const fetchUser = async () => {
    // var requestsString = JSON.parse(localStorage.getItem("requests")!);
    // requests = requestsString;
    // console.log("arreglo de requests" + requests);
    console.log("elegidos: " + localStorage.getItem("elegidos")!);
    var elegidosString = JSON.parse(localStorage.getItem("elegidos")!);
    pasajeros = elegidosString;
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
        Finalizar viaje
      </Button>
      {open && <RatingPasajeros isOpen={open} closeDialog={cerrarDialogo} p={pasajeros} />}
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


    const d = new Date();
    let hour = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    //Aquí se debe mandar a la bd o agregar a un arreglo la info de cuando se dejó

    var config = {
      method: 'post',
      url: 'https://ulift-backend.up.railway.app/api/lift/driverCheck/' + value,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log("Viaje de " + value + " finalizado a las: " + hour);
        setChecked(newChecked);
      })
      .catch(function (error) {
        console.log(error);
      });
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
