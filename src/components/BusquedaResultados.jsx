// src/components/BusquedaResultados.jsx
import { useContext } from 'react';
import { BusquedaContext } from '../context/BusquedaContext';
import casaAlquiler1 from '../assets/img/casa-alquiler1.jpeg';
import estrellas from '../assets/icons/five-stars.png';
import ciudades from '../ciudades.json';
import { Link } from 'react-router-dom';

function BusquedaResultados() {
  const { destino } = useContext(BusquedaContext);
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

  return (
    <section className="mt-10 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-4">
      {alojamientos.length === 0 && (
        <p className="col-span-full text-center text-gray-600">
          No se encontraron resultados para "{destino}"
        </p>
      )}
      {alojamientos.map((alojamiento, index) => (
        <article
          key={index}
          className="flex flex-col p-2 shadow-lg shadow-tertiary bg-white rounded-xl"
        >
          <img
            src={casaAlquiler1}
            alt={alojamiento.nombre}
            className="w-full h-40 object-cover rounded-t-xl"
          />

          <div className="h-[160px] flex flex-col gap-1 justify-center items-start p-2">
            <h3 className="text-lg font-semibold">{alojamiento.nombre}</h3>
            <p className="text-sm text-gray-700">{alojamiento.descripcion}.</p>
            <div className="flex items-center">
              <p className="mr-1">Calificación:</p>
              <img src={estrellas} alt="Estrellas" className="w-20" />
            </div>
          </div>

          <div className="w-full flex justify-end items-end px-2 pb-2">
            <Link
              to={`/rentas/${alojamiento.id}`}
              className="bg-accent text-white px-4 py-1 rounded-full text-sm hover:w-full transition-all duration-500 text-center"
            >
              Alquilar
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}

export { BusquedaResultados };