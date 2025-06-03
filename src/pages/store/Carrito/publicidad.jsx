import React from 'react';

// Componente React para el banner de publicidad
const AdvertisementBanner = ({ title, description, imageUrl, callToActionText, callToActionLink }) => {
  return (
    <div className="advertisement-banner-container">
      <div className="advertisement-banner-image-wrapper">
        <img src={imageUrl} alt={title} className="advertisement-banner-image" />
      </div>
      <div className="advertisement-banner-content">
        <h3 className="advertisement-banner-title">{title}</h3>
        <p className="advertisement-banner-description">{description}</p>
        <a href={callToActionLink} className="advertisement-banner-button">
          {callToActionText}
        </a>
        <p className="advertisement-banner-disclaimer">
          ¡Aprovecha nuestras ofertas por tiempo limitado!
        </p>
      </div>

      {/* Aquí insertamos los estilos CSS directamente en el componente */}
      <style jsx>{`
        .advertisement-banner-container {
          display: flex;
          flex-direction: column;
          width: 300px; /* Ajusta el ancho para que coincida con tus cards de producto */
          border: 1px solidrgb(155, 34, 34);
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(250, 250, 250, 0.1);
          background-color: #fff;
          overflow: hidden;
          margin: 15px; /* Espacio entre los banners o entre banners y productos */
          padding-bottom: 15px;
          box-sizing: border-box;
        }

        .advertisement-banner-image-wrapper {
          width: 100%;
          height: 200px; /* Ajusta la altura de la imagen */
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-bottom: 1px solid #eee;
        }

        .advertisement-banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .advertisement-banner-content {
          padding: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .advertisement-banner-title {
          font-size: 1.2em;
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
        }

        .advertisement-banner-description {
          font-size: 0.9em;
          color: #555;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .advertisement-banner-button {
          background-color: #007bff;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s ease;
          margin-bottom: 10px;
        }

        .advertisement-banner-button:hover {
          background-color: #0056b3;
        }

        .advertisement-banner-disclaimer {
          font-size: 0.8em;
          color: #777;
          margin-top: 5px;
        }

        /* Puedes añadir media queries aquí si lo necesitas para la responsividad */
        @media (max-width: 768px) {
          .advertisement-banner-container {
            width: 90%; /* Hace el banner más flexible en pantallas pequeñas */
            margin: 10px auto;
          }
        }
      `}</style>
    </div>
  );
};

export default AdvertisementBanner;