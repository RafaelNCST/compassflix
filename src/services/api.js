import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export const apiKey = 'ef2d0d64c1c99393d6c811e4eca2ba6c';