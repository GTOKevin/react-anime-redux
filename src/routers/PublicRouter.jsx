import { Navigate } from "react-router-dom"

export const PublicRouter = ({userState,children}) => {
  
  return !userState
         ? children
         : <Navigate to="/" />
}
