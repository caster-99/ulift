//Para usar en el historial de colas
import React, { useState } from "react";
import {
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import InfoHistorialDialogo from "./InfoHistorialDialogo";
interface UserProps {
  name: string;
  date: string;
  time: string;
  car: string;
  photo: string;
  plate: string;
  rate: number;
  location: string;
}

const UserListItem = (props: UserProps): JSX.Element => {
  const [isInfoUserOpen, setDialogInfoUser] = useState(false);

  const openInfoUserDialog = () => {
    setDialogInfoUser(true);
  };

  const closeInfoUserDialog = () => {
    setDialogInfoUser(false);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          width: "100%",
          height: "75px",
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
          <ListItem>
            <ListItemAvatar>
              <Avatar>A</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={props.name}
              primaryTypographyProps={{
                fontWeight: 600,
              }}
            />
          </ListItem>
        </CardContent>{" "}
      </Card>{" "}
      <Divider />
      <InfoHistorialDialogo
        isOpen={isInfoUserOpen}
        closeDialog={closeInfoUserDialog}
        name={props.name}
        location={props.location}
        date={props.date}
        time={props.time}
        car={props.car}
        photo={props.photo}
        plate={props.plate}
        rate={props.rate}
        //role={props.role}
      />
    </Grid>
  );
};

export default UserListItem;
