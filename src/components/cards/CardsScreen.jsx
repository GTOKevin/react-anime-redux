
export const CardsScreen = ({objeto}) => {

  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4  mx-5 my-5">

      <div className="grid grid-cols-2 transition delay-100 ease-in hover:opacity-50">
          <img className="col-span-2 h-80 w-full" src={objeto.image} alt={objeto.id} />
      </div>

    </div>
  )
}
