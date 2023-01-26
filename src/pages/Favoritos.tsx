import { Box, Container, Typography, Fab, Button } from "@mui/material";
import Fade from "@mui/material/Fade";
import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import PasajeroFavoritoDialogo from "../components/PasajeroFavoritoDialogo";
import { Add as AgregarUsuarioIcon } from "@mui/icons-material";
import ListaPasajeros from "../components/ListaPasajeros";
import axios from "axios";
import { User } from "../types";

var favoritos: User[] = [];

const Favoritos = (): JSX.Element => {
  const fetchFav = () => {
    const token = localStorage.getItem("token");

    var config = {
      method: "get",
      url: "https://ulift-backend.up.railway.app/api/favorites",
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.favorites));
        favoritos = response.data.favorites.map((fav: any) => {
          var usuarios = {} as User; //arreglo auxiliar

          usuarios.name = fav.nameU;
          usuarios.trips = fav.n_trips;
          usuarios.rating = fav.rate;
          usuarios.photo = fav.photo;

          return usuarios;
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [isDialogPasajeroFavoritoOpen, setDialogPasajeroFavoritoOpen] = useState(false);
  const [value, setValue] = React.useState("1");
  const openPasajeroFavoritoDialog = () => {
    setDialogPasajeroFavoritoOpen(true);
  };

  const closePasajeroFavoritoDialog = () => {
    setDialogPasajeroFavoritoOpen(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchFav();
  });

  return (
    <Box>
      <NavBar />
      <Fade in timeout={800}>
        <Box>
          <Container maxWidth="md">
            <Typography
              color="primary"
              textAlign="left"
              fontSize={{ xs: 24 }}
              fontWeight={600}
              mb={{ xs: 2, sm: 3 }}
              mt={-2}
            >
              Favoritos
            </Typography>

            {favoritos.length === 0 && (
              <Typography fontSize={{ xs: 14, md: 17 }}>
                Aun no tienes usuarios favoritos
              </Typography>
            )}
            {favoritos.length! > 0 && <ListaPasajeros pasajeros={favoritos} />}

            <Fab
              aria-label="agregar"
              color="secondary"
              size="large"
              sx={{
                position: "fixed",
                bottom: "8%",
                right: "5%",
              }}
              onClick={openPasajeroFavoritoDialog}
            >
              <AgregarUsuarioIcon />
            </Fab>
            <PasajeroFavoritoDialogo
              isOpen={isDialogPasajeroFavoritoOpen}
              closeDialog={closePasajeroFavoritoDialog}
            />
          </Container>
        </Box>
      </Fade>{" "}
    </Box>
  );
};

export default Favoritos;
