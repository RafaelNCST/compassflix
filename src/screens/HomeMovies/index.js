import React, { useEffect, useContext } from 'react';
import { ListHome } from '../../components/FlatListHome';
import { HeaderUserInfos } from '../../components/HeaderUserInfos';
import { BodyScreen } from './style';
import { ListFilmsContext } from '../../contexts/listFilmsContext';

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
        <BodyScreen>
            <HeaderUserInfos strTitle={route.params.strTitle} />
            <ListHome
                loading={loadingFilm}
                data={filmeList}
                infiniteScrollFn={loadInfiniteScrollFilm}
                loadingState={loadingScrollFilm}
            />
        </BodyScreen>
    );
};
