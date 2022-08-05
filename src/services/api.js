import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export const apiKey = 'abcdcf5aa5f8f1a18a22e9a7059da146';