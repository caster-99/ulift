import { Box, Card, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo512.png";

const LoginLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #042F3E 0%, #40B4E5 100%)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 450 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="img" src={logo} alt="logo" sx={{ width: "100%", mb: 1 }} />
        </Box>
        <Card raised sx={{ px: 5, py: 6, mb: 3, borderRadius: 4, position: "relative" }}>
          <Outlet />
        </Card>
      </Container>
    </Box>
  );
};

export default LoginLayout;
