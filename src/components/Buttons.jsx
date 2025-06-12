import { Link } from "react-router-dom"

export const VerMasButton = () => {
    return(
      <Link to={'/rentas'} className="text-sm md:text-base bg-accent text-white px-20 py-2 rounded-l-20  hover:scale-x-105 transition-transform font-semibold">Ver más locaciones</Link>
    )
}


export const ReservaButton = () => {
  
  return(
    <button className='bg-accent pr-10 pl-10 p-2 rounded-20 font-medium text-xl'>Reservá</button>

  )
}