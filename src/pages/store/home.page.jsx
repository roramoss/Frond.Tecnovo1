import React ,{useState, useEffect} from "react";
import { CardGroup, Card } from "react-bootstrap";
import StoreLayout from "../../layouts/Store.layout";
import Promociones from "../promociones";
import Nosotros from "../../components/nosotros";
import Footer from "../../components/footer";
import AboutUsPage from "./about.page";
import NotFoundPage from "./404";
import useAuth from "../../hooks/auth.hook";




const HomePage = () => {




    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
      'src/assets/promocion1.webp',
      'src/assets/promocion2.webp',
      'src/assets/promocion3.webp',
      'src/assets/promomomo.webp'
      
    ];
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextImage();
      }, 5000); // Cambia de imagen cada 5 segundos
  
      return () => clearInterval(interval);
    }, []);



    return (  
    
    <>
    


    <StoreLayout/>

  <Nosotros/>

    <Promociones/>
    
    
    <section>

    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <button className="prev" onClick={prevImage}>❮</button>
      <button className="next" onClick={nextImage}>❯</button>
    </div>

    </section>



 <Footer/>


    </>
    
    );
}
 
export default HomePage;