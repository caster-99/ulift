import axios from "axios";

const instance = axios.create({
  baseURL: "https://ulift-backend-production.up.railway.app/api/",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
