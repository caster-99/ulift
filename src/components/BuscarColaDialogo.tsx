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
  FormControlLabel,
} from "@mui/material";
import { LocationOnRounded as LocIcon } from "@mui/icons-material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useSnackbar } from "notistack";

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
}

const BuscarColaDialogo = ({ isOpen, closeDialog }: DialogProps) => {
  const [direccion, setDireccion] = React.useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setDireccion(event.target.value as string);
  };
  const irListaEspera = () => {
    if (direccion !== "") {
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
        ¿A donde necesitas una cola?
      </DialogTitle>
      <DialogContent>
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
            <LocIcon color="success" fontSize="large" />
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
            </FormControl>{" "}
          </Box>{" "}
          <FormControlLabel control={<Checkbox />} label="Solo aceptar mujeres" defaultValue={0} />
          <LoadingButton onClick={irListaEspera} variant="text">
            Aceptar
          </LoadingButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default BuscarColaDialogo;
