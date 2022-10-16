import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  HomeRounded as HomeIcon,
  FavoriteRounded as FavIcon,
  PersonRounded as PersonIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<{ color: "red" | "blue" }>()((theme, { color }) => ({
  root: {
    color,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export const NavBar = () => {
  const classes = useStyles({ color: "red" });

  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  const handleClickFav = () => {
    navigate(`/favoritos`);
  };

  const handleClickHome = () => {
    navigate(`/`);
  };

  const handleClickProfile = () => {
    navigate(`/perfil`);
  };
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        // "& .MuiBottomNavigation-root": {
        //   backgroundColor: "primary.main",
        // },
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Favoritos" icon={<FavIcon />} onClick={handleClickFav} />
      <BottomNavigationAction label="Inicio" icon={<HomeIcon />} onClick={handleClickHome} />
      <BottomNavigationAction label="Perfil" icon={<PersonIcon />} onClick={handleClickProfile} />
    </BottomNavigation>
  );
};
