import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, TextFieldProps } from "formik-mui";

const CheckboxField = (props: TextFieldProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  return <TextField type={showPassword ? "text" : "password"} {...props} />;
};

export default CheckboxField;
