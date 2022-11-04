import React from "react";
import { 
    ListItem, 
    Avatar, 
    ListItemAvatar, 
    ListItemText,
    Card,
    CardContent, 
    Grid,
} from "@mui/material";
interface UserProps {
    name: string;
    // photo: object;
    userId: string;
}

const UserListItem = (props: UserProps): JSX.Element => {
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
                            <Avatar>
                                {props.userId}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={props.name}
                            primaryTypographyProps={{
                                fontWeight: 600,
                            }}
                        />
                    </ListItem>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default UserListItem;