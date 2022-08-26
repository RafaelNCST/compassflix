import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Styled from './style';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export const ItensList = memo(({ listItens, noteItens, idItens }) => {
    const Navigation = useNavigation();

    return (
        <Styled.ImagePopularMovies
            onPress={() => Navigation.navigate('DetailScreen', { idItens })}
        >
            <Styled.ImageContainer>
                <Styled.ImagePoster
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${listItens}`,
                    }}
                />
            </Styled.ImageContainer>
            <Styled.SubContainerPopularMovies>
                <Icon color={'#ec2626'} name='star' size={13.5} />
                <Styled.TextPopularMovies>
                    {noteItens}/10
                </Styled.TextPopularMovies>
            </Styled.SubContainerPopularMovies>
        </Styled.ImagePopularMovies>
    );
});

ItensList.displayName = 'ItensList';
