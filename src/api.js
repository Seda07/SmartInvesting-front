import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// Crear una instancia de Axios
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // URL base desde el archivo .env
});

// Interceptor de solicitud para agregar headers
api.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json";
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
