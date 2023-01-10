import * as React from "react";

import { grey } from "@mui/material/colors";

import {
  Checkbox,
  Dialog,
  styled,
  Box,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  MenuItem,
  FormControlLabel,
  TextField,
  Autocomplete,
  Button,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import {
  DirectionsWalkRounded as CaminarIcon,
  LocationOnRounded as LocIcon,
} from "@mui/icons-material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import api_instance from "../api/api_instance";
import { Destination } from "../types/index";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

interface DialogProps {
  isOpen: boolean;
  titulo: string;
  mensaje: string;
}

const AlertaDialogo = (props: DialogProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle> {props.titulo}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.mensaje}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Registrar Ruta</Button>
        <Button onClick={handleClose} autoFocus>
          Registrar Vehículo
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AlertaDialogo;
