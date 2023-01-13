import * as React from "react";
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
import { Colas } from "../types";

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  cola: Colas;
}

const InfoHistorialDialogo = (props: DialogProps) => {
  const foto = "https://ulift-backend.up.railway.app/" + props.cola.photo;
  /* const [direccion, setDireccion] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setDireccion(event.target.value as string);
  };
  const irListaEspera = () => {
    navigate(`/listaEspera`);
  }; */
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
        <Avatar sx={{ width: 50, height: 50, marginBottom: 1 }} src={foto} />

        <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
          {props.cola.name} {props.cola.lastname} {props.cola.email}
        </Typography>
        {/* <Typography>{props.role}</Typography> */}
        <Typography>Hora: {props.cola.time}</Typography>
        <Typography>Fecha: {props.cola.date}</Typography>
        <Typography>Destino: {props.cola.routename}</Typography>
        <Typography>Vehiculo: {props.cola.model}</Typography>
        <Typography>Placa: {props.cola.plate}</Typography>
        <Typography>Rating: {props.cola.rate}</Typography>
      </DialogContent>
    </Dialog>
  );
};
export default InfoHistorialDialogo;
