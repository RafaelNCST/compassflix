import React, { useContext, useEffect } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { ListHomeContext } from '../../contexts/listHomeContext';
import * as Styled from './style.js';
import { LoginContext } from '../../contexts/loginContext';

import anonimo from '../../assets/Images/imagemAnonima.jpg';
import { styles } from './style';

export const HeaderUserInfos = () => {
    const { sessionId } = useContext(LoginContext);
    // prettier-ignore
    const { getRequestInfosUser, userInfos, strTitle } = useContext(ListHomeContext);

    useEffect(() => {
        if (sessionId) {
            getRequestInfosUser(sessionId);
        }
    }, [sessionId]);

    return (
        <>
            <Styled.containerImageUser>
                <Styled.imageUser
                    source={userInfos?.avatar?.tmdb?.avatar_path || anonimo}
                />
            </Styled.containerImageUser>
            <Styled.bodyScreenName>
                {'Olá,  '}
                <Styled.ScreenNameUserInfo>
                    {userInfos?.name || userInfos?.username}
                </Styled.ScreenNameUserInfo>
                !
            </Styled.bodyScreenName>
            <Styled.bodyScreenSubtitle>
                Reveja ou acompanhe {strTitle.toLowerCase()} que você
                assistiu...
            </Styled.bodyScreenSubtitle>
            <Styled.bodyScreenPopularMovies>
                {strTitle.substring(3)} populares este mês
            </Styled.bodyScreenPopularMovies>
        </>
    );
};
