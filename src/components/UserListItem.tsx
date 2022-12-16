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
  // photo: object;
  time: string;
  date: string;
  userId: string;
  location: string;
  role: string;
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
              <Avatar>{props.userId}</Avatar>
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
        role={props.role}
      />
    </Grid>
  );
};

export default UserListItem;
