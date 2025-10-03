import { Outlet } from "react-router-dom";
import "../layouts/tienda.css"
import Header from "../components/header.component";


const StoreLayout = () => {
    return (
        <>

        <Header/>

        <Outlet/>
        </>
         );
}
 
export default StoreLayout;