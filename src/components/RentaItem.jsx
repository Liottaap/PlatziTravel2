import { useContext } from 'react';
import { BusquedaContext } from '../context/BusquedaContext';
import casaAlquiler1 from '../assets/img/casa-alquiler1.jpeg';
import estrellas from '../assets/icons/five-stars.png';
import ciudades from '../ciudades.json';
import { Link } from 'react-router-dom';

function RentaItem() {

        const { destino } = useContext(BusquedaContext);
        console.log('Destino buscado:', destino);
        const destinoBuscado = destino ? destino.trim().toLowerCase() : '';
      
        const alojamientos = ciudades.alojamientos.filter((alojamiento) => {
          if (!destinoBuscado) return true;
      
          const nombre = alojamiento.nombre.toLowerCase();
          const destinoJson = (alojamiento.destino || '').toLowerCase();
          const descripcion = (alojamiento.descripcion || '').toLowerCase();
      
          return (
            nombre.includes(destinoBuscado) ||
            destinoJson.includes(destinoBuscado) ||
            descripcion.includes(destinoBuscado)
          );
        });
      
        console.log('Alojamientos filtrados:', alojamientos);

  return (
    <section className="mt-10 w-full grid grid-cols-1 gap-4 p-4 md:grid-cols-3 md:items-center md:justify-items-start lg:mx-4">
      {alojamientos.length === 0 && (
        <p className="col-span-full text-center text-gray-600">
          No se encontraron resultados para "{destino}"
        </p>
      )}
      {alojamientos.map((alojamiento, index) => (
        <article
          key={index}
          className="flex flex-col p-2 shadow-lg shadow-tertiary bg-white rounded-x"
        >
          <img
            src={casaAlquiler1}
            alt=""
            className="w-42 md:w-max h-full object-cover md:w-52 md:h-full col-span-1"
          />

          <div className="h-[160px] flex flex-col gap-1 justify-center items-start">
            <h3 className="text-xl font-semibold md:text-2xl ">
              {alojamiento.nombre}
            </h3>
            <p>{alojamiento.descripcion}.</p>
            <div className="flex items-center">
              <p>calificacion:</p>
              <img src={estrellas} alt="" className="w-40 justify-self-center" />
            </div>
          </div>

          <div className="w-full h-full flex flex-col justify-end items-end">
            <Link
              to={`/rentas/${alojamiento.id}`}
              className="bg-accent text-white px-4 py-2 rounded-20 w-24  text-center h-10 hover:w-full transition-all duration-500"
            >
              Alquilar
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}


export { RentaItem };
