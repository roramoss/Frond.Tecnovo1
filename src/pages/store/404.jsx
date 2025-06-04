// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Para navegar de vuelta a la página principal


const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>¡Ups! Página No Encontrada</h2>
        <p>Parece que la página que estás buscando no existe o se ha movido.</p>
        <p>No te preocupes, puedes volver a la página de inicio o explorar nuestros productos.</p>
        
        <div className="not-found-actions">
          <Link to="/" className="not-found-button primary">
            Ir a Inicio
          </Link>
          
        </div>

    
      </div>
    </div>
  );
};

export default NotFoundPage;