import React, { useState, useContext, useEffect } from 'react';
import * as Styled from './style';

import { HeaderContext } from '../../contexts/headerContext';
import { LoginContext } from '../../contexts/loginContext';

import inactiveMovies from '../../assets/Images/moviesGray.png';
import inactiveSeries from '../../assets/Images/seriesGray.png';

import activeMovies from '../../assets/Images/moviesColored.png';
import activeSeries from '../../assets/Images/seriesColored.png';

import { BodyScreen } from '../../components/StyledComponents/GlobalStyleds';

import { ContainerTop } from './components/ContainerTop';
import { ContainerBottom } from './components/ContainerBottom';

import { instance } from '../../services/api';

export const UserPerfil = () => {
    const [activeButton, setActiveButton] = useState(0);
    const [rateQuantityMovies, setRateQuantityMovies] = useState(0);
    const [rateQuantitySeries, setRateQuantitySeries] = useState(0);
    const [loading, setloading] = useState(true);

    const [dataAvaliationFilms, setDataAvaliationFilms] = useState([]);
    const [dataFavoritesSeries, setDataFavoritesSeries] = useState([]);
    const [dataAvaliationSeries, setDataAvaliationSeries] = useState([]);
    const [dataFavoritesMovies, setDataFavoritesMovies] = useState([]);

    const { userInfos } = useContext(HeaderContext);
    const { sessionId } = useContext(LoginContext);

    const requestMoviesRated = () => {
        instance
            .get(
                `account/${userInfos?.id}/rated/movies?session_id=${sessionId}`,
            )
            .then(resp => {
                setRateQuantityMovies(resp?.data?.total_results);
                setDataAvaliationFilms(resp?.data?.results);
            });
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
        requestMoviesRated();
        requestSeriesRated();
        requestSeriesFavorite();
        requestMoviesFavorite();
        setTimeout(() => setloading(false), 1000);
    }, []);

    return (
        <BodyScreen>
            <ContainerTop
                userInfos={userInfos}
                rateQuantityMovies={rateQuantityMovies}
                rateQuantitySeries={rateQuantitySeries}
                activeButton={activeButton}
                loading={loading}
            />
            <Styled.ContainerMid>
                <Styled.ButtonMenu
                    onPress={() => setActiveButton(0)}
                    disabled={activeButton === 0 ? true : false}
                    sizeRight={activeButton === 0 ? 1 : 0}
                >
                    <Styled.ImageButton
                        source={
                            activeButton === 0 ? activeMovies : inactiveMovies
                        }
                    />
                </Styled.ButtonMenu>
                <Styled.ButtonMenu
                    onPress={() => setActiveButton(1)}
                    disabled={activeButton === 1 ? true : false}
                    sizeLeft={activeButton === 1 ? 1 : 0}
                >
                    <Styled.ImageButton
                        source={
                            activeButton === 1 ? activeSeries : inactiveSeries
                        }
                    />
                </Styled.ButtonMenu>
            </Styled.ContainerMid>
            <ContainerBottom
                activeButton={activeButton}
                dataAvaliationFilms={dataAvaliationFilms}
                dataAvaliationSeries={dataAvaliationSeries}
                dataFavoritesSeries={dataFavoritesSeries}
                dataFavoritesMovies={dataFavoritesMovies}
                loading={loading}
            />
        </BodyScreen>
    );
};
