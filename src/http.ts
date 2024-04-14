import axios from "axios";

console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

const http = axios.create({
  baseURL: "https://backend-production-27fa.up.railway.app/",
});

export default http;
