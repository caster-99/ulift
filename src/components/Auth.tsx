import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const Auth = ({ children }: Props): JSX.Element => {
  //  const user = useUser();

  return children;
};

export default Auth;
