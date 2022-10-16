import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const UnAuth = ({ children }: Props): JSX.Element => {
  //const user = useUser();

  // if (1) {
  //   return <Navigate to="/home" replace />;
  // }

  return children;
};

export default UnAuth;
