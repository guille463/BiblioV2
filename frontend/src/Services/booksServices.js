import axiosClient from "../Api/axiosClient.js";

export const booksServices = {
  getAll: () => axiosClient.get("/books"),
  getById: (id) => axiosClient.get(`/books/${id}`),
  getBookByName: (title) => axiosClient.get(`/books/title/${title}`),
  createBook: (data) => axiosClient.post("/books", data),
  updateBook: (id, data) => axiosClient.put(`/books/${id}`, data),
  removeBook: (id) => axiosClient.delete(`/books/${id}`),
  purchaseBook: (title) => axiosClient.get(`/books/buy/${title}`),
};
