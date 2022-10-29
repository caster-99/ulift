import { Box, Container, Fab, Fade, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import { NavBar } from "../components/NavBar";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  ArrowCircleUpRounded as OfrecerColaIcon,
  ArrowCircleDownRounded as PedirColaIcon,
} from "@mui/icons-material";

import { useState } from "react";
import BuscarColaDialogo from "../components/BuscarColaDialogo";
import OfrecerColaDialogo from "../components/OfrecerColaDialogo";

const Inicio = (): JSX.Element => {
  const [isDialogOfrecerOpen, setDialogOfrecerOpen] = useState(false);
  const [isDialogPedirOpen, setDialogPedirOpen] = useState(false);
  const openOfrecerDialog = () => {
    setDialogOfrecerOpen(true);
  };

  const closeOfrecerDialog = () => {
    setDialogOfrecerOpen(false);
  };

  const openPedirDialog = () => {
    setDialogPedirOpen(true);
  };

  const closePedirDialog = () => {
    setDialogPedirOpen(false);
  };

  return (
    <Box>
      <NavBar />
      <Fade in timeout={800}>
        <Box>
          <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Typography
              color="primary"
              textAlign="center"
              fontSize={{ xs: 27, md: 30 }}
              fontWeight={600}
              mb={{ xs: 2, sm: 3 }}
            >
              Inicio
            </Typography>

            <Typography sx={{ fontSize: 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ab alias labore
              delectus et accusantium unde, eaque ipsum quidem sunt commodi doloribus possimus
              maxime fugit sint tenetur aliquam nam nulla. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus excepturi pariatur amet placeat reprehenderit quod
              adipisci, est unde repudiandae quis laborum aliquam ut? Veritatis natus minus,
              pariatur alias vel asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Provident sapiente dolorem eos accusantium recusandae, voluptate vitae explicabo
              dolore cumque consequuntur laboriosam. Cumque excepturi earum, id non facere
              reiciendis vel perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis tempora sunt natus nam non mollitia odit aliquid quis. Voluptates amet
              orem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ab alias labore
              delectus et accusantium unde, eaque ipsum quidem sunt commodi doloribus possimus
              maxime fugit sint tenetur aliquam nam nulla. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus excepturi pariatur amet placeat reprehenderit quod
              adipisci, est unde repudiandae quis laborum aliquam ut? Veritatis natus minus,
              pariatur alias vel asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Provident sapiente dolorem eos accusantium recusandae, voluptate vitae explicabo
              dolore cumque consequuntur laboriosam. Cumque excepturi earum, id non facere
              reiciendis vel perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis tempora sunt natus nam non mollitia odit aliquid quis. Voluptates amet
              orem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ab alias labore
              delectus et accusantium unde, eaque ipsum quidem sunt commodi doloribus possimus
              maxime fugit sint tenetur aliquam nam nulla. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus excepturi pariatur amet placeat reprehenderit quod
              adipisci, est unde repudiandae quis laborum aliquam ut? Veritatis natus minus,
              pariatur alias vel asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Provident sapiente dolorem eos accusantium recusandae, voluptate vitae explicabo
              dolore cumque consequuntur laboriosam. Cumque excepturi earum, id non facere
              reiciendis vel perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis tempora sunt natus nam non mollitia odit aliquid quis. Voluptates amet
              ipsum vitae perspiciatis porro molestias iste maiores quos soluta eum?
            </Typography>
            <SpeedDial
              ariaLabel="acciones"
              sx={{ position: "fixed", bottom: "8%", right: "5%" }}
              icon={<SpeedDialIcon />}
              FabProps={{
                color: "secondary",
                size: "large",
              }}
            >
              <SpeedDialAction icon={<PedirColaIcon />} onClick={openPedirDialog} />

              <BuscarColaDialogo isOpen={isDialogPedirOpen} closeDialog={closePedirDialog} />
              <SpeedDialAction icon={<OfrecerColaIcon />} onClick={openOfrecerDialog} />
              <OfrecerColaDialogo isOpen={isDialogOfrecerOpen} closeDialog={closeOfrecerDialog} />
            </SpeedDial>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};
export default Inicio;
