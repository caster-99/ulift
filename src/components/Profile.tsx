import { Box, Typography, Avatar, Stack, Divider, Container } from "@mui/material";
import { StarRateRounded as StarIcon } from "@mui/icons-material";
import React from "react";
import { User } from "../types";

const Profile = (user: User): JSX.Element => {
  const foto = "https://ulift-backend.up.railway.app/" + user.photo;
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Avatar sx={{ width: 120, height: 120, marginBottom: 1 }} src={foto} />
      <Typography
        color="primary"
        textAlign="center"
        fontSize={{ xs: 27, md: 30 }}
        fontWeight={600}
        mb={{ xs: 2, sm: 3 }}
      >
        {user.name} {user.lastname}
      </Typography>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={6}>
        <Box>
          <Typography textAlign="center">Rating</Typography>
          <Stack direction="row" display="flex" justifyContent="center" alignItems="center">
            <Typography textAlign="center" fontWeight={600}>
              {user.rating}
            </Typography>
            <StarIcon fontSize="small" color="secondary" />
          </Stack>
        </Box>
        <Box>
          <Typography textAlign="center">Nro total de viajes</Typography>
          <Typography textAlign="center" fontWeight={600}>
            {user.trips}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Profile;
