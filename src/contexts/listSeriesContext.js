import React, { createContext, useState } from 'react';
import { instance } from '../services/api';

export const ListSeriesContext = createContext();

export const ListSeriesContextProvider = ({ children }) => {
    const [seriesList, setSeriesList] = useState([]);
    const [loadingSeries, setLoadingSeries] = useState(true);
    const [loadingScrollSeries, setLoadingScrollSeries] = useState(false);
    const [lastPageSeries, setLastPageSeries] = useState(1);
    const [serieStates, setSerieStates] = useState({});

    const requestTvListSeries = async () => {
        await instance
            .get(`tv/popular?&language=pt-BR&page=${lastPageSeries}`)
            .then(resp => {
                setSeriesList([...seriesList, ...resp.data.results]);
                setLoadingSeries(false);
            })
            .finally(() => setLoadingScrollSeries(false));
    };

    const loadInfiniteScrollSeries = () => {
        if (loadingScrollSeries) return null;
        setLoadingScrollSeries(true);
        setLastPageSeries(prev => prev + 1);
    };

    return (
        <ListSeriesContext.Provider
            value={{
                loadInfiniteScrollSeries,
                loadingScrollSeries,
                loadingSeries,
                requestTvListSeries,
                seriesList,
                lastPageSeries,
                serieStates,
                setSerieStates,
            }}
        >
            {children}
        </ListSeriesContext.Provider>
    );
};
