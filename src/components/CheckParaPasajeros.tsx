import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const CheckParaPasajeros = (): JSX.Element => {
  const handleClick = () => {
    const d = new Date();
    let hour = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log("Viaje finalizado a las: " + hour);
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
        </Button>
      </Container>
    </Box>
  );
};

export default CheckParaPasajeros;
