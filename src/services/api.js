import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '7c0036ac35a24301fdce3cc4d88a56bb',
    },
});
