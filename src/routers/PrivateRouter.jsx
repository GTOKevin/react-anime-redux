import { Navigate } from "react-router-dom"

export const PrivateRouter = ({userState,children}) => {
  return userState
         ?children
         :<Navigate to="/auth/login" />
}

