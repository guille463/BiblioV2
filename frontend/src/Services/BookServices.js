import axiosClient from "../Api/axiosClient.js";

export const BookServices = {
  //GET
  getAll: () => axiosClient.get("/books"),
  getById: (id) => axiosClient.get(`/books/${id}`),
  getBookByName: (title) => axiosClient.get(`/books/title/${title}`),
  //POST
  createBook: (data) => axiosClient.post("/books", data),
  //PUT
  updateBook: (id, data) => axiosClient.put(`/books/${id}`, data),
  purchaseBook: (id) => axiosClient.put(`/books/buy/${id}`),
  //DELETE
  removeBook: (id) => axiosClient.delete(`/books/${id}`),
};
