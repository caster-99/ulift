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
  AlarmRounded as TimeIcon,
  EmojiPeopleRounded as PasajerosIcon,
  DirectionsCar as CarIcon,
  LocationOn as LocIcon,
} from "@mui/icons-material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSnackbar } from "notistack";

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
}

const OfrecerColaDialogo = ({ isOpen, closeDialog }: DialogProps) => {
  const [direccion, setDireccion] = React.useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setDireccion(event.target.value as string);
  };

  const [vehiculo, setVehiculo] = React.useState("");
  const [puestos, setPuestos] = React.useState(0);
  const [tiempo, setTiempo] = React.useState(0);

  const handleChangeVehiculo = (event: SelectChangeEvent) => {
    setVehiculo(event.target.value as string);
  };
  const irListaEspera = () => {
    if (direccion !== "" && vehiculo !== "" && puestos >= 1 && tiempo > 1) {
      navigate("/listaEspera");
    } else {
      enqueueSnackbar("¡Espera, tienes que completar todos los campos de manera válida!", {
        variant: "error",
      });
    }
  };
  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogTitle textAlign={"center"} color={"primary"}>
        ¿A donde puedes dar una cola?
      </DialogTitle>
      <DialogContent>
        <FormControl>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-around",
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
                <InputLabel id="direccionDestino-label">Ruta</InputLabel>

                <Select
                  labelId="direccionDestino-label"
                  id="direccionDestino-label"
                  value={direccion}
                  label="Ruta"
                  onChange={handleChange}
                  fullWidth
                  required
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
                  required
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
                required
                type="number"
                onChange={(e) => setPuestos(parseInt(e.target.value))}
              />
            </Box>{" "}
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
              <TimeIcon color="primary" fontSize="large" />
              <TextField
                fullWidth
                id="tiempoEspera"
                label="Tiempo a esperar (minutos)"
                variant="outlined"
                required
                type="number"
                onChange={(e) => setTiempo(parseInt(e.target.value))}
              />
            </Box>
            <FormControlLabel
              control={<Checkbox />}
              label="Solo aceptar mujeres"
              defaultValue={0}
            />
            <LoadingButton onClick={irListaEspera} variant="text">
              Aceptar
            </LoadingButton>
          </Box>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};
export default OfrecerColaDialogo;
