import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            main: "#042F3E",
        },
        secondary: {
            main: "#40B4E5",
        },
    },
    
    typography: {
        fontFamily: "Quicksand",

    },  
    components:{
        MuiCssBaseline: {
            styleOverrides: {
              body: {
                backgroundColor: "#fff",
              },
            },
          }, 
          MuiButton:{
            defaultProps:{
                style:{
                    textTransform:"none",
                }
            }
        }
    }
});


export default theme;
