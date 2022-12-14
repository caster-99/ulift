//Esto es para mostrar información de la tarjeta de perfil de usuario

import { Grid, Card, CardActionArea, Box, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subtitile: string;
}

const InfoCard = (props: Props): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        elevation={2}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <CardContent sx={{ flex: 3 }}>
          <Typography fontSize={18} lineHeight={1.2} gutterBottom>
            {props.title}
          </Typography>
          <Typography fontSize={14} lineHeight={1.2}>
            {props.subtitile}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default InfoCard;
