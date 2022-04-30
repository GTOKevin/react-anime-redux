import { useState } from "react";
import { AddGift } from "../modals/AddGift";



export const CardsSeeker = ({objeto}) => {


  const [modal,setModal]=useState(false);

  const handleOn=()=>{
    setModal(true);

  }

  return (
    <>

    {
      modal
      ?<AddGift state={{modal,setModal}} data={objeto} />
      :null
    }
      
    <div className="col-span-12 md:col-span-6 xl:col-span-4  mx-5 my-5">
 

    <div className="grid grid-cols-2 ">
      <div className='col-span-2 static h-80 bg-cover w-full' style={{backgroundImage:`url(${objeto.image})`,backgroundSize:'cover'}}>
{/*         

        <img className="h-80 w-full" src={objeto.image} alt={objeto.id} /> */}
        <div className="relative w-full h-80 h-containt cursor-pointer" onClick={handleOn}>
            <div className='h-children absolute'>
              <div>
                  <button className='rounded px-5 py-3 text-white text-5xl'><i className="fa-solid fa-plus"></i></button>
              </div>
            </div>
            <div className='static hover:opacity-25 hover:bg-indigo-600 w-full h-full'> 

            </div>
        </div>
     
      </div>
    </div>

  </div>
  
  </>
  )
}
