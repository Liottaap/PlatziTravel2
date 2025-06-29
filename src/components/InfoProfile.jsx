

import React from 'react'

import defaultImage from '../assets/img/defaultProfile.png'

function InfoProfile({preview, handleUpload, formData}) {
 

  return (
    <section className='flex flex-col items-center gap-4 bg-secondary p-10 rounded-10'>
        <figure className='w-40 h-40 rounded-full overflow-hidden'>
        <img src={preview || defaultImage} alt="Vista previa" className='w-full h-full object-cover' />
        </figure>

        <label htmlFor="fileInput" className='cursor-pointer inline-block p-2 '>
        Editar foto de perfil
        <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleUpload}
            style={{ display: 'none' }}
        />
        </label>

        <article className='text-center'>
        <h3 className='text-xl font-bold'>{formData.nombre} {formData.apellido}</h3>
        <p>{formData.ciudad}, {formData.pais}</p>
        <p>{formData.area} {formData.telefono}</p>
        <p>Moneda: {formData.moneda.toUpperCase()}</p>
        </article>
    </section>
  )
}

export default InfoProfile
