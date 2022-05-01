import { useSelector } from "react-redux";
import { CardsAlbum } from "../../cards/CardsAlbum";
import { LoadingCard } from "../../ui/LoadingCard";
import { NotFound } from "../../ui/NotFound";


export const AlbumScreen = () => {

 const {gifts:data} = useSelector(state=>state.gift);

  return (
    <>
       <div className="text-center py-1 text-gray-200 rounded-full bg-gray-800 mb-8">

          <h3 className="text-5xl font-bold uppercase">ALBUM</h3>

      </div>


      <div className="grid grid-cols-12 mb-10">
         {data!== undefined 
         ? (data.length>0)
            ?
              data.map(dato=>{
              return <CardsAlbum key={dato.id} objeto={dato} />
              })
              :<NotFound />
          :<LoadingCard />
          }
     </div>
    </>
  ) 
}
