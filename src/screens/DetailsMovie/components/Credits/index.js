import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import anonimo from '../../../../assets/Images/imagemAnonima.jpg';
import * as Styled from './style';
import { styles } from './style';

export const CreditsComponent = ({ cast }) => {
    return (
        <>
            <Styled.CastArea>
                <Styled.CastTitle>
                    <Styled.TextCast>Elenco</Styled.TextCast>
                </Styled.CastTitle>

                <Styled.SpaceCast />
            </Styled.CastArea>

            <Styled.Cast>
                <FlatList
                    data={cast}
                    contentContainerStyle={styles.listCredits}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        return (
                            <Styled.AreaItens>
                                <Styled.ImageActors>
                                    <Styled.ImagePerfilActors
                                        source={
                                            item?.profile_path
                                                ? {
                                                      uri: `https://image.tmdb.org/t/p/original${item?.profile_path}`,
                                                  }
                                                : anonimo
                                        }
                                    />
                                </Styled.ImageActors>
                                <Styled.Actor>
                                    <Styled.Name>{item?.name}</Styled.Name>
                                    <Styled.Character>
                                        {item?.character}
                                    </Styled.Character>
                                </Styled.Actor>
                            </Styled.AreaItens>
                        );
                    }}
                />
            </Styled.Cast>
        </>
    );
};
