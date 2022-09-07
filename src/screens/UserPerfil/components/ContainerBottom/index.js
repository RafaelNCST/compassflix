import React, { useContext } from 'react';

import { HeaderContext } from '../../../../contexts/headerContext';

import * as Styled from './style';

import { TouchableOpacity } from 'react-native';
import { TextInfos } from '../../../../components/StyledComponents/GlobalStyleds';

import { SpinnerStick } from '../../../../components/SpinnerStick';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
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
    NavigationBlankData,
    OpenPageAvaliation,
    OpenPageFavorites,
}) => {
    const { userInfos } = useContext(HeaderContext);

    return (
        <Styled.ContainerBottom>
            <Styled.ContainerData flex={3}>
                <Styled.ContainerWords>
                    <TextInfos
                        color={'#FFFFFF'}
                        fontFamily={'OpenSans-SemiBold'}
                    >
                        {activeButton === 0 ? Title2Movies : Title2Series}
                        <TextInfos
                            color={'#FFFFFF'}
                            fontFamily={'OpenSans-SemiBold'}
                        >
                            {userInfos?.name || userInfos?.username}
                        </TextInfos>
                    </TextInfos>
                    <TouchableOpacity
                        accessibilityHint='botão ver mais favoritos'
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
                        {Array(4)
                            .fill()
                            .map((_, index) => index + 1)
                            .map((_, index) => {
                                return (
                                    <Styled.ImageContainer key={index}>
                                        {(
                                            activeButton === 0
                                                ? dataFavoritesMovies[index]
                                                      ?.poster_path
                                                : dataFavoritesSeries[index]
                                                      ?.poster_path
                                        ) ? (
                                            <Styled.ImageFavorites
                                                accessibilityHint='Imagem Favorito'
                                                source={{
                                                    uri: `https://image.tmdb.org/t/p/original${
                                                        activeButton === 0
                                                            ? dataFavoritesMovies[
                                                                  index
                                                              ]?.poster_path
                                                            : dataFavoritesSeries[
                                                                  index
                                                              ]?.poster_path
                                                    }`,
                                                }}
                                            />
                                        ) : (
                                            <Styled.IconContainerFavorites
                                                testID='ButtonAddFavorites'
                                                onPress={() =>
                                                    NavigationBlankData()
                                                }
                                            >
                                                <Icon
                                                    name='add-box'
                                                    size={40}
                                                    color='#FFFFFF'
                                                />
                                            </Styled.IconContainerFavorites>
                                        )}
                                    </Styled.ImageContainer>
                                );
                            })}
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
                        accessibilityHint='botão ver mais avaliados'
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
                        {Array(5)
                            .fill()
                            .map((_, index) => index + 1)
                            .map((_, index) => {
                                return (
                                    <Styled.ContainerAvaliationData key={index}>
                                        {(
                                            activeButton === 0
                                                ? dataAvaliationFilms[index]
                                                      ?.poster_path
                                                : dataAvaliationSeries[index]
                                                      ?.poster_path
                                        ) ? (
                                            <>
                                                <Styled.ImageAvaliation
                                                    accessibilityHint='Imagem Avaliado'
                                                    source={{
                                                        uri: `https://image.tmdb.org/t/p/original${
                                                            activeButton === 0
                                                                ? dataAvaliationFilms[
                                                                      index
                                                                  ]?.poster_path
                                                                : dataAvaliationSeries[
                                                                      index
                                                                  ]?.poster_path
                                                        }`,
                                                    }}
                                                />
                                                <Styled.ContainerInfosData>
                                                    <Icon
                                                        accessibilityHint='Icone Estrela'
                                                        color={'#ec2626'}
                                                        name='star'
                                                        size={13.5}
                                                    />
                                                    <Styled.ContainerInfosDataText>
                                                        {activeButton === 0
                                                            ? dataAvaliationFilms[
                                                                  index
                                                              ]?.rating
                                                            : dataAvaliationSeries[
                                                                  index
                                                              ]?.rating}
                                                        /10
                                                    </Styled.ContainerInfosDataText>
                                                </Styled.ContainerInfosData>
                                            </>
                                        ) : (
                                            <Styled.IconContainerAvaliation
                                                testID='buttonAddAvaliation'
                                                onPress={() =>
                                                    NavigationBlankData()
                                                }
                                            >
                                                <Icon
                                                    name='add-box'
                                                    size={40}
                                                    color='#FFFFFF'
                                                />
                                            </Styled.IconContainerAvaliation>
                                        )}
                                    </Styled.ContainerAvaliationData>
                                );
                            })}
                    </Styled.ListData>
                )}
            </Styled.ContainerData>
            <Styled.BlankSpaceFooter />
        </Styled.ContainerBottom>
    );
};
