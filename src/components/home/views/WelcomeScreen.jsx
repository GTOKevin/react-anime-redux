import { useEffect } from "react";
import { useGift } from "../../../hooks/useGift";
import { CardsScreen } from "../../cards/CardsScreen";
import { LoadingCard } from "../../ui/LoadingCard";


const fbody={
  nombre:'Anime',
  cantidad:10
}

export const WelcomeScreen = () => {
    const [{data},setResp]=useGift();

  useEffect(()=>{
      setResp(fbody);
  },[setResp]);

  return (
    <div>
      <div className="text-center py-1 text-gray-200 rounded-full bg-gray-800 mb-8">
        <h3 className="text-5xl font-bold uppercase transition ease-in delay-150 hover:text-indigo-600">GIFT <span className="text-indigo-600 transition ease-in delay-150 hover:text-white">APP</span></h3>
      </div>

      <div className="grid grid-cols-12">
          {data.length!==0 
          ?data.map(dato=>{
           return <CardsScreen key={dato.id} objeto={dato} />
          })
          :<LoadingCard />
          
          }
      </div>

    </div>
  )
}
