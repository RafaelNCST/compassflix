import React, { useContext } from 'react';

import { HeaderContext } from '../../../../contexts/headerContext';

import * as Styled from './style';

import { TouchableOpacity } from 'react-native';
import { TextInfos } from '../../../../components/StyledComponents/GlobalStyleds';

import { SpinnerStick } from '../../../../components/SpinnerStick';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    OpenPageAvaliation,
    OpenPageFavorites,
    Title1Movies,
    Title2Movies,
    Title1Series,
    Title2Series,
} from './helpers/titles';

export const ContainerBottom = ({
    activeButton,
    dataAvaliationFilms,
    dataFavoritesMovies,
    dataAvaliationSeries,
    dataFavoritesSeries,
    loading,
    Navigation,
}) => {
    const { userInfos } = useContext(HeaderContext);

    return (
        <Styled.ContainerBottom>
            <Styled.ContainerData flex={3}>
                <Styled.ContainerWords>
                    <TextInfos
                        color={'#FFFFFF'}
                        fontFamily={'OpenSans-SemiBold'}
                        testID='TitleText'
                    >
                        {activeButton === 0 ? Title2Movies : Title2Series}
                        {userInfos?.name || userInfos?.username}
                    </TextInfos>
                    <TouchableOpacity
                        onPress={() =>
                            OpenPageFavorites(activeButton, Navigation)
                        }
                    >
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
                            ? dataFavoritesMovies
                            : dataFavoritesSeries) == false ? (
                            <Styled.Message>
                                <Styled.MessageText>
                                    sem favoritos no momento!
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
            <Styled.ContainerData flex={3}>
                <Styled.ContainerWords>
                    <TextInfos
                        color={'#FFFFFF'}
                        fontFamily={'OpenSans-SemiBold'}
                        testID='TitleText'
                    >
                        {activeButton === 0 ? Title1Movies : Title1Series}
                        {userInfos?.name || userInfos?.username}
                    </TextInfos>
                    <TouchableOpacity
                        onPress={() =>
                            OpenPageAvaliation(activeButton, Navigation)
                        }
                    >
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
                            : dataAvaliationSeries) == false ? (
                            <Styled.Message>
                                <Styled.MessageText>
                                    Sem Avalições No momento!
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
                                        <Styled.ContainerAvaliationData
                                            key={index}
                                        >
                                            <Styled.ImageAvaliation
                                                source={{
                                                    uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                                                }}
                                            />
                                            <Styled.ContainerInfosData>
                                                <Icon
                                                    color={'#ec2626'}
                                                    name='star'
                                                    size={13.5}
                                                />
                                                <Styled.ContainerInfosDataText>
                                                    {item.rating}/10
                                                </Styled.ContainerInfosDataText>
                                            </Styled.ContainerInfosData>
                                        </Styled.ContainerAvaliationData>
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
