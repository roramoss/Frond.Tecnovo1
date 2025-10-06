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
                // Si NO hay token, terminamos la carga inmediatamente.
                setIsLoading(false); 
                return; // Salimos de la función
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                // Intentamos validar el token con el backend
                const { data } = await axiosClient.get('/users/me', config);
                setAuth(data);
            } catch (error) {
                // Si la validación falla (token inválido/expirado), limpiamos todo.
                setAuth({});
                localStorage.removeItem('token'); 
            } finally {
                // La carga finaliza SÍ O SÍ después del intento (try o catch).
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []); // El array vacío asegura que se ejecute solo al montar el componente.

    return (
        <AuthContext.Provider value={{ auth, setAuth, isLoading, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;