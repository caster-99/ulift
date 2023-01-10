import React, { useState } from "react";
import {
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Stack,
  Box,
  Typography,
  Card,
  CardActionArea,
  Divider,
  Grid,
} from "@mui/material";
import {
  ChatRounded as ChatIcon,
  CheckCircleOutlineRounded as AcceptIcon,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import InfoUserDialogo from "./InfoUserDialogo";
import { Lift, User } from "../types";


interface UserProps {
  driver:User,
  lift:Lift
}

const ConductorDisponible = (props: UserProps): JSX.Element => {
  const [isInfoUserOpen, setDialogInfoUser] = useState(false);

  const openInfoUserDialog = () => {
    setDialogInfoUser(true);
  };

  const closeInfoUserDialog = () => {
    setDialogInfoUser(false);
  };

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
            <Avatar sx={{ width: "50px", height: "50px" }}>N</Avatar>
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
                {props.driver.name}
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
                Tiempo de espera: {props.lift.waitTime} minutos
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
                Puestos disponibles: {props.lift.seats} puestos
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider />
      </Card>
      <InfoUserDialogo
        isOpen={isInfoUserOpen}
        closeDialog={closeInfoUserDialog}
        name={props.driver.name}
        seats={props.lift.seats}
        location={props.lift.rdName}
        time={props.lift.waitTime.toString()}
        role={props.driver.role}
      />
    </Grid>
  );
};

export default ConductorDisponible;
