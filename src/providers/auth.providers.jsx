import { useState, createContext, useEffect } from 'react';
import axiosClient from '../services/axios.service.jsx';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Inicialmente en TRUE

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        // Si no hay token, simplemente terminamos la carga
        setIsLoading(false); 
        return;
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axiosClient.get('/users/me', config);
        setAuth(data);
        // Si tiene éxito, el finally lo establecerá en false
      } catch (error) {
        // Si el token no es válido o hay un error, lo borramos y establecemos auth vacío
        setAuth({});
        localStorage.removeItem('token'); 
      } finally {
        // ESTO ES CLAVE: Se ejecuta siempre, asegurando que isLoading sea FALSE
        setIsLoading(false);
      }
    };
    
    // Llamar a la función
    checkAuth();
    
    // El arreglo de dependencias vacío asegura que se ejecute una sola vez al montar
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;