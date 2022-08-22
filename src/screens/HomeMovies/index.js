import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import { ListHome } from '../../components/FlatListHome';
import { HeaderUserInfos } from '../../components/HeaderUserInfos';

import { ListFilmsContext } from '../../contexts/listFilmsContext';

import { styles } from './style';

import { useRoute } from '@react-navigation/native';

export const HomeMovies = () => {
    const route = useRoute();

    //prettier-ignore
    const { 
        requestMovieListFilms, 
        loadingScrollFilm, 
        lastPageFilm,
        loadingFilm,
        filmeList,
        loadInfiniteScrollFilm,
    } = useContext(ListFilmsContext);

    useEffect(() => {
        requestMovieListFilms();
    }, []);

    useEffect(() => {
        if (loadingScrollFilm) setTimeout(() => requestMovieListFilms(), 2000);
    }, [lastPageFilm]);

    return (
        <View style={styles.bodyScreen}>
            <HeaderUserInfos strTitle={route.params.strTitle} />
            <ListHome
                loading={loadingFilm}
                data={filmeList}
                infiniteScrollFn={loadInfiniteScrollFilm}
                loadingState={loadingScrollFilm}
            />
        </View>
    );
};
