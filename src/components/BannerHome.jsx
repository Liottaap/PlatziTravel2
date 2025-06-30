
import banner from '../assets/img/sanFranciscoDesktop.jpg'
import { ReservaButton } from './Buttons'
function BannerHome(){

    return(
        <section className='relative w-full h-[400px] overflow-hidden'>
            <div className=' absolute inset-0 flex items-center justify-center flex-col gap-10 text-white'>
                <p className=' text-5xl font-bold text-shadow'>Platzi Travel</p>

                {/* Boton de Reserva */}
                <ReservaButton/>
                {/* Buscador */}

            </div>
            <img src={banner} className=' w-full h-full object-cover' alt="banner" />
      </section>

    )
}

export {BannerHome}