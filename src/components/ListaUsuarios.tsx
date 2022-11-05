import React from "react";
import { 
    Box,

} from "@mui/material";
import UserListItem from "../components/UserListItem";

const ListaUsuarios = (): JSX.Element => {
    return (
        <Box display={"flex"} flexDirection="column">
            <UserListItem name="Maria Guerra" userId="1"/>
            <UserListItem name="Maria Guerra" userId="2"/>
            <UserListItem name="Maria Guerra" userId="3"/>
            <UserListItem name="Maria Guerra" userId="4"/>
            <UserListItem name="Maria Guerra" userId="5"/>
            <UserListItem name="Maria Guerra" userId="6"/>
            <UserListItem name="Maria Guerra" userId="7"/>
            <UserListItem name="Maria Guerra" userId="8"/>
            <UserListItem name="Maria Guerra" userId="9"/>
            
        </Box>
    );
};

export default ListaUsuarios;