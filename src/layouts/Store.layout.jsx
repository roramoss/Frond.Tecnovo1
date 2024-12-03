import { Outlet } from "react-router-dom";


const StoreLayout = () => {
    return (
        <>
        <header>HEADER</header>
        
        <Outlet/>
        </>
         );
}
 
export default StoreLayout;