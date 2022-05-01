import { Route, Routes } from "react-router-dom"
import { Navbar } from "../ui/Navbar"
import { AlbumScreen } from "./views/AlbumScreen"
import { SeekerScren } from "./views/SeekerScren"
import { WelcomeScreen } from "./views/WelcomeScreen"


export const LibraryScreen = () => {
 
  document.getElementById('body').style.background="#4f46e5";

  return (
    <div>
         <Navbar />

       
      
      
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="Welcome" element={<WelcomeScreen />} />
                <Route path="Seeker" element={<SeekerScren />} />
                <Route path="Album" element={<AlbumScreen />}/>
            </Routes>
            </div>
            {/* /End replace */}
          </div>
        </main>

    </div>
   
  )
}
