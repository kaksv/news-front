import axios from "axios";

const httpClient = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: 'https://news-back-mcl1-i5xd1jkkf-kakooza-vianeys-projects.vercel.app',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default httpClient;