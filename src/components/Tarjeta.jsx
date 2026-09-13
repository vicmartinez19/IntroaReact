import React from 'react';

function Tarjeta() {
  const nombre = "Ana Pérez";
  const profesion = "Desarrolladora Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  return (
    <div style={{ border: '1px solid #334155', padding: '24px', width: '320px', textAlign: 'center', background: '#1e293b', borderRadius: '12px', margin: '20px auto' }}>
      <h2 style={{ color: '#f8fafc', marginBottom: '4px' }}>{nombre}</h2>
      <h4 style={{ color: '#38bdf8', marginBottom: '12px' }}>{profesion}</h4>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;