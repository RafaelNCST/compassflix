import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export const apiKey = '7c0036ac35a24301fdce3cc4d88a56bb';