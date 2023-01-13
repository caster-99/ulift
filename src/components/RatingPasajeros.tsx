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
}

interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  p: ColasDisponibles[];
}

const RatingPasajeros = ({ isOpen, closeDialog, p }: DialogProps): JSX.Element => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);
  console.log("elegidos: " + localStorage.getItem("elegidos")!);
  var elegidosString = JSON.parse(localStorage.getItem("elegidos")!);
  p = elegidosString;
  console.log("pasajeros en el rating " + p);

  const cerrarDialogo = () => {
    console.log(value);

    //luego de que se mande el rating

    for (let i = 0; i < p.length; i++) {
      var data = JSON.stringify({
        receiverID: p[i].id,
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
        })
        .catch(function (error) {
          console.log(error);
        });
    }

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
                <Typography mr="2px">
                  {user.nameU} {user.lastname}{" "}
                </Typography>
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
