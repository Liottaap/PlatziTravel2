
import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('')

  
  const handleLogin = (e) =>{
    e.preventDefault()

    const storedUser = JSON.parse(localStorage.getItem('userData'))

    if(storedUser && storedUser.email === form.email && storedUser.password === form.password){
      
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser))
      navigate('/')
      window.location.reload();
    }else{
      alert('Contraseña incorrecta')
    }

  }
  return (
    <div className='flex md:flex-row min-h-screen'>
      
      {/* Sección de login */}
      <section className='w-[100%] h-[100vh] absolute z-10 md:w-1/2 md:static flex flex-col items-center justify-center gap-10 p-4'>
        <article className='flex flex-col gap-5'>
          <button className='flex items-center gap-10 shadow-md rounded-10 w-[350px] h-10 bg-white'>
            <span className='btn-google w-10 h-10 '></span>
            <p>Ingresar con Google</p>
          </button>
          <button className='flex items-center gap-10 shadow-md rounded-10 w-[350px] h-10 bg-white'>
            <span className='btn-facebook w-10 h-10'></span>
            <p>Ingresar con Facebook</p>
          </button>
        </article>

        {/* seccion de linea ó */}
        <div className='w-[60%] relative flex items-center'>
          {/* linea */}
          <div className=' bg-primary w-full h-[2px]'></div>
          {/* texto */}
          <div className='absolute left-1/2 -translate-x-1/2 bg-primary border-2 border-primary w-6 h-6 rounded-full flex items-center justify-center'>
            <p className='text-white'>ó</p>
          </div>

          
        </div>

      {/* seccion de formulario */}
        <form className="flex flex-col gap-5 w-80 items-center justify-center text-sm" onSubmit={handleLogin}>
          {/* Email */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-left font-medium">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-secondary px-3 py-2 rounded-md shadow-sm shadow-[#acacac] w-full focus:outline-none focus:ring-2 focus:ring-primary"/>
          </div>

          {/* Contraseña */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="password" className="text-left font-medium">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="bg-secondary px-3 py-2 rounded-md shadow-sm shadow-[#acacac] w-full focus:outline-none focus:ring-2 focus:ring-primary"/>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-md font-semibold hover:bg-opacity-90 transition-all " onClick={handleLogin}>Iniciar Sesión</button>
          {/* Enlace recuperar contraseña */}
          <p className="text-sm text-primary hover:underline cursor-pointer">
            Olvidé mi contraseña
          </p>
          <Link to='/registro' className='bg-white text-primary border-2 border-primary w-full py-2 rounded-md font-semibold hover:bg-opacity-90 transition-all text-center'>Registrarse</Link>
        </form>
      </section>

      {/* Fondo decorativo */}
      <section className='bglogin w-[100%] min-h-max  md:h-screen  relative md:w-1/2 md:static'></section>
    </div>
  );
}

export {Login}