

import { addDoc, collection, deleteDoc, doc } from "firebase/firestore"
import Swal from "sweetalert2"
import { db } from "../firebase/firebase-config"
import { loadGifts } from "../helpers/loadGifts"
import { types } from "../types/types"




export const addNewGift=({id,userId,name,url})=>{
    return async(dispatch)=>{
        const data={
            userId : userId,
            name:name,
            imgId:id,
            url:url,
            fecha:new Date().getTime(),
        }
        const resp = await addDoc(collection(db,"Gift"),data); 
        dispatch(addGift(resp.id,data))

        Swal.fire({
            position:'top-end',
            icon:'success',
            html:data.name+'<strong> Agregado</strong>',
            showConfirmButton: false,
            backdrop:false,
            timer:1000,
          });
    }
}


export const startGiftLoading=(uid)=>{
    return async(dispatch)=>{
        const Gifts =await loadGifts(uid);
        dispatch(setGifts(Gifts)) 
    }
}

export const starGiftDelete=(id)=>{
    return async(dispatch)=>{

    Swal.fire({
        title:'Eliminando',
        allowOutsideClick:false,
        showConfirmButton:false,
        background:'rgba(255, 255, 255, 0.9)',
        didOpen:()=>{
            Swal.showLoading();
        }
    })
        
      await deleteDoc(doc(db,`Gift/${id}`));
      
     dispatch(deleteGift(id));

     Swal.close();


     Swal.fire({
        position:'top-end',
        icon:'success',
        html:'<strong>Eliminado</strong>',
        showConfirmButton: false,
        backdrop:false,
        timer:1000,
      });

    }
    
}

export const deleteGift=(id)=>({
    type:types.DeleteGift,
    payload:id
})

export const setGifts=(Gifts)=>({
    type:types.LoadGift,
    payload:Gifts
})

export const addGift=(id,gift)=>({
    type:types.AddGift,
    payload:{id,...gift}  
})