import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, TextFieldProps } from "formik-mui";

const PasswordField = (props: TextFieldProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="cambiar visibilidad de la contraseña"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordField;
