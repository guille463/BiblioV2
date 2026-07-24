import axios from "axios";
import { ApiError } from "./ApiError";

/**
 * Cliente HTTP base. baseURL sale de VITE_API_URL.
 */
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:4000",
});

/**
 * Interceptor de respuesta: convierte cualquier fallo en ApiError.
 */
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Cancelacion
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    // El servidor responde con un status de error
    if (error.response) {
      const { status, data } = error.response;
      return Promise.reject(
        new ApiError(data?.error ?? "Error del servidor", { status }),
      );
    }

    // La peticion salio pero no hay respuesta
    if (error.request) {
      return Promise.reject(
        new ApiError("No se pudo conectar con el servidor", {
          isNetworkError: true,
        }),
      );
    }

    // Error al construir la peticion
    return Promise.reject(new ApiError(error.message ?? "Error inesperado"));
  },
);

export default axiosClient;
