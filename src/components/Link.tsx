import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

type Props = MuiLinkProps & RouterLinkProps;

const Link = (props: Props): JSX.Element => {
  return <MuiLink component={RouterLink} {...props} />;
};

export default Link;
