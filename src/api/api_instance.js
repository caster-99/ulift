import axios from "axios";

const instance = axios.create({
  baseURL: "https://ulift-backend-production.up.railway.app/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
