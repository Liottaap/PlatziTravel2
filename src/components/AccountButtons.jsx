import React, { useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';


function AccountButtons() {
    const [user, setUser] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const [loadingLogout, setLoadingLogout] = useState(false); // Estado para mostrar ruedita

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if(storedUser){
      setUser(storedUser)
    }
  },[])


    const handleLogout = () => {
      setLoadingLogout(true)
      setTimeout(() => {
        localStorage.removeItem('loggedInUser')
        setUser(null); 
        setOpenMenu(false)
        navigate('/'); 
      }, 2000);
    };
  
    return (
      <div className="relative" id="account-menu">
      {/* Ícono de usuario */}
      {!user && (
        <>
          <Link to='/login' className='px-2 font-medium'>Iniciar Sesión</Link>
          <Link to='/registro' className='px-2 py-1 bg-accent text-white font-bold rounded-sm'>Registrarte</Link>

        </>
      )}
      {user && (
        <button
        className="bi bi-person-fill text-2xl"
        onClick={() => setOpenMenu(prev => !prev)}>
        </button>
      )}

      {/* Menú desplegable */}
      {openMenu && user &&(
        <div className="absolute right-0 mt-2 w-[120px] bg-white shadow-md rounded-md p-4 flex flex-col items-start text-sm z-50">
          <Link to="/cuenta" onClick={() => setOpenMenu(false)} className="text-black mb-2 hover:underline">
            Mi cuenta
          </Link>

          {loadingLogout ? (
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
            Saliendo...
          </div>
          ): (
            <button onClick={handleLogout} className="text-red-600 hover:underline">
            Cerrar sesión
            </button>
          )}
        </div>
  
      )}
    </div>
  );
}
export { AccountButtons };