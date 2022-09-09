import React, { createContext, useState } from 'react';
import { instance } from '../services/api';

export const ListFilmsContext = createContext();

export const ListFilmsContextProvider = ({ children }) => {
    const [filmeList, setFilmeList] = useState([]);
    const [loadingFilm, setLoadingFilm] = useState(true);
    const [loadingScrollFilm, setLoadingScrollFilm] = useState(false);
    const [lastPageFilm, setLastPageFilm] = useState(1);
    const [movieStates, setMovieStates] = useState({});
    const [stateFilteredList, setStateFilteredList] = useState(false);

    const requestMovieListFilms = async () => {
        await instance
            .get(`movie/popular?&language=pt-BR&page=${lastPageFilm}`)
            .then(resp => {
                setFilmeList([...filmeList, ...resp.data.results]);
                setLoadingFilm(false);
            })
            .finally(() => setLoadingScrollFilm(false));
    };

    const loadInfiniteScrollFilm = () => {
        if (loadingScrollFilm) return null;
        setLoadingScrollFilm(true);
        setLastPageFilm(prev => prev + 1);
    };

    return (
        <ListFilmsContext.Provider
            value={{
                loadInfiniteScrollFilm,
                loadingScrollFilm,
                lastPageFilm,
                loadingFilm,
                requestMovieListFilms,
                filmeList,
                movieStates,
                setMovieStates,
                stateFilteredList,
                setStateFilteredList,
            }}
        >
            {children}
        </ListFilmsContext.Provider>
    );
};
