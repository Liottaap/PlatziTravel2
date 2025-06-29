import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'


function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones simples
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const userData = {
        nombre: formData.nombre,
        email: formData.email,
        password: formData.password
    }
    localStorage.setItem('userData', JSON.stringify(userData))

    // Redirigir a login o perfil tras registrar
    navigate('/login');
  };

  return (
    <div className='flex items-center justify-center m-20'>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white bg-opacity-90 p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-accent">Crea tu cuenta</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />

        <button
          type="submit"
          className="w-full bg-accent text-white py-2 rounded hover:bg-accent-dark transition"
        >
          Registrarse
        </button>

        <p className="text-sm text-center">
          ¿Ya tienes una cuenta?{' '}
          <span
            className="text-accent cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Inicia sesión
          </span>
        </p>
      </form>
    </div>
  );
}

export { Registro };