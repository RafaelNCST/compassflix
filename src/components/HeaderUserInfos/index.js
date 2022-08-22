import React, { useContext, useEffect } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { HeaderContext } from '../../contexts/headerContext';

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
            <TouchableOpacity
                onPress={() => Navigation.navigate('StackUser')}
                style={styles.containerImageUser}
            >
                <Image
                    style={styles.imageUser}
                    source={
                        {
                            uri: `https://image.tmdb.org/t/p/original${userInfos?.avatar?.tmdb?.avatar_path}`,
                        } || anonimo
                    }
                />
            </Styled.containerImageUser>
            <Styled.bodyScreenName>
                {'Olá,  '}
                <Styled.ScreenNameUserInfo>
                    {userInfos?.name || userInfos?.username}
                </Styled.ScreenNameUserInfo>
                !
            </Text>
            <Text style={styles.bodyScreenSubtitle}>
                Reveja ou acompanhe {strTitle?.toLowerCase()} que você
                assistiu...
            </Text>
            <Text style={styles.bodyScreenPopularMovies}>
                {strTitle?.substring(3)} populares este mês
            </Text>
        </>
    );
};
