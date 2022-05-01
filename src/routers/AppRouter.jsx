import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { login } from "../action/auth"
import { startGiftLoading } from "../action/gift"
import { LibraryScreen } from "../components/home/LibraryScreen"
import { LoadingHome } from "../components/ui/LoadingHome"
import { auth } from "../firebase/firebase-config"
import { AuthRouter } from "./AuthRouter"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"

export const AppRouter = () => {

    const dispatch=useDispatch();
    const [estado,setEstado]=useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        onAuthStateChanged(auth, async(user)=>{
                if(user?.uid){
                    dispatch(login(user.uid,user.displayName,user.photoURL));
                    setEstado(true);
                    dispatch(startGiftLoading(user.uid))
                    
                }else{
                    setEstado(false);
                }
                setLoading(false);
        })

    }, [dispatch,setEstado])
    
    if(loading){
        return <LoadingHome />
    }


    return(
        <BrowserRouter>
            <Routes>
           
             
                <Route path="auth/*" element={
                <PublicRouter userState={estado}>
                    <AuthRouter />
                </PublicRouter>}
                />
                   <Route path="/*"
                element={
                    <PrivateRouter userState={estado}>
                        <LibraryScreen />
                    </PrivateRouter>
                }
                />
            </Routes>
        </BrowserRouter>
    )

}
