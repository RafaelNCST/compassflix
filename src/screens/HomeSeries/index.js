import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import { instance } from '../../services/api';
import { ListHomeContext } from '../../contexts/listHomeContext';

import { HeaderUserInfos } from '../../components/HeaderUserInfos';
import { ListHome } from '../../components/FlatListHome';
import { useRoute } from '@react-navigation/native';

import { styles } from './style';

export const HomeSeries = () => {
    const [seriesList, setSeriesList] = useState([]);
    const {
        changeInfiniteScrollLoading,
        loadingScroll,
        changeLoadingPage,
        lastPage,
    } = useContext(ListHomeContext);

    const route = useRoute();

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
    }, []);

    useEffect(() => {
        if (loadingScroll) setTimeout(() => requestMovieListFilms(), 2000);
    }, [lastPage]);

    return (
        <View style={styles.bodyScreen}>
            <HeaderUserInfos strTitle={route?.params?.strTitle} />
            <ListHome data={seriesList} />
        </View>
    );
};
