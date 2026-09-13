import React from 'react';

function Tarjeta({
  nombre = "Desarrollador React",
  profesion = "Frontend Engineer",
  mensaje = "Construyendo interfaces modernas.",
  habilidades = ["React", "JavaScript", "CSS"],
  avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
}) {
  return (
    <div style={{ border: '1px solid #334155', padding: '24px', width: '320px', textAlign: 'center', background: '#1e293b', borderRadius: '12px', margin: '0 auto' }}>
      <img src={avatar} alt={nombre} style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '12px', objectFit: 'cover' }} />
      <h2 style={{ color: '#f8fafc', marginBottom: '4px' }}>{nombre}</h2>
      <h4 style={{ color: '#38bdf8', marginBottom: '10px' }}>{profesion}</h4>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '14px' }}>{mensaje}</p>
      <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {habilidades.map((hab, i) => (
          <span key={i} style={{ background: '#334155', color: '#7dd3fc', fontSize: '0.75rem', padding: '3px 8px', borderRadius: '9999px' }}>
            {hab}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tarjeta;