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

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  p: User;
  tipo: string;
}

const RatingPassanger = ({ isOpen, closeDialog, p, tipo }: DialogProps): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);

  const cerrarDialogo = () => {
    var data = JSON.stringify({
      receiverID: p.id,
      rate: value,
    });

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
        enqueueSnackbar("¡Proceso finalizado! En unos segundos estará de vuelta al inicio.", {
          variant: "success",
        });
        setTimeout(() => {
          closeDialog();

          localStorage.removeItem("requests");
          localStorage.removeItem("elegidos");
          localStorage.removeItem("liftID");

          navigate("/");
        }, 8000);
      })
      .catch(function (error) {
        console.log(error);
        enqueueSnackbar("¡Error al procesar el rating!", { variant: "error" });
      });
  };

  return (
    <Dialog open={isOpen} fullWidth>
      {tipo === "conductor" && <DialogTitle>Califica a los usuarios</DialogTitle>}
      {tipo === "pasajero" && <DialogTitle>Califica al conductor</DialogTitle>}

      <DialogContent>
        <Box
          sx={{
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography mr="2px">{p.name}</Typography>
          <Rating
            name="hover-feedback"
            value={value}
            precision={1}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={cerrarDialogo}>Calificar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RatingPassanger;
