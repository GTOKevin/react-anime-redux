import { useForm } from "../../../hooks/useForm";
import { useGift } from "../../../hooks/useGift";
import { CardsSeeker } from "../../cards/CardsSeeker";
import { LoadingCard } from "../../ui/LoadingCard";
import { NotFound } from "../../ui/NotFound";


const initialState={
  busqueda:'',
  cantidad:0
}

export const SeekerScren = () => {

  const [{data,loading},setResp]=useGift();


  const [form,errors,handleChange]=useForm(initialState);

  var patt = new RegExp(/^[A-Za-z0-9\s]+$/g);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const fbody={
      nombre:form.busqueda,
      cantidad:form.cantidad
    }

    if(formValidate()){
     setResp(fbody);
    }

  }


  const formValidate=()=>{
    if(form.cantidad<=0 || form.busqueda.length===0){
      return false;
    }
    if(!patt.test(form.busqueda)){
      return false;
    }
    return true;
  }


  return (
    <div>
      <div className="text-center py-1 text-gray-200 rounded-full bg-gray-800">
        
      <h3 className="text-5xl font-bold uppercase transition ease-in delay-150 hover:text-indigo-600">Buscar <span className="text-indigo-600 transition ease-in delay-150 hover:text-white">Gift</span></h3>
      </div>
      <form className="my-10 grid grid-cols-8" onSubmit={handleSubmit}>

      <div className="mx-4 col-span-8 my-2 md:my-0 md:col-span-5">
        <input 
        className="w-full rounded pl-2 py-0.5 outline-none ring-2 transition delay-150 ease-in focus:ring-indigo-700 focus:font-semibold"
        name="busqueda"
        type='text'
        value={form.busqueda}
        onChange={handleChange}
          placeholder="Ingrese su busqueda" />
      </div>
      
      <div className="mx-4 col-span-8 my-2 md:my-0 md:col-span-3">
        <input 
        className="w-full rounded pl-2 py-0.5 outline-none ring-2 transition delay-150 ease-in focus:ring-indigo-700 focus:font-semibold"
        name="cantidad"
        type='number'
        value={form.cantidad}
        onChange={handleChange}
        placeholder="Cantidad de resultados" />
      </div>

      <div className="col-span-8 my-5 text-right md:text-center mx-4">
        <button disabled={errors.resp} className="py-1 px-5 bg-gray-800 w-full text-white font-semibold rounded">Buscar</button>
      </div>
      </form>

      <div className="grid grid-cols-12">
      {
        !loading
        ?<LoadingCard />
        :
        (data.length!==0 ? data.map(r=>{
         return <CardsSeeker key={r.id} objeto={r} />
        })
        :<NotFound />)
      }
      
      </div>

    </div>
  )
}
