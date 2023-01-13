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
  p: User[];
}

const RatingPasajeros = ({ isOpen, closeDialog, p }: DialogProps): JSX.Element => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);
  console.log("pasajeros " + p);

  const cerrarDialogo = () => {
    console.log(value);
    setTimeout(() => {
      closeDialog();

      localStorage.removeItem("requests");

      navigate("/");
    }, 8000);
  };

  return (
    <Dialog open={isOpen} fullWidth>
      <DialogTitle>Califica a los usuarios</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {p.map((user, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography mr="2px">{user.name} </Typography>
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
