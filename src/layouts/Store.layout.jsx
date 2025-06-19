import { Outlet } from "react-router-dom";
import "../layouts/tienda.css"
import Header from "../components/header.component";


const StoreLayout = () => {
    return (
        <>

        <Header/>

         <br /><br /><br /><br /><br />
        
        <Outlet/>
        </>
         );
}
 
export default StoreLayout;