import { Avatar, Box, Typography, Card, CardActionArea, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
interface UserProps {
  name: string;
  photo: string;
  lastMsg: string;
  userId: string;
}

const ChatMini = (props: UserProps): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          width: "100%",
          height: "75px",
          boxShadow: "none",
          p: 0,
          mb: 0.5,
        }}
      >
        <CardActionArea
          sx={{ p: 0, display: "flex", height: "100%" }}
          component={Link}
          to={`/chatPrivado/${props.userId}`}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              boxShadow: "none",
              width: "100%",
              height: "80px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              p: 0,
            }}
          >
            <Box alignItems="center" mr={2}>
              {/* Aquí se tiene que cambiar para colocar la imagen */}
              <Avatar
                sx={{ width: 50, height: 50 }}
                src={"https://ulift-backend.up.railway.app/" + props.photo}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", width: "360px" }}>
              <Box
                sx={{
                  width: "250px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {props.name}
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  height: "20px",
                  width: "250px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  fontSize: "0.875rem",
                  fontWeight: "700",
                }}
              >
                <Typography
                  sx={{
                    color: grey,
                  }}
                >
                  {props.lastMsg}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ChatMini;
