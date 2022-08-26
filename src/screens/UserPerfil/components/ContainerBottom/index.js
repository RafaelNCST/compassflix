import React, { useState, useContext } from 'react';

import { HeaderContext } from '../../../../contexts/headerContext';

import * as Styled from './style';

import { TouchableOpacity, View } from 'react-native';
import { TextInfos } from '../../../../components/StyledComponents/GlobalStyleds';

import { useNavigation } from '@react-navigation/native';

import { SpinnerStick } from '../../../../components/SpinnerStick';

export const ContainerBottom = ({
    activeButton,
    dataAvaliationFilms,
    dataFavoritesMovies,
    dataAvaliationSeries,
    dataFavoritesSeries,
    loading,
}) => {
    const Navigation = useNavigation();
    const blankDataFavorite = () => {
        if (activeButton === 0) {
            return dataFavoritesMovies;
        } else {
            return dataFavoritesSeries;
        }
    };
    const blankDataAvaliation = () => {
        if (activeButton === 0) {
            return dataAvaliationFilms;
        } else {
            return dataAvaliationSeries;
        }
    };

    const { userInfos } = useContext(HeaderContext);

    const Title1Movies = 'Avaliações de filmes recentes de ';
    const Title2Movies = 'Filmes favoritos de ';
    const Title1Series = 'Avaliações de séries recentes de ';
    const Title2Series = 'Séries favoritas de ';

    const OpenPageAvaliation = () => {
        Navigation.navigate('PageSeeMoreScreen', {
            Title: activeButton === 0 ? Title1Movies : Title1Series,
            type: activeButton === 0 ? 0 : 1,
        });
    };

    const OpenPageFavorites = () => {
        Navigation.navigate('PageSeeMoreScreen', {
            Title: activeButton === 0 ? Title2Movies : Title2Series,
            type: activeButton === 0 ? 2 : 3,
        });
    };

    return (
        <Styled.ContainerBottom>
            <Styled.ContainerData flex={3}>
                <Styled.ContainerWords>
                    <TextInfos
                        color={'#FFFFFF'}
                        fontFamily={'OpenSans-SemiBold'}
                    >
                        {activeButton === 0 ? Title2Movies : Title2Series}
                        {userInfos?.name || userInfos?.username}
                    </TextInfos>
                    <TouchableOpacity onPress={() => OpenPageFavorites()}>
                        <TextInfos
                            color={'#E9A6A6'}
                            fontFamily={'OpenSans-SemiBold'}
                        >
                            Ver Mais
                        </TextInfos>
                    </TouchableOpacity>
                </Styled.ContainerWords>
                {loading ? (
                    <SpinnerStick />
                ) : (
                    <Styled.ListData>
                        {!blankDataFavorite() ? (
                            <Styled.Message>
                                <Styled.MessageText>
                                    Favorite agora!
                                </Styled.MessageText>
                            </Styled.Message>
                        ) : (
                            <>
                                {(activeButton === 0
                                    ? dataFavoritesMovies
                                    : dataFavoritesSeries
                                ).map((item, index) => {
                                    if (index > 3) return null;
                                    return (
                                        <Styled.ImageFavorites
                                            key={index}
                                            source={{
                                                uri: 'https://image.tmdb.org/t/p/original$%7Bitem.poster_path%7D',
                                            }}
                                        />
                                    );
                                })}
                            </>
                        )}
                    </Styled.ListData>
                )}
            </Styled.ContainerData>
            <Styled.ContainerData flex={3}>
                <Styled.ContainerWords>
                    <TextInfos
                        color={'#FFFFFF'}
                        fontFamily={'OpenSans-SemiBold'}
                    >
                        {activeButton === 0 ? Title1Movies : Title1Series}
                        {userInfos?.name || userInfos?.username}
                    </TextInfos>
                    <TouchableOpacity onPress={() => OpenPageAvaliation()}>
                        <TextInfos
                            color={'#E9A6A6'}
                            fontFamily={'OpenSans-SemiBold'}
                        >
                            Ver Mais
                        </TextInfos>
                    </TouchableOpacity>
                </Styled.ContainerWords>
                {loading ? (
                    <SpinnerStick />
                ) : (
                    <Styled.ListData>
                        {!blankDataAvaliation() ? (
                            <Styled.Message>
                                <Styled.MessageText>
                                    Avalie agora!
                                </Styled.MessageText>
                            </Styled.Message>
                        ) : (
                            <>
                                {(activeButton === 0
                                    ? dataAvaliationFilms
                                    : dataAvaliationSeries
                                ).map((item, index) => {
                                    if (index > 4) return null;
                                    return (
                                        <Styled.ImageAvaliation
                                            key={index}
                                            source={{
                                                uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                                            }}
                                        />
                                    );
                                })}
                            </>
                        )}
                    </Styled.ListData>
                )}
            </Styled.ContainerData>
            <Styled.BlankSpaceFooter />
        </Styled.ContainerBottom>
    );
};
