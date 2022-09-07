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
import { requestMoviesFavorite } from './apis/moviesRequest';
import { requestSeriesRated } from './apis/seriesRequest';
import { requestSeriesFavorite } from './apis/seriesRequest';

import {
    OpenPageAvaliation,
    OpenPageFavorites,
} from './components/ContainerBottom/helpers/titles';

import { useNavigation } from '@react-navigation/native';

import { logoutRequest } from './apis/logoutRequest';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserPerfil = () => {
    const [activeButton, setActiveButton] = useState(0);
    const [rateQuantityMovies, setRateQuantityMovies] = useState(0);
    const [rateQuantitySeries, setRateQuantitySeries] = useState(0);
    const [loading, setloading] = useState(true);

    const [dataAvaliationFilms, setDataAvaliationFilms] = useState([]);
    const [dataFavoritesSeries, setDataFavoritesSeries] = useState([]);
    const [dataAvaliationSeries, setDataAvaliationSeries] = useState([]);
    const [dataFavoritesMovies, setDataFavoritesMovies] = useState([]);

    const [visible, setVisible] = useState(false);
    const [logoutLoading, setLogouLoading] = useState(false);

    const Navigation = useNavigation();

    const { userInfos } = useContext(HeaderContext);
    const { sessionId, changeSessionID } = useContext(LoginContext);
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

    const requestMoviesFavoriteFn = async () => {
        let resp = await requestMoviesFavorite(userInfos?.id, sessionId);
        setDataFavoritesMovies(resp?.data?.results);
    };

    const requestSeriesFavoriteFn = async () => {
        let resp = await requestSeriesFavorite(userInfos?.id, sessionId);
        setDataFavoritesSeries(resp?.data?.results);
    };

    const requestSeriesRatedFn = async () => {
        let resp = await requestSeriesRated(userInfos?.id, sessionId);
        setRateQuantitySeries(resp?.data?.total_results);
        setDataAvaliationSeries(resp?.data?.results);
    };

    const LogoutResponse = async () => {
        setLogouLoading(true);
        let resp = await logoutRequest(sessionId);
        if (resp.data.success) {
            await AsyncStorage.removeItem('sessionId');
            changeSessionID(false, null);
        }
    };

    const NavigationBlankData = () => {
        if (activeButton === 0) {
            Navigation.navigate('StackFilms');
        } else {
            Navigation.navigate('StackSeries');
        }
    };

    useEffect(() => {
        requestMoviesRatedFn();
        requestSeriesRatedFn();
        requestSeriesFavoriteFn();
        requestMoviesFavoriteFn();
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
                logoutApi={LogoutResponse}
                visible={visible}
                setVisible={setVisible}
                logoutLoading={logoutLoading}
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
                NavigationBlankData={NavigationBlankData}
                OpenPageAvaliation={OpenPageAvaliation}
                OpenPageFavorites={OpenPageFavorites}
            />
        </BodyScreen>
    );
};
