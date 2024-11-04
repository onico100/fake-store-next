import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api", // Use the base URL for Next.js API routes
  headers: {
    "Content-Type": "application/json",
  },
});

// Jewelry API
export const jewelryAPI = {
  getAll: () => apiClient.get("/jewelry"),
};
