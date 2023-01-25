import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  MenuItem,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  AddAPhotoRounded as AddPhotoIcon,
  ArrowBackRounded as ArrowBackRoundedIcon,
} from "@mui/icons-material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { CheckboxWithLabel, RadioGroup, TextField } from "formik-mui";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import PasswordField from "../components/PasswordField";
import Link from "../components/Link";
import { useId } from "react";
import Select from "../components/Select";
import SubPaginasHeader from "../components/SubPaginasHeader";
import logo from "../assets/logo512.png";
import Profile from "../components/Profile";
import { User } from "../types";
/*interface UserProps {
  name: string;
  // photo: object;
  rating: string;
  userId: string;
  rides: number;
}*/

const PerfilExterno = (user: User): JSX.Element => {
  const params = useParams();
  // let { id } = useParams();

  //hacer una llamada a la api para que dado un id, me traiga los datos del usuario

  return (
    <Box>
      <SubPaginasHeader pageName="Perfil" />
      <Box sx={{ mt: 8 }}>
        <Profile
          id={user.id}
          name={user.name}
          lastname={user.lastname}
          email={user.email}
          role={user.role}
          gender={user.gender}
          photo={user.photo}
          trips={user.trips}
          rating={user.rating}
          emergencyContact={user.emergencyContact}
          emergencyName={user.emergencyName}
          vehicles={user.vehicles}
          destinations={user.destinations}
          routes={user.routes}
        />
      </Box>
    </Box>
  );
};

export default PerfilExterno;
