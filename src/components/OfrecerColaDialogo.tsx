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
  TextField,
} from "@mui/material";
import {
  EmojiPeopleRounded as PasajerosIcon,
  DirectionsCar as CarIcon,
  LocationOn as LocIcon,
} from "@mui/icons-material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
}

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const OfrecerColaDialogo = ({ isOpen, closeDialog }: DialogProps) => {
  const [direccion, setDireccion] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setDireccion(event.target.value as string);
  };

  const [vehiculo, setVehiculo] = React.useState("");

  const handleChangeVehiculo = (event: SelectChangeEvent) => {
    setVehiculo(event.target.value as string);
  };

  const irListaEspera = () => {
    navigate(`/listaEspera`);
  };
  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogTitle textAlign={"center"} color={"primary"}>
        ¿A donde puedes dar una cola?
      </DialogTitle>
      <DialogContent>
        <Puller />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-around",
            margin: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 2,
              width: "100%",
            }}
          >
            {" "}
            <LocIcon color="warning" fontSize="large" />
            <FormControl fullWidth>
              <InputLabel id="direccionDestino-label">Dirección</InputLabel>

              <Select
                labelId="direccionDestino-label"
                id="direccionDestino-label"
                value={direccion}
                label="Dirección"
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value={"Los olivos"}>Los olivos</MenuItem>
                <MenuItem value={"Altavista"}>Altavista</MenuItem>
                <MenuItem value={"Los Mangos"}>Los Mangos</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 2,
              width: "100%",
            }}
          >
            {" "}
            <CarIcon color="secondary" fontSize="large" />
            <FormControl fullWidth>
              <InputLabel id="vehiculo-label">Vehículo a usar</InputLabel>

              <Select
                labelId="vehiculo-label"
                id="vehiculo-label"
                value={vehiculo}
                label="Vehículo a usar"
                onChange={handleChangeVehiculo}
                fullWidth
              >
                <MenuItem value={"Toyota"}>Toyota</MenuItem>
                <MenuItem value={"Ford"}>Ford</MenuItem>
                <MenuItem value={"Cadillac"}>Cadillac</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 2,
              width: "100%",
            }}
          >
            <PasajerosIcon color="success" fontSize="large" />
            <TextField
              fullWidth
              id="cantPasajeros"
              label="Cantidad de pasajeros"
              variant="outlined"
            />
          </Box>
          <LoadingButton onClick={irListaEspera} variant="text">
            Aceptar
          </LoadingButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default OfrecerColaDialogo;
