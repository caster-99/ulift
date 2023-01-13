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

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  name: string;
  time: string;
  date: string;
  location: string;
  //role: string;
  car: string;
  photo: string;
  plate: string;
  rate: number;
}

const InfoHistorialDialogo = (props: DialogProps) => {
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
        <Avatar sx={{ width: "80px", height: "80px" }}>N</Avatar>

        <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>{props.name}</Typography>
        {/* <Typography>{props.role}</Typography> */}
        <Typography>Hora: {props.time}</Typography>
        <Typography>Fecha: {props.date}</Typography>
        <Typography>Destino: {props.location}</Typography>
        <Typography>Vehiculo: {props.car}</Typography>
        <Typography>Placa: {props.plate}</Typography>
        <Typography>Rating: {props.rate}</Typography>
      </DialogContent>
    </Dialog>
  );
};
export default InfoHistorialDialogo;
