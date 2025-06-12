import { createContext, useState } from 'react';

const BusquedaContext = createContext();

function BusquedaProvider({ children }) {
  const [destino, setDestino] = useState('');

  return (
    <BusquedaContext.Provider value={{ destino, setDestino }}>
      {children}
    </BusquedaContext.Provider>
  );
}

export { BusquedaContext, BusquedaProvider };