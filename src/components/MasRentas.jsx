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
      className="w-full overflow-x-auto px-4 py-6"
    >
      <div className="grid grid-rows-2 auto-cols-max auto-flow-col gap-4 w-max">
        {datos.destinos.map((destino, index) => (
          <article
            key={index}
            className="w-64 h-40 bg-primary rounded border shadow-md p-4 flex flex-col justify-between shrink-0"
          >
            <h3 className="font-bold text-sm truncate">{destino.nombre}</h3>
            <p className="text-xs text-gray-700 line-clamp-3">{destino.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export { MasRentas };
