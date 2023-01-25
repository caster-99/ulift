import { Dialog, DialogTitle, DialogContent, Avatar, Typography } from "@mui/material";
import { Colas } from "../types";

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  cola: Colas;
}

const InfoHistorialDialogo = (props: DialogProps) => {
  const foto = "https://ulift-backend.up.railway.app/" + props.cola.photo;

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
          {props.cola.name} {props.cola.lastname}
        </Typography>

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
