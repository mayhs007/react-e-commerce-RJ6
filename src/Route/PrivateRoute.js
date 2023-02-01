import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }) => {
  if (Cookies.get("isAuthenticated")) {
    return children
  }
  return <Navigate to="/login"></Navigate>
}
