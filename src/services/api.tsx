import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});
