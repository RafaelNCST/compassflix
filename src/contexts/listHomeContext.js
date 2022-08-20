import React, { createContext, useState } from 'react';
import { instance } from '../services/api';

export const ListHomeContext = createContext();

export const ListHomeContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [loadingScroll, setLoadingScroll] = useState(false);
    const [lastPage, setLastPage] = useState(1);
    const [userInfos, setUserInfos] = useState({});

    const getRequestInfosUser = async id => {
        await instance
            .get(`account?&session_id=${id}`)
            .then(resp => {
                setUserInfos(resp?.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const loadInfiniteScroll = () => {
        if (loadingScroll) return null;
        setLoadingScroll(true);
        setLastPage(prev => prev + 1);
    };

    const changeInfiniteScrollLoading = state => {
        setLoadingScroll(state);
    };

    const changeLoadingPage = state => {
        setLoading(state);
    };

    return (
        <ListHomeContext.Provider
            value={{
                getRequestInfosUser,
                loadInfiniteScroll,
                changeInfiniteScrollLoading,
                loadingScroll,
                lastPage,
                changeLoadingPage,
                loading,
                userInfos,
            }}
        >
            {children}
        </ListHomeContext.Provider>
    );
};
