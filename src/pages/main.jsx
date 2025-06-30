
import '../index.css';

import { BannerHome } from '../components/BannerHome';
import { MediosDePago } from '../components/MediosDePago';
import { Recomendados } from '../components/Recomendados';
import { Destacados } from '../components/Destacados';
import { BeneficiosBanner } from '../components/BeneficiosBanner';
import { VerMasButton } from '../components/Buttons';
import { FiltroLugares } from '../components/FiltroLugares';
// import { Faqs } from './Faqs';

// import { BusquedaResultados } from '../components/BusquedaResultados';

function Main() {  

  return (
    <main className='flex flex-col'>
      {/* SECCION BANNER */}
      <BannerHome/>

      {/* SECCION MEDIOS DE PAGO */}
      <MediosDePago/>

      {/* SECCION RECOMENDADOS */}
      <Recomendados/>

      {/* Encabezado de la sección */}
      <div className="flex justify-between items-center mt-20 mb-6 px-2 md:px-4">
        <h2 className="text-xl font-semibold md:text-2xl">Rentas destacadas</h2>
        <VerMasButton/>
      </div>

      {/* Sección de locaciones destacadas */}
      <Destacados/>

      {/* Banner */}
      <BeneficiosBanner/>


      <FiltroLugares/>

    </main>

  );
}

export default Main;
