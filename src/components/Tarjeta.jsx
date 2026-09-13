import React, { useState } from 'react';
import './Tarjeta.css';

function Tarjeta({
  nombre = "Desarrollador React",
  profesion = "Frontend Engineer",
  mensaje = "Construyendo interfaces modernas y reactivas.",
  habilidades = ["React", "JavaScript", "CSS"],
  avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  disponibleInicial = true,
  contacto = "contacto@ejemplo.com"
}) {
  const [disponible, setDisponible] = useState(disponibleInicial);
  const [mostrarContacto, setMostrarContacto] = useState(false);

  return (
    <div className="tarjeta-card">
      <span className={`tarjeta-badge-estado ${disponible ? 'badge-disponible' : 'badge-ocupado'}`}>
        {disponible ? "● Disponible" : "○ En proyecto"}
      </span>

      <img src={avatar} alt={`Foto de ${nombre}`} className="tarjeta-avatar" />

      <h2 className="tarjeta-nombre">{nombre}</h2>
      <h4 className="tarjeta-profesion">{profesion}</h4>
      <p className="tarjeta-mensaje">{mensaje}</p>

      <div className="tarjeta-habilidades">
        {habilidades.map((habilidad, idx) => (
          <span key={idx} className="badge-skill">{habilidad}</span>
        ))}
      </div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button
          className="tarjeta-boton"
          onClick={() => setMostrarContacto(!mostrarContacto)}
        >
          {mostrarContacto ? "Ocultar Contacto" : "Ver Contacto"}
        </button>

        {mostrarContacto && (
          <p style={{ fontSize: '0.85rem', color: '#38bdf8', marginTop: '4px', wordBreak: 'break-all' }}>
            📧 {contacto}
          </p>
        )}

        <button
          onClick={() => setDisponible(!disponible)}
          style={{
            background: 'transparent',
            color: '#94a3b8',
            fontSize: '0.78rem',
            padding: '4px',
            textDecoration: 'underline'
          }}
        >
          Cambiar disponibilidad
        </button>
      </div>
    </div>
  );
}

export default Tarjeta;