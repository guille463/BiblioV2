import axiosClient from "../api/axiosClient.js";

export const BookServices = {
  //LIBROS
  //GET
  getAll: (signal) => axiosClient.get("/books", { signal }),
  getById: (id) => axiosClient.get(`/books/${id}`),
  getBookbyInfo: (data) => axiosClient.get(`/books/find/${data}`),
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
