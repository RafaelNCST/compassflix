import React from 'react';

import * as Styled from './style';

import anonimo from '../../../../assets/Images/imagemAnonima.jpg';

import { TextInfos } from '../../../../components/StyledComponents/GlobalStyleds';
import { LogoutButton } from '../LogoutButton';

import { SpinnerStick } from '../../../../components/SpinnerStick';

export const ContainerTop = ({
    userInfos,
    rateQuantityMovies,
    rateQuantitySeries,
    activeButton,
    loading,
}) => {
    return (
        <Styled.ContainerTop>
            <LogoutButton />
            <Styled.ContainerUser heightContainer={110}>
                <Styled.ImageUser
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
            <Styled.ContainerUser heightContainer={50}>
                {loading ? (
                    <SpinnerStick />
                ) : (
                    <>
                        <Styled.TextTitle
                            paddingTop={15}
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
                    </>
                )}
            </Styled.ContainerUser>
        </Styled.ContainerTop>
    );
};
