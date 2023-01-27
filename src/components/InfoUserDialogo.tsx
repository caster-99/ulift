import * as React from "react";

import { grey } from "@mui/material/colors";

import {
  Dialog,
  styled,
  Box,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  MenuItem,
  Avatar,
  Typography,
} from "@mui/material";
import { LocationOnRounded as LocIcon } from "@mui/icons-material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  name: string;
  time: string;
  seats: number;
  location: string;
  role: string;
  photo: string;
}

const InfoUserDialogo = (props: DialogProps) => {
  const [direccion, setDireccion] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setDireccion(event.target.value as string);
  };
  const irListaEspera = () => {
    navigate(`/listaEspera`);
  };
  return (
    <Dialog open={props.isOpen} onClose={props.closeDialog}>
      <DialogTitle textAlign={"center"} color={"primary"}>
        Información de la cola
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {/* Aquí se tiene que cambiar para colocar la imagen */}
        <Avatar
          sx={{ width: 50, height: 50 }}
          src={"https://ulift-backend.up.railway.app/" + props.photo}
        />

        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "18px",
          }}
        >
          {props.name}
        </Typography>
        {props.role === "E" && <Typography>Estudiante</Typography>}
        {props.role === "P" && <Typography>Docente</Typography>}
        {props.role === "T" && <Typography>Trabajador</Typography>}

        <Typography>Tiempo de espera: {props.time} minutos</Typography>

        <Typography>Puestos disponibles: {props.seats} puestos</Typography>
      </DialogContent>
    </Dialog>
  );
};
export default InfoUserDialogo;
