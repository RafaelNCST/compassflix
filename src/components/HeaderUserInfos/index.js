import React, { useContext, useEffect } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { ListHomeContext } from '../../contexts/listHomeContext';

import { LoginContext } from '../../contexts/loginContext';

import anonimo from '../../assets/Images/imagemAnonima.jpg';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export const HeaderUserInfos = () => {
    const { sessionId } = useContext(LoginContext);

    const Navigation = useNavigation();

    // prettier-ignore
    const { getRequestInfosUser, userInfos, strTitle } = useContext(ListHomeContext);

    useEffect(() => {
        if (sessionId) {
            getRequestInfosUser(sessionId);
        }
    }, [sessionId]);

    return (
        <>
            <TouchableOpacity
                onPress={() => Navigation.navigate('UserPerfil')}
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
            </TouchableOpacity>
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
