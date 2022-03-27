import { useEffect } from "react";
import { useGift } from "../../../hooks/useGift";
import { CardsScreen } from "../../cards/CardsScreen";


const fbody={
  nombre:'Anime',
  cantidad:10
}

export const WelcomeScreen = () => {
    const [{data,loading},setResp]=useGift();

  useEffect(()=>{
      setResp(fbody);
  },[setResp]);

  return (
    <div>
      <div className="text-center py-1 text-gray-200 rounded-full bg-gray-800">
        <h3 className="text-5xl font-bold uppercase">Bienvenidos</h3>
      </div>

      <div className="grid grid-cols-12">
          {data.length!==0 
          ?data.map(dato=>{
           return <CardsScreen key={dato.id} objeto={dato} />
          })
          :<p className="col-span-12">Cargando</p>
          
          }
      </div>

    </div>
  )
}
