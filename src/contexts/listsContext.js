import React from 'react';
import { createContext, useState } from 'react';
import { instance } from '../services/api';

export const ListsContext = createContext();

export const ListsContextProvider = ({ children }) => {
    const [listState, setListState] = useState(false);
    const [createLists, setCreateLists] = useState([]);
    const [loadingScroll, setLoadingScroll] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const [dataFilmsList, setDataFilmsList] = useState([]);

    const getLists = async (idUser, sessionID) => {
        await instance
            .get(
                `account/${idUser}/lists?session_id=${sessionID}&language=pt-BR&page=${page}`,
            )
            .then(resp => {
                setCreateLists(resp?.data?.results);
                setTotalPages(resp?.data?.total_pages);
                setLoading(false);
            })
            .finally(() => setLoadingScroll(false));
    };

    const deleteList = async (listID, sessionID) => {
        setListState(true);
        await instance
            .delete(`list/${listID}?session_id=${sessionID}`)
            .catch(error => console.log(error));
    };

    const handlerInfiniteScroll = () => {
        setLoadingScroll(true);
        setPage(prev => prev + 1);
    };

    return (
        <ListsContext.Provider
            value={{
                listState,
                getLists,
                createLists,
                handlerInfiniteScroll,
                loadingScroll,
                page,
                totalPages,
                deleteList,
                setListState,
                loading,
                dataFilmsList,
                setDataFilmsList,
            }}
        >
            {children}
        </ListsContext.Provider>
    );
};
