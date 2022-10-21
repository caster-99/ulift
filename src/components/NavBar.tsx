import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  HomeRounded as HomeIcon,
  FavoriteRounded as FavIcon,
  PersonRounded as PersonIcon,
  MenuRounded as MenuIcon,
  HistoryRounded as HistoryIcon,
  ContactSupportRounded as QuestionIcon,
  LogoutRounded as CloseIcon,
  ChatRounded as ChatIcon,
  SosRounded as SosIcon,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import logo from "../assets/logo512.png";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export const NavBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // Maneja la redirección de cada una de las opciones del menú

  const handleClickFav = () => {
    navigate(`/favoritos`);
  };

  const handleClickHome = () => {
    navigate(`/`);
  };

  const handleClickProfile = () => {
    navigate(`/perfil`);
  };

  const handleClickHistory = () => {
    navigate(`/historial`);
  };

  const handleClickChats = () => {
    navigate(`/chats`);
  };

  const handleClickFaq = () => {
    navigate(`/faq`);
  };

  const handleClickCloseSesion = () => {
    navigate(`/login`);
  };

  //Función que hace el llamado a SOS

  const handleClickSOS = () => {
    enqueueSnackbar("¡Llamando a emergencias!", { variant: "info" });
  };

  //Función que maneja el menú lateral
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Lista de elementos del menú
  const drawer = (
    <div>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickProfile}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Perfil</ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickHome}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Inicio</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleClickHistory}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText>Historial</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleClickFav}>
            <ListItemIcon>
              <FavIcon />
            </ListItemIcon>
            <ListItemText>Favoritos</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickChats}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText>Chats</ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickFaq}>
            <ListItemIcon>
              <QuestionIcon />
            </ListItemIcon>
            <ListItemText>Preguntas frecuentes</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleClickCloseSesion}>
            <ListItemIcon>
              <CloseIcon />
            </ListItemIcon>
            <ListItemText>Cerrar Sesión</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "primary",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                width: { xs: 70, sm: 120 },
                position: { sm: "absolute" },
                top: { sm: "50%" },
                left: { sm: "50%" },
                transform: { sm: "translate(-50%, -50%)" },
              }}
            />
          </Box>

          <IconButton edge="end" size="large" color="error" onClick={handleClickSOS}>
            <SosIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};
