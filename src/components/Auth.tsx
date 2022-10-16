import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const Auth = ({ children }: Props): JSX.Element => {
  return <Navigate to="/login" replace />;
};

export default Auth;
