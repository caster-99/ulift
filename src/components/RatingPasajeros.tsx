import {
  Dialog,
  DialogTitle,
  DialogContent,
  Rating,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { User } from "../types";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

interface ColasDisponibles {
  color: string;
  date: Date;
  distanceLastNode: number;
  id: number;
  email: string;
  gender: string;
  lastname: string;
  liftID: number;
  model: string;
  nameU: string;
  path: string;
  photo: string;
  plate: string;
  rName: string;
  rate: number;
  role: string;
  seats: number;
  time: Date;
  waitingTime: number;
  newRate: number | null;
}

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  p: ColasDisponibles[];
}

const RatingPasajeros = ({ isOpen, closeDialog, p }: DialogProps): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [value, setValue] = useState<number[] | null[]>([]);
  const [hover, setHover] = useState(-1);

  var elegidosString = JSON.parse(localStorage.getItem("elegidos")!);
  p = elegidosString;

  const cerrarDialogo = () => {
    //luego de que se mande el rating
    let j = 0;
    for (let i = 0; i < p.length; i++) {
      // eslint-disable-next-line no-loop-func
      setTimeout(() => {
        var data = JSON.stringify({
          receiverID: p[i].id,
          rate: p[i].newRate,
        });

        console.log(data);

        var config = {
          method: "post",
          url: "https://ulift-backend.up.railway.app/api/lift/rating",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            j++;
          })
          .catch(function (error) {
            console.log(error);
            enqueueSnackbar("¡Error al procesar el rating!", { variant: "error" });
          });
      }, 5000);
    }

    if (j === p.length) {
      setTimeout(() => {
        closeDialog();
        enqueueSnackbar("¡Proceso finalizado! En unos segundos estará de vuelta al inicio.", {
          variant: "success",
        });
        localStorage.removeItem("requests");
        localStorage.removeItem("elegidos");
        localStorage.removeItem("liftID");

        navigate("/");
      }, 8000);
    }
  };

  return (
    <Dialog open={isOpen} fullWidth>
      <DialogTitle>Califica a los usuarios</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            width: "200px",
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          {p.map((user, index) => {
            return (
              <Box key={index}>
                <Typography mr="2px">
                  {user.nameU} {user.lastname}
                </Typography>
                <Rating
                  key={index}
                  value={value[index]}
                  precision={1}
                  onChange={(event, newValue) => {
                    user.newRate = newValue;
                    value[index] = newValue;
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
              </Box>
            );
          })}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={cerrarDialogo}>Calificar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RatingPasajeros;
