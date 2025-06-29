import { Link } from 'react-router-dom';
import '../index.css';
import { Buscador } from './Buscador';
import { useLocation } from 'react-router-dom';
import { AccountButtons } from './AccountButtons';


function Header(){
  const location = useLocation();
  const isHome = location.pathname === '/';
    return(
        <header className='bg-primary text-white flex flex-col  p-6 gap-5'>
        {/* logo y botones */}
        <div className='flex justify-between items-center'>
          <Link to='/' className='text-xl lg:text-4xl'>Platzi Travel</Link>
          <AccountButtons />
        </div>
        
        {/* Menu hamburguesa y nav */}
        <nav className="relative flex justify-center items-center text-white lg:static lg:flex lg:justify-center lg:text-white">
        {/* Input oculto para controlar visibilidad */}
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          {/* Botón hamburguesa que abre el menú */}
          <label
            htmlFor="menu-toggle"
            className="btn-burger lg:hidden fixed top-30 left-4 z-50 cursor-pointer text-white text-3xl peer-checked:hidden">
          </label>

          {/* Menú hamburguesa (visible solo si el input está checked) */}
          <div className="nav peer-checked:opacity-100 peer-checked:visible lg:visible lg:opacity-100">
            {/* Botón para cerrar el menú (otro label que desmarca el checkbox) */}
            <label
              htmlFor="menu-toggle"
              className="close-btn lg:hidden absolute top-4 right-4 text-white text-2xl cursor-pointer">✕
            </label>

            {/* Lista de enlaces */}
            <div className="navlist">
              <Link to="/">Inicio</Link>
              <Link to="/rentas">Rentas</Link>
              <Link to="/divisas">Divisas</Link>
              <Link to="/faqs">Faqs</Link>
            </div>
          </div>
        </nav>

        {!isHome && (
        <div className="mt-4 self-center">
          <Buscador />
        </div>
      )}
      </header>
    )
}

export default Header