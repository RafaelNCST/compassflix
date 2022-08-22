import React, { createContext, useState } from 'react';
import { instance } from '../services/api';

export const ListSeeMoreContext = createContext();

export const ListSeeMoreContextProvider = ({ children }) => {
    const [arrayData, setArrayData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loadingScroll, setLoadingScroll] = useState(false);
    const [lastPage, setLastPage] = useState(1);
    const [loadingPage, setLoadingPage] = useState(true);

    const requestMoviesRated = (userId, sessionId, type, program) => {
        instance
            .get(`account/${userId}/${type}/${program}?session_id=${sessionId}`)
            .then(resp => {
                setArrayData([...arrayData, ...resp?.data?.results]);
            })
            .finally(() => setLoadingScroll(false));
    };

    const firstRunRequest = (userId, sessionId, type, program) => {
        setLoadingPage(true);
        instance
            .get(`account/${userId}/${type}/${program}?session_id=${sessionId}`)
            .then(resp => {
                setArrayData(resp?.data?.results);
                setTotalPages(resp?.data?.total_pages);
                setLoadingPage(false);
            });
    };

    const loadInfiniteScroll = () => {
        setLoadingScroll(true);
        setLastPage(prev => prev + 1);
    };

    return (
        <ListSeeMoreContext.Provider
            value={{
                loadInfiniteScroll,
                loadingScroll,
                lastPage,
                requestMoviesRated,
                arrayData,
                totalPages,
                firstRunRequest,
                loadingPage,
            }}
        >
            {children}
        </ListSeeMoreContext.Provider>
    );
};
