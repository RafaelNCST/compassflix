import React, { memo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Styled from './style';
import { useNavigation } from '@react-navigation/native';

export const ItensSeeMoreList = memo(
    ({ listItens, noteItens, idItens, typeNavigation }) => {
        const Navigation = useNavigation();

        return (
            <Styled.ButtonBody
                onPress={() =>
                    Navigation.navigate(typeNavigation(), { idItens })
                }
                paddingv={noteItens ? 15 : 10}
            >
                <Styled.ImageContainer>
                    <Styled.ImagePoster
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${listItens}`,
                        }}
                    />
                </Styled.ImageContainer>
                {noteItens && (
                    <Styled.SubContainerPopularMovies>
                        <Icon color='#EC2626' name='star' size={13.5} />
                        <Styled.TextPopularMovies>
                            {noteItens}/10
                        </Styled.TextPopularMovies>
                    </Styled.SubContainerPopularMovies>
                )}
            </Styled.ButtonBody>
        );
    },
);

ItensSeeMoreList.displayName = 'ItensSeeMoreList';
