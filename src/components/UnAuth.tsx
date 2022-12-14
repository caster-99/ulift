import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const UnAuth = ({ children }: Props): JSX.Element => {
  //const user = useUser();

  if (!localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }

  return children;
};

export default UnAuth;
