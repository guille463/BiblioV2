import axiosClient from "../Api/axiosClient";

export const booksServices = {
  getAll: () => axiosClient.get("/books"),
  getById: (id) => axiosClient.get(`/books/${id}`),
  createBook: (data) => axiosClient.post("/books", data),
  updateBook: (id, data) => axiosClient.put(`/books/${id}`, data),
  removeBook: (id) => axiosClient.delete(`/books/${id}`),
};
