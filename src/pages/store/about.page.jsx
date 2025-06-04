import React from "react";
import { Link } from "react-router-dom";
import StoreLayout from "../../layouts/Store.layout";




const AboutUsPage = () => {
  return (

<>


<StoreLayout/>

    <div className="about-us-page-container">
      <section className="about-us-hero">
        <div className="hero-content">
          <h1>Nuestra Historia en TecNovo</h1>
          <p>La tecnología que transforma, impulsada por la pasión y la visión.</p>
        </div>
      </section>

      <section className="about-us-story">
        <div className="story-content">
          <h2>El Comienzo de TecNovo</h2>
          <p>
            <strong>TecNovo </strong> nació de una idea sencilla pero poderosa: hacer que la última tecnología en celulares y televisores fuera accesible para todos, sin sacrificar calidad ni servicio. Lo que comenzó como un sueño personal, se transformó rápidamente en un emprendimiento dedicado a conectar a las personas con dispositivos que realmente mejoran su día a día.
          </p>
          <p>
            Desde sus inicios, nos propusimos ir más allá de la simple venta de productos. Queremos ser tu aliado tecnológico, ofreciéndote asesoramiento experto y un catálogo cuidadosamente seleccionado que garantice la mejor experiencia para nuestros clientes.
          </p>
        </div>
        <div className="story-image">
          <img src="src/assets/TecNovo.png" alt="Historia de TecNovo" />
        </div>
      </section>

      <section className="about-us-founder">
        <div className="founder-image">
          <img src="src/assets/WhatsApp Image 2025-06-04 at 2.29.14 PM.jpeg" alt="Rocío Ramos - Fundadora de TecNovo" /> 
        </div>
        <div className="founder-details">
          <h2>Nuestra Fundadora y Visionaria</h2>
          <h3>Rocío Ramos</h3>
          <p>
            Es la mente y el corazón detrás de <strong> TecNovo  </strong>. Con una profunda pasión por la tecnología y una visión clara de cómo puede impactar positivamente la vida de las personas, Rocío no solo fundó este emprendimiento, sino que también diseñó y creó cada detalle de esta plataforma web.
          </p>
          <p>
            Su dedicación se extiende desde la selección minuciosa de cada producto hasta la experiencia de usuario que encuentras en TecNovo. Rocío cree firmemente que un buen diseño y una interfaz intuitiva son tan importantes como la calidad del producto en sí. Su compromiso con la innovación y la excelencia es el pilar sobre el que se construye TecNovo.
          </p>
          <p>
            "Crear TecNovo ha sido un viaje increíble. Mi objetivo siempre fue construir un puente entre la tecnología avanzada y la gente, de una manera simple y confiable."
          </p>
          
           <div className="founder-social-links">
            <a href="https://www.linkedin.com/in/rocio-esperanza-ramos/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/roramoss" target="_blank" rel="noopener noreferrer">Portafolio</a>
          </div> 
        </div>
      </section>

      <section className="about-us-values">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
         
          <div className="value-item">
            <h3>Calidad</h3>
            <p>Solo ofrecemos productos que cumplen con nuestros estrictos estándares de rendimiento y durabilidad.</p>
          </div>
          <div className="value-item">
            <h3>Transparencia</h3>
            <p>Información clara y honesta para que tomes la mejor decisión de compra.</p>
          </div>
          <div className="value-item">
            <h3>Cliente Primero</h3>
            <p>Tu satisfacción es nuestra prioridad. Te escuchamos y te apoyamos en cada paso.</p>
          </div>
        </div>
      </section>

      <section className="about-us-cta">
        <h2>¿Listo para explorar la tecnología del futuro?</h2>
        <p>Visita nuestro catálogo y encuentra el producto perfecto para ti.</p>
        <Link to="/auth/Registro" className="cta-button">Ver Productos</Link>
      </section>
    </div>
</>

  );
};

export default AboutUsPage;