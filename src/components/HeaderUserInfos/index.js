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
                <Image
                    style={styles.imageUser}
                    source={userInfos?.avatar?.tmdb?.avatar_path || anonimo}
                />
            </Styled.containerImageUser>
            <Text style={styles.bodyScreenName}>
                {'Olá,  '}
                <Text style={{ color: '#e9a6a6' }}>
                    {userInfos?.name || userInfos?.username}
                </Text>
                !
            </Text>
            <Text style={styles.bodyScreenSubtitle}>
                Reveja ou acompanhe {strTitle.toLowerCase()} que você
                assistiu...
            </Text>
            <Text style={styles.bodyScreenPopularMovies}>
                {strTitle.substring(3)} populares este mês
            </Text>
        </>
    );
};
