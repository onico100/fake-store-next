import axios from "axios";

const BASE_URL = "/api/books";

export const bookService = {
  getAll: async () => await axios.get(BASE_URL),
  create: async (book: { title: string; author: string; imageUrl: string }) =>
    await axios.post(BASE_URL, book),
  update: async (book: {
    id: number;
    title: string;
    author: string;
    imageUrl: string;
  }) => await axios.put(BASE_URL, book),
  delete: async (id: number) => await axios.delete(BASE_URL, { data: { id } }),
};
