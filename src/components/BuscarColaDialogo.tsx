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
} from "@mui/material";
import { LocationOn as LocIcon } from "@mui/icons-material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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

const BuscarColaDialogo = ({ isOpen, closeDialog }: DialogProps) => {
  const [direccion, setDireccion] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setDireccion(event.target.value as string);
  };
  const irListaEspera = () => {
    navigate(`/listaEspera`);
  };
  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogTitle textAlign={"center"} color={"primary"}>
        ¿A donde necesitas una cola?
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
            </FormControl>
          </Box>
          <LoadingButton onClick={irListaEspera} variant="text">
            Aceptar
          </LoadingButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default BuscarColaDialogo;
