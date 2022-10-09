import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#042F3E", //Azul primario figma
    },
    secondary: {
      main: "#40B4E5", //Azul UCAB
      contrastText: "#ffffff", //Si se quita, los botones azul claro tendrán letra negra
    },
    error: {
      main: "#FF0000",
    },
    warning: {
      main: "#FFC526", //Amarillo UCAB
    },
    neutral: {
      main: "#F1F3F4", //Gris de figma
    },
    success: {
      main: "#047732", //Verde UCAB
    },
  },

  typography: {
    fontFamily: "Quicksand",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});

export default theme;
