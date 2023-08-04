import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const PrivateRoute = ({ children }) => {
  const { data } = useUser();
  const location = useLocation();

  if (!data) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
