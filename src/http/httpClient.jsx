import axios from "axios";

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // baseURL: "http://localhost:9999",
    // baseURL: 'https://news-back-2oth.vercel.app',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default httpClient;