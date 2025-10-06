import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/store/home.page";
import AuthLayout from "./layouts/auth.layout";
import Login from "./pages/auth/login.page";
import Register from "./pages/auth/register.page";
import AdmiLayout from "./layouts/admi.layout";


import StorePage from "./pages/store/store.page";
import AboutPage from "./pages/store/about.page";
import ProductPage from "./pages/admin/products.page";
import NotFoundPage from "./pages/store/404";
import StoreLayout from "./layouts/Store.layout";
import { AuthProvider } from "./providers/auth.providers";
import DashboardPage from "./pages/admin/dashborard.page";
import UsersPage from "./pages/admin/users.page";

const App = () => {
  return (
    
      <Routes>
        {/* --- Rutas Públicas (Sin Layout Compartido, usan StoreLayout internamente) --- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Tienda" element={<StorePage />} />
        <Route path="/Nosotros" element={<AboutPage />} />
        
        {/* --- Rutas de Autenticación (Usan AuthLayout) --- */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="Login" element={<Login />} />
          <Route path="Registro" element={<Register />} />
        </Route>
        
        {/* --- Rutas de Administración (Usan AdmiLayout) --- */}
        {/* Nota: Aquí el path="/admin" es el layout y el index es el dashboard */}
        <Route path="/admin" element={<AdmiLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="gestor-usuarios" element={<UsersPage />} />
          <Route path="gestor-producto" element={<ProductPage />} />
        </Route>

        {/* --- Ruta 404 (Siempre al final) --- */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
   
  );
};

export default App;
