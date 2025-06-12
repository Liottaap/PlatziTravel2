
import mediosDePago from '../assets/img/MediosDePago.png'

function MediosDePago(){

    return(
        <section className=' mt-2 flex items-center justify-evenly  h-[200px]'>
            <p className='text-2xl  text-center hidden md:flex'>Recibimos todos los medios de pago!</p>
            <img src={mediosDePago} className='w-max h-32' alt=''></img>
        </section>
    )
}

export {MediosDePago}