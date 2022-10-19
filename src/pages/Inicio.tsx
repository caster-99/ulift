import { Box, Container, Fab, Fade, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import { NavBar } from "../components/NavBar";

const Inicio = (): JSX.Element => {
  return (
    <Box>
      <NavBar />
      <Fade in timeout={800}>
        <Box>
          <Container maxWidth="md" sx={{ p: 3 }}>
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
              ipsum vitae perspiciatis porro molestias iste maiores quos soluta eum?
            </Typography>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};
export default Inicio;
