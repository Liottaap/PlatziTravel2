import ciudades from '../ciudades.json'
import { useState } from 'react';

function FiltroLugares(){
    const [filtroActivo, setFiltroActivo] = useState('nacional');

    const tipos = [
        { label: 'Ciudades Internacionales', valor: 'internacional' },
        { label: 'Ciudades Nacionales', valor: 'nacional' },
        { label: 'Regiones', valor: 'region' },
      ];
      
    const ciudadesFiltradas = ciudades.destinos.filter(ciudad =>ciudad.valor.toLowerCase() === filtroActivo);

    return(
        <section className="px-4 mb-20">
        <h2 className="text-2xl font-bold mb-4">Lugares para viajar</h2>
  
        <ul className="flex gap-4 mb-6 flex-wrap">
          {tipos.map(({ label, valor }) => (
            <li
              key={valor}
              onClick={() => setFiltroActivo(valor)}
              className={`pt-2 pb-2 px-6 rounded-20 cursor-pointer border ${
                filtroActivo === valor ? 'bg-primary text-white' : 'bg-white text-black border-primary'
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
  
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          {ciudadesFiltradas.map((ciudad, i) => (
            <li key={i}>Hoteles en {ciudad.nombre}</li>
          ))}
        </ul>
      </section>
    )
}


export {FiltroLugares}