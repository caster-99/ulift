import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import RatingDialogo from "./RatingDialogo";
import { User } from "../types";

const CheckParaPasajeros = (): JSX.Element => {
  var conductor: User[] = [];

  const user: User = {
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

  conductor.push(user);

  const [open, setOpen] = React.useState(false);

  const abrirDialogo = () => {
    setOpen(true);
  };
  const cerrarDialogo = () => {
    setOpen(false);
  };

  const handleClick = () => {
    const d = new Date();
    let hour = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log("Viaje finalizado a las: " + hour);
    abrirDialogo();
  };
  return (
    <Box display={"flex"} flexDirection="column">
      <Typography fontSize={{ xs: 14, md: 17 }} textAlign="left">
        Indica si fuiste dejado en el lugar correcto:
      </Typography>
      <Typography fontSize={{ xs: 17, md: 20 }} fontWeight="500" textAlign="center" margin={4}>
        Al menos XXX metros de XXXX
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
        <Button variant="contained" sx={{ width: "100%", marginTop: "10px" }} onClick={handleClick}>
          Viaje finalizado
        </Button>{" "}
        {open && (
          <RatingDialogo
            isOpen={open}
            closeDialog={cerrarDialogo}
            pasajeros={conductor}
            tipo="pasajero"
          />
        )}
      </Container>
    </Box>
  );
};

export default CheckParaPasajeros;
