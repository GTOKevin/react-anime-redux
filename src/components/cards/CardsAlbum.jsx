import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { starGiftDelete } from "../../action/gift";

export const CardsAlbum = ({objeto}) => {

  const dispatch=useDispatch();

  const handleDelete=()=>{
     dispatch(starGiftDelete(objeto.id));
  }

  const handleClipboard =()=>{
    navigator.clipboard.writeText(objeto.url);

    Swal.fire({
      position:'bottom-end',
      html:'<p class="text-white text-sm font-semibold">Copiado<i class="pl-1 fa-solid fa-clipboard"></i></p>',
      background:'rgba(249, 115, 22, 1)',
      showConfirmButton: false,
      backdrop:false,
      timer:1000,
      width:150,

    });
  }

    return (
      <div className="col-span-12 md:col-span-6 xl:col-span-4  mx-5 my-5 animate__animated animate__fadeIn">
  
        <div className="relative grid grid-cols-2 ">
            <img className="col-span-2 h-80 w-full transition delay-100 ease-in hover:opacity-50" src={objeto.url} alt={objeto.id} />
            <div className="absolute flex w-full justify-between">
            <p 
            className="text-white cursor-pointer pl-1 pr-5 py-0.5 opacity-50 transition delay-100 ease-in  hover:opacity-100 bg-orange-500 rounded-r-xl font-semibold text-bases"
            onClick={handleDelete}><i className="pr-1 fa-solid fa-trash-can"></i>Eliminar</p>
            <p 
            className="text-white cursor-pointer pr-1 pl-5 py-0.5 opacity-50 transition delay-100 ease-in  hover:opacity-100 bg-orange-500 rounded-l-xl font-semibold text-bases"
            onClick={handleClipboard}>Clipboard<i className="pl-1 fa-solid fa-clipboard"></i></p>
            </div>
        
            <div className="bg-orange-500 text-white  col-span-2 py-1 text-center uppercase font-semibold transition delay-100 ease-in"><h5>{objeto.name}</h5></div>
        </div>
  
      </div>
    )
  }
  