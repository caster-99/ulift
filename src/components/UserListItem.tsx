import React from "react";
import { 
    ListItem, 
    Avatar, 
    ListItemAvatar, 
    ListItemText  
} from "@mui/material";

const UserListItem = (): JSX.Element => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    N
                </Avatar>
            </ListItemAvatar>
            <ListItemText 
                primary="Nombre del usuario"
                primaryTypographyProps={{
                    fontWeight: 600,
                }}
            />
        </ListItem>
    );
};

export default UserListItem;