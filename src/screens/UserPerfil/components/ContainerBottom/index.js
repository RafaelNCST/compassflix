import React, { useState, useContext } from 'react';

import { ListHomeContext } from '../../../../contexts/listHomeContext';

import * as Styled from './style';

import { TouchableOpacity } from 'react-native';
import { TextInfos } from '../../../../components/StyledComponents/GlobalStyleds';

import { useNavigation } from '@react-navigation/native';

import { SpinnerStick } from '../../../../components/SpinnerStick';

export const ContainerBottom = ({
    activeButton,
    dataAvaliationFilms,
    loading,
}) => {
    const Navigation = useNavigation();

    const { userInfos } = useContext(ListHomeContext);

    const [dataFavoritesFilms, setDataFavoritesFilms] = useState([
        { id: 0, image: require('../../../../assets/MocksUser/apartment.png') },
        { id: 1, image: require('../../../../assets/MocksUser/apartment.png') },
        { id: 2, image: require('../../../../assets/MocksUser/apartment.png') },
        { id: 3, image: require('../../../../assets/MocksUser/apartment.png') },
    ]);
    const [dataFavoritesSeries, setDataFavoritesSeries] = useState([
        {
            id: 0,
            image: require('../../../../assets/MocksUser/strangelove.png'),
        },
        {
            id: 1,
            image: require('../../../../assets/MocksUser/strangelove.png'),
        },
        {
            id: 2,
            image: require('../../../../assets/MocksUser/strangelove.png'),
        },
        {
            id: 3,
            image: require('../../../../assets/MocksUser/strangelove.png'),
        },
    ]);
    const [dataAvaliationSeries, setDataAvaliationSeries] = useState([
        {
            id: 0,
            image: require('../../../../assets/MocksUser/strangelove.png'),
        },
        {
            id: 1,
            image: require('../../../../assets/MocksUser/strangelove.png'),
        },
        {
            id: 2,
            image: require('../../../../assets/MocksUser/strangelove.png'),
        },
        {
            id: 3,
            image: require('../../../../assets/MocksUser/strangelove.png'),
        },
        {
            id: 4,
            image: require('../../../../assets/MocksUser/strangelove.png'),
        },
    ]);

    const Title1Movies = 'Avaliações de filmes recentes de';
    const Title2Movies = 'Filmes favoritos de';
    const Title1Series = 'Avaliações de séries recentes de';
    const Title2Series = 'Séries favoritas de';

    const OpenPageFavorites = () => {
        Navigation.navigate('PageSeeMoreScreen', {
            Title: activeButton === 0 ? Title1Movies : Title1Series,
        });
    };

    const OpenPageAvaliation = () => {
        Navigation.navigate('PageSeeMoreScreen', {
            Title: activeButton === 0 ? Title2Movies : Title2Series,
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
                        Filmes Favoritos de{' '}
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
                        {(activeButton === 0
                            ? dataFavoritesFilms
                            : dataFavoritesSeries
                        ).map((item, index) => (
                            <Styled.ImageFavorites
                                key={index}
                                source={item.image}
                            />
                        ))}
                    </Styled.ListData>
                )}
            </Styled.ContainerData>
            <Styled.ContainerData flex={3}>
                <Styled.ContainerWords>
                    <TextInfos
                        color={'#FFFFFF'}
                        fontFamily={'OpenSans-SemiBold'}
                    >
                        Avaliações de filmes recentes de{' '}
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
                        {(activeButton === 0
                            ? dataAvaliationFilms
                            : dataAvaliationSeries
                        ).map((item, index) => {
                            if (index === 4) null;
                            return (
                                <Styled.ImageAvaliation
                                    key={index}
                                    source={{
                                        uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                                    }}
                                />
                            );
                        })}
                    </Styled.ListData>
                )}
            </Styled.ContainerData>
            <Styled.BlankSpaceFooter />
        </Styled.ContainerBottom>
    );
};
