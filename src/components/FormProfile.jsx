import React from 'react';

function FormProfile({ formData, handleChange, handleSubmit }) {
  return (
    <form 
      onSubmit={handleSubmit} 
      className='m-8 grid md:grid-cols-5 gap-4 w-full max-w-4xl'
    >
      <h1 className='text-2xl col-span-full text-center mb-4'>Perfil de Usuario</h1>

      <label htmlFor="nombre" className='flex flex-col col-span-full  md:col-span-2'>
        Nombre
        <input 
          type="text" 
          name="nombre" 
          value={formData.nombre} 
          onChange={handleChange} 
          className='shadow-sm shadow-black px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </label>

      <label htmlFor="apellido" className='flex flex-col col-span-full md:col-span-3'>
        Apellido
        <input 
          type="text" 
          name="apellido" 
          value={formData.apellido} 
          onChange={handleChange} 
          className='shadow-sm shadow-black px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </label>

      <label htmlFor="area" className='flex flex-col col-span-full md:col-span-2'>
        Código de área
        <input 
          type="tel" 
          name="area" 
          value={formData.area} 
          onChange={handleChange} 
          className='shadow-sm shadow-black px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </label>

      <label htmlFor="telefono" className='flex flex-col col-span-full md:col-span-2'>
        Teléfono
        <input 
          type="tel" 
          name="telefono" 
          value={formData.telefono} 
          onChange={handleChange} 
          className='shadow-sm shadow-black px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </label>

      <label htmlFor="dni" className='flex flex-col col-span-full md:col-span-2'>
        DNI
        <input 
          type="number" 
          name="dni" 
          value={formData.dni} 
          onChange={handleChange} 
          className='shadow-sm shadow-black px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary  col-span-full'
        />
      </label>

      <label htmlFor="fechaNac" className='flex flex-col  col-span-full md:col-span-3'>
        Fecha de Nacimiento
        <input 
          type="date" 
          name="fechaNac" 
          value={formData.fechaNac} 
          onChange={handleChange} 
          className='shadow-sm shadow-black px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary  col-span-full'
        />
      </label>

      <label htmlFor="pais" className='flex flex-col  col-span-full md:col-span-2'>
        País
        <input 
          type="text" 
          name="pais" 
          value={formData.pais} 
          onChange={handleChange} 
          className='shadow-sm shadow-black px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </label>

      <label htmlFor="ciudad" className='flex flex-col col-span-full md:col-span-3'>
        Ciudad
        <input 
          type="text" 
          name="ciudad" 
          value={formData.ciudad} 
          onChange={handleChange} 
          className='shadow-sm shadow-black px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </label>

      <label htmlFor="direccion" className='flex flex-col col-span-full md:col-span-4'>
        Dirección
        <input 
          type="text" 
          name="direccion" 
          value={formData.direccion} 
          onChange={handleChange} 
          className='shadow-sm shadow-black px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </label>

      <label htmlFor="nro" className='flex flex-col col-span-full md:col-span-1'>
        Nro
        <input 
          type="number" 
          name="nro" 
          value={formData.nro} 
          onChange={handleChange} 
          className='shadow-sm shadow-black px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </label>

      <label htmlFor="moneda" className='flex flex-col col-span-full md:col-span-2'>
        Preferencia de moneda
        <select 
          name="moneda" 
          value={formData.moneda} 
          onChange={handleChange}
          className='px-2 py-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-primary'
        >
          <option value="ARS">ARS</option>
          <option value="USD">USD</option>
        </select>
      </label>

      <div className='col-span-full flex justify-center mt-4'>
        <button 
          type="submit"
          className='bg-primary rounded-sm px-6 py-2 text-white text-lg hover:brightness-110 transition'
        >
          Guardar
        </button>
      </div>
    </form>
  );
}

export default FormProfile;



// ARREGLAR EL CAMBIO CUANDO ESCRIBO, MODIFICAR A CUANDO ENVIO SOLAMENTE