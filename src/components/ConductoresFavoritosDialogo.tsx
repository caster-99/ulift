import { useState } from "react";
import {
  Button,
  Chip,
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

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
}

const ConductoresFavoritosDialogo = ({ isOpen, closeDialog }: DialogProps) => {
  const [favorito, setFavorito] = useState("");
  const [adding, setAdding] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleAddFavorito = async () => {
    // if (
    //   user.email === favorito ||
    //   form.collaborators.find((c) => c.email === favorito)
    // ) {
    //   return enqueueSnackbar("Este usuario ya es colaborador", {
    //     variant: "error",
    //   });
    // }

    // const { error } = await addFavorito(form, favorito);

    setAdding(true);

    // if (error) {
    //   return enqueueSnackbar("No hay usuarios con este email", {
    //     variant: "error",
    //   });
    // }

    enqueueSnackbar("Conductor favorito agregado", { variant: "success" });

    setFavorito("");
    closeDialog();
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
        Conductor favorito
        <Tooltip title="Cerrar" arrow>
          <IconButton onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <DialogContent sx={{ background: "inherit" }}>
        <List sx={{ background: "inherit" }}>
          <ListSubheader sx={{ background: "inherit" }}>Agregar conductor favorito</ListSubheader>
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

export default ConductoresFavoritosDialogo;
