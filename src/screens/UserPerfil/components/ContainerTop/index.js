import React from 'react';

import * as Styled from './style';

import anonimo from '../../../../assets/Images/imagemAnonima.jpg';

import { TextInfos } from '../../../../components/StyledComponents/GlobalStyleds';
import { LogoutButton } from '../LogoutButton';
import { useNavigation } from '@react-navigation/native';

import { SpinnerStick } from '../../../../components/SpinnerStick';

export const ContainerTop = ({
    userInfos,
    rateQuantityMovies,
    rateQuantitySeries,
    activeButton,
    loading,
    logoutApi,
    visible,
    setVisible,
    logoutLoading,
}) => {
    const Navigation = useNavigation();
    return (
        <Styled.ContainerTop>
            <LogoutButton
                logoutApi={logoutApi}
                visible={visible}
                setVisible={setVisible}
                logoutLoading={logoutLoading}
            />
            <Styled.ContainerUser heightContainer={110}>
                <Styled.ImageUser
                    accessibilityHint='Imagem de Usuário'
                    source={
                        userInfos?.avatar?.tmdb?.avatar_path
                            ? {
                                  uri: `https://image.tmdb.org/t/p/original${userInfos?.avatar?.tmdb?.avatar_path}`,
                              }
                            : anonimo
                    }
                />
                <Styled.TextTitle paddingTop={3} size={20} color={'#FFFFFF'}>
                    {userInfos?.name || userInfos?.username}
                </Styled.TextTitle>
            </Styled.ContainerUser>
            <Styled.ListButton
                onPress={() => Navigation.navigate('StackListRoutes')}
            >
                <Styled.TextFilms> Ver lista de filmes </Styled.TextFilms>
            </Styled.ListButton>
            <Styled.ContainerUser heightContainer={50}>
                {loading ? (
                    <SpinnerStick />
                ) : (
                    <Styled.ContainerQuantityInfos>
                        <Styled.TextTitle
                            paddingTop={5}
                            size={30}
                            color={'#9C4A8B'}
                        >
                            {activeButton === 0
                                ? rateQuantityMovies
                                : rateQuantitySeries}
                        </Styled.TextTitle>
                        <TextInfos
                            color={'#FFFFFF'}
                            fontFamily={'OpenSans-Regular'}
                        >
                            Avaliações
                        </TextInfos>
                    </Styled.ContainerQuantityInfos>
                )}
            </Styled.ContainerUser>
        </Styled.ContainerTop>
    );
};
