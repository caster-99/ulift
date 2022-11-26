import axios from "axios";

//const url="https://ulift-backend-production.up.railway.app/api/";

const url = "http://localhost:3000/api/";
const instance = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
