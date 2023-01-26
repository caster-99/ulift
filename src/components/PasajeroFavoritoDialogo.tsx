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
    setAdding(true);
    const token = localStorage.getItem("token");
    const url = "https://ulift-backend.up.railway.app/api/favorites";
    //   const url = "http://localhost:3000/api/lift";
    var data = JSON.stringify({
      email: favorito,
    });

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
        enqueueSnackbar("Usuario favorito agregado", { variant: "success" });
        setAdding(false);
        setFavorito("");
        closeDialog();
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("¡Error al guardar favorito!", { variant: "error" });
        setAdding(false);
        setFavorito("");
        closeDialog();
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
        Usuario favorito
        <Tooltip title="Cerrar" arrow>
          <IconButton onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <DialogContent sx={{ background: "inherit" }}>
        <List sx={{ background: "inherit" }}>
          <ListSubheader sx={{ background: "inherit" }}>Agregar usuario favorito</ListSubheader>
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
