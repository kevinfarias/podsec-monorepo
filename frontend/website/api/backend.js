import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
    timeout: 1000,
    headers: { 'Content-type': 'Application/json' }
})

export default api;