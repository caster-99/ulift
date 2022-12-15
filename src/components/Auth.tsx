import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const Auth = ({ children }: Props): JSX.Element => {
  //  const user = useUser();
  // if (!localStorage.getItem("token")) {
  //   return <Navigate to="/login" />;
  // }

  return children;
};

export default Auth;
