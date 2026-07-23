import axiosClient from "../api/axiosClient.js";

/**
 * Punto de acceso a la API. Cada método devuelve la respuesta completa
 * de axios; el consumidor extrae `data`.
 */
export const BookServices = {
  /**
   * @param {AxiosRequestConfig} [config] - Admite `signal` para cancelación.
   * @returns {Promise<AxiosResponse<Book[]>>}
   */
  getAll: (config) => axiosClient.get("/books", config),

  /**
   * Búsqueda por texto en título, autor, isbn o género.
   * @param {string} query
   * @param {AxiosRequestConfig} [config]
   * @returns {Promise<AxiosResponse<Book[]>>}
   */
  getBookbyInfo: (query, config) =>
    axiosClient.get("/books", { ...config, params: { search: query } }),

  /**
   * @param {string|number} id
   * @param {AxiosRequestConfig} [config]
   * @returns {Promise<AxiosResponse<Book>>}
   * @throws {ApiError} 404 si el libro no existe.
   */
  getById: (id, config) => axiosClient.get(`/books/${id}`, config),

  /**
   * @param {Omit<Book, 'id'>} data
   * @returns {Promise<AxiosResponse<Book>>}
   */
  createBook: (data) => axiosClient.post("/books", data),

  /**
   * Reemplaza todos los campos del libro.
   * @param {string|number} id
   * @param {Omit<Book, 'id'>} data
   * @returns {Promise<AxiosResponse<Book>>}
   */
  updateBook: (id, data) => axiosClient.put(`/books/${id}`, data),

  /**
   * Descuenta stock de un solo libro. Ruta separada de la compra por pedido.
   * @param {string|number} id
   * @param {number} [quantity=1]
   * @returns {Promise<AxiosResponse<Book>>}
   * @throws {ApiError} 409 si el stock es insuficiente.
   */
  purchaseBook: (id, quantity = 1) =>
    axiosClient.put(`/books/buy/${id}`, { quantity }),

  /**
   * @param {string|number} id
   * @returns {Promise<AxiosResponse<Book>>} El libro eliminado.
   */
  removeBook: (id) => axiosClient.delete(`/books/${id}`),

  /**
   * Crea un pedido transaccional con varias líneas.
   * @param {OrderItemPayload[]} items - Sin bookId duplicados.
   * @returns {Promise<AxiosResponse<{order: {id: number, created_at: string}, books: Book[]}>>}
   * @throws {ApiError} 400 validación | 404 libro inexistente | 409 stock insuficiente.
   */
  createOrder: (items) => axiosClient.post(`/order/`, { items }),
};
