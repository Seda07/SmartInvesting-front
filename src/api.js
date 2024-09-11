// src/api.js
import axios from "axios";
import { REGISTER_URL } from "./url";  // Importamos la URL de registro

// Crear una instancia de Axios con una baseURL
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',  // Asegúrate de que esta es la URL base correcta
});

// Interceptor de solicitud para agregar headers
api.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json";
        const token = localStorage.getItem("ACCESS_TOKEN");  // Si tienes un token de acceso
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Función para registrar usuarios usando la URL desde url.js
export const registerUser = async (userData) => {
    try {
        const response = await api.post(REGISTER_URL, userData);  // Usamos REGISTER_URL de url.js
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

export default api;
