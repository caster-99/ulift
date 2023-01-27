import { useState } from "react";
import { Avatar, Box, Typography, Card, Divider, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import InfoUserDialogo from "./InfoUserDialogo";

interface UserProps {
  color: string;
  date: Date;
  distanceLastNode: number;
  driverID: number;
  email: string;
  gender: string;
  lastname: string;
  liftID: number;
  model: string;
  name: string;
  path: string;
  photo: string;
  plate: string;
  rName: string;
  rate: number;
  role: string;
  seats: number;
  time: Date;
  waitingTime: number;
}

const ConductorDisponible = (props: UserProps): JSX.Element => {
  const [isInfoUserOpen, setDialogInfoUser] = useState(false);

  const openInfoUserDialog = () => {
    setDialogInfoUser(true);
  };

  const closeInfoUserDialog = () => {
    setDialogInfoUser(false);
  };

  const foto = "https://ulift-backend.up.railway.app/" + props.photo;

  return (
    <Grid item xs={12} sm={6} md={5}>
      <Card
        sx={{
          width: "100%",
          height: "90px",
          boxShadow: "none",
          p: 0,
          mb: 0.5,
        }}
        onClick={openInfoUserDialog}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxShadow: "none",
            width: "100%",
            height: "80px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            p: 0,
          }}
        >
          <Box alignItems="center" mr={2}>
            {/* Aquí se tiene que cambiar para colocar la imagen */}
            <Avatar sx={{ width: 50, height: 50, marginBottom: 1 }} src={foto} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", width: "360px" }}>
            <Box
              sx={{
                width: "250px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                {props.name + " " + props.lastname}
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                height: "20px",
                width: "250px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontSize: "0.875rem",
                fontWeight: "700",
              }}
            >
              <Typography
                sx={{
                  color: grey,
                }}
              >
                Tiempo de espera: {props.waitingTime} minutos
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                height: "20px",
                width: "250px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontSize: "0.875rem",
                fontWeight: "700",
              }}
            >
              <Typography
                sx={{
                  color: grey,
                }}
              >
                Puestos disponibles: {props.seats} puestos
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider />
      </Card>
      <InfoUserDialogo
        isOpen={isInfoUserOpen}
        closeDialog={closeInfoUserDialog}
        name={props.name + " " + props.lastname}
        seats={props.seats}
        location={props.rName}
        time={props.waitingTime.toString()}
        role={props.role}
        photo={props.photo}
      />
    </Grid>
  );
};

export default ConductorDisponible;
