import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListSubheader,
  TextField,
  Tooltip,
} from "@mui/material";
import { AccountCircle, Close as CloseIcon } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
}

const PasajeroFavoritoDialogo = ({ isOpen, closeDialog }: DialogProps) => {
  const [favorito, setFavorito] = useState("");
  const [adding, setAdding] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleAddFavorito = async () => {
    console.log("Agregando pasajero favorito " + favorito);
    setAdding(true);
    const token = localStorage.getItem("token");
    const url = "https://ulift-backend.up.railway.app/api/";
    //   const url = "http://localhost:3000/api/lift";
    var data = JSON.stringify({
      // plate: vehiculo.split(" - ")[0],
      // rNumber: direccion.split(" - ")[0],
      // seats: puestos,
      // waitingTime: tiempo,
    });

    console.log(data);

    const config = {
      method: "post",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        enqueueSnackbar("Pasajero favorito agregado", { variant: "success" });
        setFavorito("");
        closeDialog();
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("¡Error a crear la cola!", { variant: "error" });
      });
  };

  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Pasajero favorito
        <Tooltip title="Cerrar" arrow>
          <IconButton onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <DialogContent sx={{ background: "inherit" }}>
        <List sx={{ background: "inherit" }}>
          <ListSubheader sx={{ background: "inherit" }}>Agregar pasajero favorito</ListSubheader>
          <ListItem
            component="form"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              variant="standard"
              fullWidth
              type="email"
              placeholder="Email"
              onChange={(newValue) => setFavorito(newValue.target.value)}
            />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={!favorito || adding}
          onClick={handleAddFavorito}
          sx={{ alignSelf: "flex-end" }}
        >
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PasajeroFavoritoDialogo;
