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

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  pasajeros: User[];
  tipo: string;
}

const RatingPassanger = ({ isOpen, closeDialog, pasajeros, tipo }: DialogProps): JSX.Element => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);

  const cerrarDialogo = () => {
    console.log(value);
    setTimeout(() => {
      closeDialog();
      if (tipo === "conductor") {
        localStorage.removeItem("requests");
      }
      localStorage.removeItem("conductores");

      navigate("/");
    }, 5000);
  };

  return (
    <Dialog open={isOpen} fullWidth>
      {tipo === "conductor" && <DialogTitle>Califica a los usuarios</DialogTitle>}
      {tipo === "pasajero" && <DialogTitle>Califica al conductor</DialogTitle>}

      <DialogContent>
        {pasajeros.map((p) => (
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
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={cerrarDialogo}>Calificar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RatingPassanger;
