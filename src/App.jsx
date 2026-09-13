import React, { useState } from 'react';
import Tarjeta from './components/Tarjeta';

const perfilesEjemplo = [
  {
    id: 1,
    nombre: "Ana Pérez",
    profesion: "Desarrolladora Web Fullstack",
    mensaje: "¡Bienvenido a mi tarjeta de presentación! Especialista en crear soluciones accesibles.",
    habilidades: ["React", "Vite", "Node.js", "TypeScript"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    disponibleInicial: true,
    contacto: "ana.perez@devmail.com"
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    profesion: "Diseñador UI/UX & Frontend",
    mensaje: "Transformo experiencias complejas en interfaces minimalistas, hermosas e intuitivas.",
    habilidades: ["Figma", "React", "TailwindCSS", "JSX"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    disponibleInicial: true,
    contacto: "carlos.ui@devmail.com"
  },
  {
    id: 3,
    nombre: "Lucía Ramírez",
    profesion: "Ingeniera de Software Cloud",
    mensaje: "Apasionada por la escalabilidad, despliegues CI/CD y arquitecturas serverless modernas.",
    habilidades: ["React", "AWS", "Docker", "GraphQL"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    disponibleInicial: false,
    contacto: "lucia.cloud@devmail.com"
  }
];

function App() {
  const [temaClaro, setTemaClaro] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: temaClaro ? '#f1f5f9' : '#0f172a',
      color: temaClaro ? '#0f172a' : '#f8fafc',
      padding: '40px 20px',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <header style={{ maxWidth: '1100px', margin: '0 auto 40px auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', padding: '6px 14px', background: '#0284c7', color: '#fff', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '12px' }}>
          MÓDULO 4: ACTIVIDAD 1
        </div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>
          Tarjetas de Presentación en React
        </h1>
        <p style={{ maxWidth: '650px', margin: '0 auto 20px auto', color: temaClaro ? '#475569' : '#94a3b8', fontSize: '1.05rem' }}>
          Práctica de <strong>Componentes Funcionales</strong>, sintaxis <strong>JSX</strong> y paso de <strong>Props</strong> reutilizables con Vite. Compatible 100% con <strong>GitHub Pages</strong>.
        </p>

        <button
          onClick={() => setTemaClaro(!temaClaro)}
          style={{
            padding: '10px 18px',
            background: temaClaro ? '#0f172a' : '#38bdf8',
            color: temaClaro ? '#f8fafc' : '#0f172a',
            fontSize: '0.9rem',
            borderRadius: '10px',
            fontWeight: 700
          }}
        >
          {temaClaro ? "🌙 Cambiar a Modo Oscuro" : "☀️ Cambiar a Modo Claro"}
        </button>
      </header>

      <main style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        {perfilesEjemplo.map((perfil) => (
          <Tarjeta
            key={perfil.id}
            nombre={perfil.nombre}
            profesion={perfil.profesion}
            mensaje={perfil.mensaje}
            habilidades={perfil.habilidades}
            avatar={perfil.avatar}
            disponibleInicial={perfil.disponibleInicial}
            contacto={perfil.contacto}
          />
        ))}
      </main>

      <footer style={{ maxWidth: '800px', margin: '60px auto 0 auto', textAlign: 'center', borderTop: '1px solid #334155', paddingTop: '24px', color: '#64748b', fontSize: '0.85rem' }}>
        <p>Desarrollado con ⚛️ React 18 + Vite | Listo para despliegue en GitHub Pages</p>
      </footer>
    </div>
  );
}

export default App;