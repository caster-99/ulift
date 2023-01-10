import axios from "axios";

const url = "https://ulift-backend.up.railway.app/api/";

//const url = "http://localhost:3000/api/";
const instance = axios.create({
  baseURL: url,
  timeout: 100000000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
