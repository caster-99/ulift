import React from "react";
import { ListItem, Avatar, ListItemAvatar, ListItemText, IconButton, Stack } from "@mui/material";
import {
  ChatRounded as ChatIcon,
  CheckCircleOutlineRounded as AcceptIcon,
} from "@mui/icons-material";
interface UserProps {
  name: string;
  // photo: object;
}

const UserWaitingListItem = (props: UserProps): JSX.Element => {
  return (
    <Stack direction="row">
      <ListItem
        secondaryAction={
          <IconButton edge="end">
            <ChatIcon color="primary" aria-label="chat" />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>N</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          primaryTypographyProps={{
            fontWeight: 600,
          }}
        />
      </ListItem>

      <IconButton sx={{ marginRight: 1 }}>
        <AcceptIcon color="primary" />
      </IconButton>
    </Stack>
  );
};

export default UserWaitingListItem;
