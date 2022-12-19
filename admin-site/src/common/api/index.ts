import axios from "axios";

const host = process.env.HOST_API;
const port = process.env.PORT_API;
const endpoint = process.env.ENDPOINT_API;

// const link = `http://${host}:${port}/${endpoint}`;
const link = `http://localhost:8080/api`;
const token = localStorage.getItem("accessToken") === undefined ? localStorage.setItem("accessToken", "") : localStorage.getItem("accessToken");

const api = axios.create({
    baseURL: link,
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export default api;