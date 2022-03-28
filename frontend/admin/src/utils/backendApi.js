import axios from 'axios';
import { getToken, doLogout } from './useToken';

const backendApi = axios.create({
    baseURL: process.env && process.env.BASE_API_URL ? 
                process.env.BASE_API_URL : 
                'http://127.0.0.1:3000',
    timeout: 10000
});

// TODO: implementar refresh token
backendApi.interceptors.request.use(request => {
    const token = getToken();

    request.headers.Authentication = `Bearer ${token}`;

    return request;
});

backendApi.interceptors.response.use(response => response, error => {
    if (error?.response?.data?.message === 'Failed to authenticate token.') {
        const token = getToken();

        alert(`os guri tao chato: ${token}`);

        doLogout().then(() => {
            window.location.href = '/login';
        }).catch(() => {

        });
    }

    return error;
});

export default backendApi;