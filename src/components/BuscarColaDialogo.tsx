import * as React from "react";
import {
  Checkbox,
  Dialog,
  Box,
  DialogTitle,
  DialogContent,
  FormControl,
  TextField,
  Autocomplete,
} from "@mui/material";
import {
  DirectionsWalkRounded as CaminarIcon,
  LocationOnRounded as LocIcon,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import api_instance from "../api/api_instance";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import axios from "axios";

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
}

interface ColasDisponibles {
  color: string;
  date: Date;
  distanceLastNode: number;
  driverID: number;
  email: string;
  gender: string;
  lastname: string;
  liftID: number;
  model: string;
  name: string;
  path: string;
  photo: string;
  plate: string;
  rName: string;
  rate: number;
  role: string;
  seats: number;
  time: Date;
  waitingTime: number;
}

var destinos: string[] = [];
var conductores: ColasDisponibles[] = [];

const BuscarColaDialogo = ({ isOpen, closeDialog }: DialogProps) => {
  //var destinos: Destination[] = [];

  const url = "https://ulift-backend.up.railway.app/api/user/profile";
  //const url = "http://localhost:3000/api/user/profile";
  const fetchUser = async () => {
    const token = localStorage.getItem("token");

    const response = await api_instance.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    for (let i = 0; i < destinos.length; i++) {
      destinos.pop();
    }

    for (let i = 0; i < response.data.user.destination.length; i++) {
      destinos.push(
        response.data.user.destination[i].dNumber + " - " + response.data.user.destination[i].name
      );
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const [direccion, setDireccion] = React.useState("");
  const [metros, setMetros] = React.useState(0);
  const [mujeresOnly, setMujeresOnly] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const pedirCola = async (url: string, token: string) => {
    var config = {
      method: "get",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        enqueueSnackbar("¡Solicitud de cola creada con exito! Espera que un conductor te acepte.", {
          variant: "success",
        });
        //guardo en localStorage los conductores disponibles

        conductores = response.data.lifts;
        localStorage.setItem("conductores", JSON.stringify(conductores));

        setTimeout(() => {
          navigate("/listaEspera/pasajero");
        }, 5000);
      })
      .catch(function (error) {
        enqueueSnackbar("¡No se pudo crear la solicitud de cola!", {
          variant: "error",
        });
      });
  };

  const irListaEspera = () => {
    if (direccion !== "" && metros.toString() !== "") {
      const token = localStorage.getItem("token");

      var mujeres = 0;
      if (mujeresOnly) {
        mujeres = 1;
      }
      var lat: number = 0;
      var lng: number = 0;

      var destino = {
        method: "get",
        url: "https://ulift-backend.up.railway.app/api/user/destination",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios(destino)
        .then(function (response) {
          for (let i = 0; i < response.data.destination.length; i++) {
            if (response.data.destination[i].dNumber === parseInt(direccion.split(" - ")[0])) {
              lat = response.data.destination[i].lat;
              lng = response.data.destination[i].lng;
              console.log(lat);
              console.log(lng);
            }
            const url =
              "https://ulift-backend.up.railway.app/api/lift/match/" +
              mujeres +
              "/" +
              lat +
              "/" +
              lng +
              "/" +
              metros;
            pedirCola(url, token!);
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      destinos = [];
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
            <LocIcon color="warning" fontSize="large" />
            <FormControl fullWidth>
              <Autocomplete
                onChange={(event, value) => setDireccion(value as string)}
                options={destinos}
                id="direccionDestino-label"
                fullWidth
                renderInput={(params) => <TextField {...params} label="Destino" />}
              />
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
