import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifts"

export const useGift = () => {


    const [arreglo, setArreglo] = useState({data:[],loading:false})
   const [form,setForm]= useState({nombre:'',cantidad:0});


    useEffect(()=>{
        console.log("cuenta");
        getGifts(form.nombre,form.cantidad).then(r=>{
            setArreglo({data:r,loading:true});
        }).catch(err=>{
            console.log(err);
        })
    },[form])



    return [arreglo,setForm];
}
