import React from 'react';
import '../components/nosotros.css'; 

const Nosotros = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-content">
        <h1>TecNovo</h1>
        <p>
          ¡Bienvenido a <strong>TecNovo! </strong> Somos un emprendimiento apasionado por la tecnología, dedicado a ofrecerte los últimos y mejores productos electrónicos como celulares y televisores. En TecNovo, creemos que la tecnología debe ser accesible para todos, mejorando tu vida diaria y brindándote experiencias inigualables.
        </p>
        <p>
          Nuestra misión es simple: proveer productos de alta calidad a precios competitivos, respaldados por un servicio al cliente excepcional. Nos esforzamos por mantenernos al día con las últimas innovaciones para que siempre encuentres lo más novedoso en nuestro catálogo.
        </p>
        <p>
          Gracias por confiar en <strong>TecNovo! </strong>. ¡Esperamos que disfrutes de tu experiencia de compra!
        </p>
      </div>
      <div className="about-us-image">
        {/* Puedes añadir una imagen relevante aquí */}
        <img src="src/assets/TecNovo.png" alt="TecNovo - Tienda de Tecnología" />
      </div>
    </section>
  );
};

export default Nosotros;