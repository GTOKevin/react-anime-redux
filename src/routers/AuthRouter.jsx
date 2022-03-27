import { Route, Routes } from "react-router-dom"
import { LoginScreen } from "../components/auth/LoginScreen"
import { RegistrarScreen } from "../components/auth/RegistrarScreen"

export const AuthRouter = () => {
  return (  
    <div className="w-screen h-screen bg-blue-700 flex justify-center items-center">
    <Routes>
        <Route path="login"  element={<LoginScreen />}/>
        <Route path="registrar" element={<RegistrarScreen />}/>
    
    </Routes>
    </div>
  )
}
