import React, { useContext, useEffect } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { HeaderContext } from '../../contexts/headerContext';
import * as Styled from './style';
import { LoginContext } from '../../contexts/loginContext';

import anonimo from '../../assets/Images/imagemAnonima.jpg';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export const HeaderUserInfos = ({ strTitle }) => {
    const { sessionId } = useContext(LoginContext);

    const Navigation = useNavigation();

    // prettier-ignore
    const { getRequestInfosUser, userInfos } = useContext(HeaderContext);

    useEffect(() => {
        if (sessionId) {
            getRequestInfosUser(sessionId);
        }
    }, [sessionId]);

    return (
        <>
            <Styled.ContainerImageUser
                onPress={() => Navigation.navigate('StackUser')}
            >
                <Styled.ImageUser
                    source={
                        userInfos.avatar?.tmdb?.avatar_path
                            ? {
                                  uri: `https://image.tmdb.org/t/p/original${userInfos?.avatar?.tmdb?.avatar_path}`,
                              }
                            : anonimo
                    }
                />
            </Styled.ContainerImageUser>
            <Styled.BodyScreenName>
                {'Olá,  '}
                <Styled.ScreenNameUserInfo>
                    {userInfos?.name || userInfos?.username}
                </Styled.ScreenNameUserInfo>
                !
            </Styled.BodyScreenName>
            <Styled.BodyScreenSubtitle>
                Reveja ou acompanhe {strTitle?.toLowerCase()} que você
                assistiu...
            </Styled.BodyScreenSubtitle>
            <Styled.BodyScreenPopularMovies>
                {strTitle?.substring(3)} populares este mês
            </Styled.BodyScreenPopularMovies>
        </>
    );
};
