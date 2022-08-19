import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '090a96215f584f0a3446f35d0f42d8aa'
    }
})
