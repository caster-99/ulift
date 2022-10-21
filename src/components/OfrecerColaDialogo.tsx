import * as React from "react";
import { Global } from "@emotion/react";

import { grey } from "@mui/material/colors";

import {
  Dialog,
  CssBaseline,
  styled,
  Box,
  Skeleton,
  SwipeableDrawer,
  Typography,
  Drawer,
} from "@mui/material";

const drawerBleeding = 56;

interface Props {
  window?: () => Window;
  isOpen: boolean;
  closeDialog: () => void;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.mode === "light" ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export default function OfrecerColaDialogo(props: Props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />

      <Drawer
        container={container}
        anchor="bottom"
        open={props.isOpen}
        onClose={props.closeDialog}
        // onOpen={toggleDrawer(true)}
        //   swipeAreaWidth={drawerBleeding}
        //  disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: false,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />

          <Typography sx={{ p: 2, color: "primary", fontWeight: "600", textAlign: "center" }}>
            ¿A donde puedes dar una cola?
          </Typography>
          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: "100%",
              overflow: "auto",
            }}
          ></StyledBox>
        </StyledBox>
      </Drawer>
    </>
  );
}
