import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const UnAuth = ({ children }: Props): JSX.Element => {
  // if (localStorage.getItem("token")) {
  //   return <Navigate to="login" />;
  // }

  return children;
};

export default UnAuth;
