import Header from "../components/header.component";
import "../layouts/tienda.css" 

const StoreLayout = ({ children }) => {
    return (
        <>
            {/* Encabezado fijo o de la tienda */}
            <Header/> 

            {/* 🟢 Renderiza el contenido que envuelve el Layout (e.g., HomePage) */}
            <main className="pt-4">
                {children} 
            </main>
        </>
    );
}
 
export default StoreLayout;