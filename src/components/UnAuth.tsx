import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const UnAuth = ({ children }: Props): JSX.Element => {
  return <Navigate to="/" replace />;
};

export default UnAuth;
