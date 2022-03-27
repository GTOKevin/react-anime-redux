import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useGift } from "../../../hooks/useGift";
import { CardsScreen } from "../../cards/CardsScreen";

const initialState={
  busqueda:'',
  cantidad:0
}

export const SeekerScren = () => {

  const [{data,loading},setResp]=useGift();


  const [form,error,handleChange,]=useForm(initialState);


  const handleSubmit=(e)=>{
    e.preventDefault();
    const fbody={
      nombre:form.busqueda,
      cantidad:form.cantidad
    }
    setResp(fbody);
  }


  return (
    <div>
      <h3 className="text-center text-gray-200 font-semibold text-2xl">Buscar Gifts</h3>
      <form className="my-10 grid grid-cols-8" onSubmit={handleSubmit}>

      <div className="mx-4 col-span-8 my-2 md:my-0 md:col-span-3">
        <input 
        className="w-full rounded pl-2 py-1 outline-none ring-2 transition delay-150 ease-in focus:ring-indigo-700 focus:font-semibold"
        name="busqueda"
        type='text'
        value={form.busqueda}
        onChange={handleChange}
          placeholder="Ingrese su busqueda" />
      </div>
      
      <div className="mx-4 col-span-8 my-2 md:my-0 md:col-span-3">
        <input 
        className="w-full rounded pl-2 py-1 outline-none ring-2 transition delay-150 ease-in focus:ring-indigo-700 focus:font-semibold"
        name="cantidad"
        type='number'
        value={form.cantidad}
        onChange={handleChange}
        placeholder="Cantidad de resultados" />
      </div>

      <div className="col-span-8 my-2 md:my-0 text-right md:col-span-2 md:text-center mx-4">
        <button className="py-1 px-5 bg-gray-700 text-white font-semibold rounded">Buscar</button>
      </div>
      </form>

      <div className="grid grid-cols-12">
      {
        !loading
        ?<p>buscando</p>
        :
        (data.length!==0 ? data.map(r=>{
         return <CardsScreen key={r.id} objeto={r} />
        })
        :<p>No encontrado</p>)
      }
      </div>

    </div>
  )
}
