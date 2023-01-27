import { useState } from "react";
import {
  ListItem,
  Avatar,
  ListItemAvatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { User } from "../types";
import { grey } from "@mui/material/colors";
import InfoFavoritoDialogo from "./InfoFavoritoDialogo";

const UsuarioTarjeta = (user: User): JSX.Element => {
  const [isInfoUserOpen, setDialogInfoUser] = useState(false);
  const openInfoUserDialog = () => {
    setDialogInfoUser(true);
  };

  const closeInfoUserDialog = () => {
    setDialogInfoUser(false);
  };

  const foto = "https://ulift-backend.up.railway.app/" + user.photo;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "70px",
          boxShadow: "none",
          p: 0,
          mb: 0.5,
          borderRadius: 2,
          backgroundColor: grey[100],
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
            height: "60px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            p: 0,
            m: 0,
          }}
        >
          <ListItem sx={{ mt: 2, height: 60 }}>
            <ListItemAvatar>
              <Avatar sx={{ width: 50, height: 50 }} src={foto} />
            </ListItemAvatar>
            <Typography>
              {user.name} {user.lastname}
            </Typography>
          </ListItem>
        </CardContent>
      </Card>
      <InfoFavoritoDialogo
        isOpen={isInfoUserOpen}
        closeDialog={closeInfoUserDialog}
        name={user.name}
        lastname={user.lastname}
        trips={user.trips}
        role={user.role}
        photo={user.photo}
        rating={user.rating}
      />
    </Grid>
  );
};

export default UsuarioTarjeta;
