import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import { instance } from '../../services/api';
import { ListHomeContext } from '../../contexts/listHomeContext';
import { BodyScreen } from './style';
import { HeaderUserInfos } from '../../components/HeaderUserInfos';
import { ListHome } from '../../components/FlatListHome';

import { styles } from './style';

export const HomeSeries = () => {
    const [seriesList, setSeriesList] = useState([]);
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
                setSeriesList([...seriesList, ...resp.data.results]);
                changeLoadingPage(false);
            })
            .finally(() => changeInfiniteScrollLoading(false));
    };

    useEffect(() => {
        requestMovieListFilms();
        changeTitleName('as Séries');
    }, []);

    useEffect(() => {
        if (loadingScroll) setTimeout(() => requestMovieListFilms(), 2000);
    }, [lastPage]);

    return (
        <BodyScreen>
            <HeaderUserInfos />
            <ListHome data={seriesList} />
        </BodyScreen>
    );
};
