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

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
}

const BuscarColaDialogo = ({ isOpen, closeDialog }: DialogProps) => {
  var destinos: Destination[] = [];
  // const url = "https://ulift-backend.up.railway.app/api/user/profile";
  const url = "http://localhost:3000/api/user/profile";
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const response = await api_instance.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    for (let i = 0; i < response.data.user.destination.length; i++) {
      console.log(response.data.user.destination[i].name);
      destinos.push(response.data.user.destination[i]);
    }
    // console.log(vehiculos);
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  const [direccion, setDireccion] = React.useState("");
  const [metros, setMetros] = React.useState(0);
  const [mujeresOnly, setMujeresOnly] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setDireccion(event.target.value as string);
  };
  const irListaEspera = () => {
    console.log(direccion);
    console.log(metros);
    console.log(mujeresOnly);
    navigate("/listaEspera");
    // if (direccion !== "") {
    //   navigate("/listaEspera");
    // } else {
    //   enqueueSnackbar("¡Espera, tienes que completar todos los campos de manera válida!", {
    //     variant: "error",
    //   });
    // }
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
                {destinos.map((destino) => (
                  <MenuItem value={destino.dNumber}>{destino.name}</MenuItem>
                ))}
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
            <CaminarIcon color="info" fontSize="large" />
            <TextField
              fullWidth
              id="metros"
              label="Metros dispuestos a caminar"
              variant="outlined"
              required
              type="number"
              onChange={(e) => setMetros(parseInt(e.target.value))}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
              inputProps={{
                "aria-label": "Solo aceptar mujeres",
              }}
              id="mujeresOnly"
              onChange={(e) => setMujeresOnly(e.target.checked)}
            />
            <Typography>Solo aceptar mujeres</Typography>
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
