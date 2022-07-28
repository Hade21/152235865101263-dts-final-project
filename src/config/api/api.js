import axios from "axios";

export const api = axios.create({
  baseURL: "https://laravel-books-db.herokuapp.com/api",
  timeout: 5000,
});
