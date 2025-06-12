import { Link } from 'react-router-dom';
import '../index.css';
import { Buscador } from './Buscador';
import { useLocation } from 'react-router-dom';


function Header(){
  const location = useLocation();
  const isHome = location.pathname === '/';
    return(
        <header className='bg-primary text-white flex flex-col  p-6 gap-5'>
        {/* logo y botones */}
        <div className='flex justify-between items-center'>
          <Link to='/' className='text-xl lg:text-4xl'>Platzi Travel</Link>

          <div className='flex items-center gap-2  text-sm md:text-xl font-medium'>
            <button className='bg-accent p-1 rounded-10 hidden md:flex text-sm p-2'>Iniciar Sesión</button>
            <button className='hidden md:flex text-sm p-2'>Registrarse</button>
            <button className='btnAccount md:ml-10 bg-white rounded-full p-2'></button>
          </div>
        </div>
        
        {/* Menu hamburguesa y nav */}
        <nav className='flex justify-between lg:justify-center'>
          <button className='btn-burger lg:hidden'></button>
          {/* Menu hamburguesa */}
          <div className='hidden'>
              <a href='/'>Inicio</a>
              <a href='/'>Rentas</a>
              <a href='/'>Divisas</a>
              <a href='/'>Faqs</a>
            </div>
            
            <div className='flex gap-12 text-xl hidden md:flex'>
              <Link to='/'>Inicio</Link>
              <Link to='/rentas'>Rentas</Link>
              <Link to='/divisas'>Divisas</Link>

              <Link to='/faqs'>Preguntas Frecuentes</Link>

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