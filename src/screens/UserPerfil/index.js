import React, { useState, useContext } from 'react';
import * as Styled from './style';

import { ListHomeContext } from '../../contexts/listHomeContext';
import { TouchableOpacity } from 'react-native';

import inactiveMovies from '../../assets/Images/moviesGray.png';
import inactiveSeries from '../../assets/Images/seriesGray.png';

import activeMovies from '../../assets/Images/moviesColored.png';
import activeSeries from '../../assets/Images/seriesColored.png';

import { BodyScreen } from '../../components/StyledComponents/GlobalStyleds';
import { LogoutButton } from './components/LogoutButton';

import anonimo from '../../assets/Images/imagemAnonima.jpg';

export const UserPerfil = () => {
    const [activeButton, setActiveButton] = useState(0);

    const { userInfos } = useContext(ListHomeContext);

    const [dataFavoritesFilms, setDataFavoritesFilms] = useState([
        { id: 0, image: require('../../assets/MocksUser/apartment.png') },
        { id: 1, image: require('../../assets/MocksUser/apartment.png') },
        { id: 2, image: require('../../assets/MocksUser/apartment.png') },
        { id: 3, image: require('../../assets/MocksUser/apartment.png') },
    ]);
    const [dataAvaliationFilms, setDataAvaliationFilms] = useState([
        { id: 0, image: require('../../assets/MocksUser/apartment.png') },
        { id: 1, image: require('../../assets/MocksUser/apartment.png') },
        { id: 2, image: require('../../assets/MocksUser/apartment.png') },
        { id: 3, image: require('../../assets/MocksUser/apartment.png') },
        { id: 4, image: require('../../assets/MocksUser/apartment.png') },
    ]);
    const [dataFavoritesSeries, setDataFavoritesSeries] = useState([
        { id: 0, image: require('../../assets/MocksUser/strangelove.png') },
        { id: 1, image: require('../../assets/MocksUser/strangelove.png') },
        { id: 2, image: require('../../assets/MocksUser/strangelove.png') },
        { id: 3, image: require('../../assets/MocksUser/strangelove.png') },
    ]);
    const [dataAvaliationSeries, setDataAvaliationSeries] = useState([
        { id: 0, image: require('../../assets/MocksUser/strangelove.png') },
        { id: 1, image: require('../../assets/MocksUser/strangelove.png') },
        { id: 2, image: require('../../assets/MocksUser/strangelove.png') },
        { id: 3, image: require('../../assets/MocksUser/strangelove.png') },
        { id: 4, image: require('../../assets/MocksUser/strangelove.png') },
    ]);

    return (
        <BodyScreen>
            <Styled.ContainerTop>
                <LogoutButton />
                <Styled.ContainerUser heightContainer={110}>
                    <Styled.ImageUser
                        source={
                            {
                                uri: `https://image.tmdb.org/t/p/original${userInfos?.avatar?.tmdb?.avatar_path}`,
                            } || anonimo
                        }
                    />
                    <Styled.TextTitle
                        paddingTop={3}
                        size={20}
                        color={'#FFFFFF'}
                    >
                        {userInfos?.name || userInfos?.username}
                    </Styled.TextTitle>
                </Styled.ContainerUser>
                <Styled.ContainerUser heightContainer={50}>
                    <Styled.TextTitle
                        paddingTop={15}
                        size={30}
                        color={'#9C4A8B'}
                    >
                        30
                    </Styled.TextTitle>
                    <Styled.TextInfos
                        color={'#FFFFFF'}
                        fontFamily={'OpenSans-Regular'}
                    >
                        Avaliações
                    </Styled.TextInfos>
                </Styled.ContainerUser>
            </Styled.ContainerTop>
            <Styled.ContainerMid>
                <Styled.ButtonMenu
                    onPress={() => {
                        if (activeButton !== 0) setActiveButton(0);
                    }}
                    sizeLeft={0}
                    sizeRight={1}
                >
                    <Styled.ImageButton
                        source={
                            activeButton === 0 ? activeMovies : inactiveMovies
                        }
                    />
                </Styled.ButtonMenu>
                <Styled.ButtonMenu
                    onPress={() => {
                        if (activeButton !== 1) setActiveButton(1);
                    }}
                    sizeLeft={0}
                    sizeRight={0}
                >
                    <Styled.ImageButton
                        source={
                            activeButton === 1 ? activeSeries : inactiveSeries
                        }
                    />
                </Styled.ButtonMenu>
            </Styled.ContainerMid>
            <Styled.ContainerBottom>
                <Styled.ContainerData flex={3}>
                    <Styled.ContainerWords>
                        <Styled.TextInfos
                            color={'#FFFFFF'}
                            fontFamily={'OpenSans-SemiBold'}
                        >
                            Filmes Favoritos de John
                        </Styled.TextInfos>
                        <TouchableOpacity>
                            <Styled.TextInfos
                                color={'#E9A6A6'}
                                fontFamily={'OpenSans-SemiBold'}
                            >
                                Ver Mais
                            </Styled.TextInfos>
                        </TouchableOpacity>
                    </Styled.ContainerWords>
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
                </Styled.ContainerData>
                <Styled.ContainerData flex={3}>
                    <Styled.ContainerWords>
                        <Styled.TextInfos
                            color={'#FFFFFF'}
                            fontFamily={'OpenSans-SemiBold'}
                        >
                            Avaliações de filmes recentes de John
                        </Styled.TextInfos>
                        <TouchableOpacity>
                            <Styled.TextInfos
                                color={'#E9A6A6'}
                                fontFamily={'OpenSans-SemiBold'}
                            >
                                Ver Mais
                            </Styled.TextInfos>
                        </TouchableOpacity>
                    </Styled.ContainerWords>
                    <Styled.ListData>
                        {(activeButton === 0
                            ? dataAvaliationFilms
                            : dataAvaliationSeries
                        ).map((item, index) => (
                            <Styled.ImageAvaliation
                                key={index}
                                source={item.image}
                            />
                        ))}
                    </Styled.ListData>
                </Styled.ContainerData>
                <Styled.BlankSpaceFooter />
            </Styled.ContainerBottom>
        </BodyScreen>
    );
};
