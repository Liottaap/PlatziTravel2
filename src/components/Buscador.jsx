import { useContext } from 'react';
import { BusquedaContext } from '../context/BusquedaContext';
import { useNavigate } from 'react-router-dom';
import search from '../assets/icons/search2.svg';

function Buscador() {
  const { destino, setDestino, fecha, setFecha } = useContext(BusquedaContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/rentas?destino=${encodeURIComponent(destino)}&fecha=${fecha}`);
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <div className="flex items-center bg-white rounded-l-10">
        <img src={search} alt="buscar" className="pl-2 w-10 h-10" />
        <input
          type="search"
          placeholder="A donde vas?"
          required
          className="outline-none py-1 pl-4 text-tertiary w-32 md:w-80 rounded-l-10"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        />
      </div>

      <input
        type="date"
        required
        className="outline-none px-2 text-tertiary w-20 md:w-32 rounded-r-10"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <button className="text-black bg-white hover:bg-blue-900 hover:text-white transform transition-all px-2 rounded-10">
        Buscar
      </button>
    </form>
  );
}

export { Buscador };
