import axios from "axios";

console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

const http = axios.create({
  baseURL: "https://backend-omega.onrender.com",
});

export default http;
