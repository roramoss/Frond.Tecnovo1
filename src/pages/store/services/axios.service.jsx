import axios from "axios";




const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api/V1`,

    
    
});  

 
export default axiosClient;