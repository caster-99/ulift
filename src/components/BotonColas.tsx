import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  ArrowCircleUpRounded as OfrecerColaIcon,
  ArrowCircleDownRounded as PedirColaIcon,
} from "@mui/icons-material";
import { useState } from "react";
import BuscarColaDialogo from "./BuscarColaDialogo";

export default function BotonColas() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <SpeedDial
      ariaLabel="acciones"
      sx={{ position: "fixed", bottom: "8%", right: "5%" }}
      icon={<SpeedDialIcon />}
      FabProps={{
        color: "secondary",
        size: "large",
      }}
    >
      <SpeedDialAction
        icon={<PedirColaIcon />}
        tooltipTitle="Pedir cola"
        tooltipPlacement="left"
        tooltipOpen
        onClick={openDialog}
        FabProps={{
          size: "medium",
          color: "secondary",
        }}
      />

      <SpeedDialAction
        icon={<OfrecerColaIcon />}
        tooltipTitle="Ofrecer cola"
        tooltipPlacement="left"
        tooltipOpen
        onClick={openDialog}
        FabProps={{
          size: "medium",
          color: "secondary",
        }}
      />
    </SpeedDial>
  );
}
