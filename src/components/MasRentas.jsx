import React, { useRef, useEffect } from 'react';
import datos from '../ciudades.json';

function MasRentas() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section
      ref={scrollRef}
      className="w-full overflow-x-auto px-4 py-6 scroll-personalizado"
    >
      <div
        className="grid grid-flow-col auto-cols-max grid-rows-2 gap-4"
      >
        {datos.destinos.map((destino, index) => (
          <article
            key={index}
            className="w-64 h-40 bg-primary text-white rounded shadow-md p-4 flex flex-col justify-between"
          >
            <h3 className="font-bold text-sm truncate">{destino.nombre}</h3>
            <p className="text-xs line-clamp-3">{destino.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export { MasRentas };
