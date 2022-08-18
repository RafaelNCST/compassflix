import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import { instance } from '../../services/api';
import { ListHomeContext } from '../../contexts/listHomeContext';

import { ListHome } from '../../components/FlatListHome';
import { HeaderUserInfos } from '../../components/HeaderUserInfos';

import { styles } from './style';

export const HomeMovies = () => {
    const [filmeList, setFilmeList] = useState([]);
    const {
        changeInfiniteScrollLoading,
        loadingScroll,
        changeLoadingPage,
        lastPage,
        changeTitleName,
    } = useContext(ListHomeContext);

    const requestMovieListFilms = async () => {
        await instance
            .get(`movie/popular?&language=pt-BR&page=${lastPage}`)
            .then(resp => {
                setFilmeList([...filmeList, ...resp.data.results]);
                changeLoadingPage(false);
            })
            .finally(() => changeInfiniteScrollLoading(false));
    };

    useEffect(() => {
        requestMovieListFilms();
        changeTitleName('os Filmes');
    }, []);

    useEffect(() => {
        if (loadingScroll) setTimeout(() => requestMovieListFilms(), 2000);
    }, [lastPage]);

    return (
        <View style={styles.bodyScreen}>
            <HeaderUserInfos />
            <ListHome data={filmeList} />
        </View>
    );
};
