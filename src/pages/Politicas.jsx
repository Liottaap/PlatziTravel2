import React from 'react';

export default function Politicas() {
  return (
    <div className="p-6  m-20">
      <h1 className="text-3xl font-bold mb-4">Políticas de Privacidad</h1>
      <p className="mb-4">
        En PlatziTravel, valoramos tu privacidad y estamos comprometidos a proteger tu información personal. Esta política describe cómo recopilamos, usamos y protegemos tus datos.
      </p>
      <h2 className="text-2xl font-semibold mb-2">1. Información que recopilamos</h2>
      <p className="mb-4">
        Recopilamos información personal como tu nombre, correo electrónico y detalles de pago cuando realizas una reserva o te registras en nuestra plataforma.
      </p>
      <h2 className="text-2xl font-semibold mb-2">2. Uso de la información</h2>
      <p className="mb-4">
        Utilizamos tu información para procesar reservas, mejorar nuestros servicios y enviarte actualizaciones relevantes sobre tus viajes.
      </p>
      <h2 className="text-2xl font-semibold mb-2">3. Protección de datos</h2>
      <p className="mb-4">
        Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados, alteraciones o divulgaciones.
      </p>
      <h2 className="text-2xl font-semibold mb-2">4. Tus derechos</h2>
      <p className="mb-4">
        Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. Contáctanos para ejercer estos derechos.
      </p>
      <h2 className="text-2xl font-semibold mb-2">5. Cambios en esta política</h2>
      <p className="mb-4">
        Nos reservamos el derecho de actualizar esta política de privacidad. Notificaremos cualquier cambio a través de nuestra plataforma.
      </p>
      <p className="text-sm text-gray-500">
        Si tienes preguntas sobre nuestras políticas de privacidad, contáctanos en <a href="mailto:soporte@platzitravel.com" className="text-primary">soporte@platzitravel.com</a>.
      </p>
    </div>
  );
}