import React, { useState, useContext, useEffect } from 'react';

import { HeaderContext } from '../../contexts/headerContext';
import { LoginContext } from '../../contexts/loginContext';
import { ListFilmsContext } from '../../contexts/listFilmsContext';
import { ListSeriesContext } from '../../contexts/listSeriesContext';

import { BodyScreen } from '../../components/StyledComponents/GlobalStyleds';

import { ContainerTop } from './components/ContainerTop';
import { ContainerMid } from './components/ContainerMid';
import { ContainerBottom } from './components/ContainerBottom';
import { requestMoviesRated } from './apis/moviesRequest';

import { instance } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import { logoutRequest } from './apis/logoutRequest';

export const UserPerfil = () => {
    const [activeButton, setActiveButton] = useState(0);
    const [rateQuantityMovies, setRateQuantityMovies] = useState(0);
    const [rateQuantitySeries, setRateQuantitySeries] = useState(0);
    const [loading, setloading] = useState(true);

    const [dataAvaliationFilms, setDataAvaliationFilms] = useState([]);
    const [dataFavoritesSeries, setDataFavoritesSeries] = useState([]);
    const [dataAvaliationSeries, setDataAvaliationSeries] = useState([]);
    const [dataFavoritesMovies, setDataFavoritesMovies] = useState([]);

    const Navigation = useNavigation();

    const { userInfos } = useContext(HeaderContext);
    const { sessionId } = useContext(LoginContext);
    const { movieStates } = useContext(ListFilmsContext);
    const { serieStates } = useContext(ListSeriesContext);

    const changeButtonsMid = number => {
        setActiveButton(number);
    };

    const requestMoviesRatedFn = async () => {
        let resp = await requestMoviesRated(userInfos, sessionId);
        setRateQuantityMovies(resp?.data?.total_results);
        setDataAvaliationFilms(resp?.data?.results);
    };

    const requestSeriesRated = () => {
        instance
            .get(`account/${userInfos?.id}/rated/tv?session_id=${sessionId}`)
            .then(resp => {
                setRateQuantitySeries(resp?.data?.total_results);
                setDataAvaliationSeries(resp?.data?.results);
            });
    };

    const requestSeriesFavorite = () => {
        instance
            .get(`account/${userInfos?.id}/favorite/tv?session_id=${sessionId}`)
            .then(resp => {
                setDataFavoritesSeries(resp?.data?.results);
            });
    };
    const requestMoviesFavorite = () => {
        instance
            .get(
                `account/${userInfos?.id}/favorite/movies?session_id=${sessionId}`,
            )
            .then(resp => {
                setDataFavoritesMovies(resp?.data?.results);
            });
    };

    useEffect(() => {
        requestMoviesRatedFn();
        requestSeriesRated();
        requestSeriesFavorite();
        requestMoviesFavorite();
        setTimeout(() => setloading(false), 1000);
    }, [movieStates, serieStates]);

    return (
        <BodyScreen>
            <ContainerTop
                userInfos={userInfos}
                rateQuantityMovies={rateQuantityMovies}
                rateQuantitySeries={rateQuantitySeries}
                activeButton={activeButton}
                loading={loading}
                logoutApi={logoutRequest}
            />
            <ContainerMid
                activeButton={activeButton}
                onPress={changeButtonsMid}
            />
            <ContainerBottom
                activeButton={activeButton}
                dataAvaliationFilms={dataAvaliationFilms}
                dataAvaliationSeries={dataAvaliationSeries}
                dataFavoritesSeries={dataFavoritesSeries}
                dataFavoritesMovies={dataFavoritesMovies}
                loading={loading}
                Navigation={Navigation}
            />
        </BodyScreen>
    );
};
