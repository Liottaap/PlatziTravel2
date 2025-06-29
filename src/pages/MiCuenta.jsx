import { useState, useEffect } from 'react';
import React from 'react';
import InfoProfile from '../components/InfoProfile';
import FormProfile from '../components/FormProfile';

function MiCuenta() {
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    area: '',
    dni: '',
    fechaNac: '',
    pais: '',
    ciudad: '',
    direccion: '',
    nro: '',
    moneda: ''
  });

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    const savedData = localStorage.getItem('profileData');

    if (savedImage) setPreview(savedImage);
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        localStorage.setItem('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profileData', JSON.stringify(formData));
  };

  return (
    <main className='flex flex-col md:flex-row md:justify-around items-center gap-4 mt-8'>

      {/* Seccion de foto e info */}
      <InfoProfile
        preview={preview}
        handleUpload={handleUpload}
        formData={formData}
      />

      {/* Seccion de formulario */}
      <FormProfile
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

    </main>
  );
}

export { MiCuenta };