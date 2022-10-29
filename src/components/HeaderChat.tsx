import { AppBar, Box, Toolbar, Tooltip, IconButton, Typography } from "@mui/material";
import { ArrowBackRounded as ArrowBackRoundedIcon } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";

const HeaderChat = () => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <AppBar
      position="fixed"
      sx={{
        borderBottom: "1",
        backgroundColor: "white",
        zIndex: 0,
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Atrás" sx={{ display: { md: "none" } }} arrow>
            <IconButton size="large" color="primary" edge="start" onClick={() => navigate(-1)}>
              <ArrowBackRoundedIcon />
            </IconButton>
          </Tooltip>

          <Typography
            color="primary"
            textAlign="center"
            fontSize={{ xs: 20, md: 23 }}
            fontWeight={600}
          >
            Chat con {params.userId}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderChat;
