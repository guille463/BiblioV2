import axiosClient from "../api/axiosClient.js";

export const BookServices = {
  //LIBROS
  //GET
  getAll: (config) => axiosClient.get("/books", config),
  getById: (id, config) => axiosClient.get(`/books/${id}`, config),
  getBookbyInfo: (query, config) =>
    axiosClient.get(`/books/find/${query}`, config),
  //getBookByName: (title) => axiosClient.get(`/books/title/${title}`),
  //POST
  createBook: (data) => axiosClient.post("/books", data),
  //PUT
  updateBook: (id, data) => axiosClient.put(`/books/${id}`, data),
  purchaseBook: (id, quantity = 1) =>
    axiosClient.put(`/books/buy/${id}`, { quantity }),
  //DELETE
  removeBook: (id) => axiosClient.delete(`/books/${id}`),

  //COMPRAS
  //POST
  createOrder: (items) => axiosClient.post(`/order/`, { items }),
};
