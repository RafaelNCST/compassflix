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

            <View style={styles.cast}>
                <FlatList
                    data={cast}
                    contentContainerStyle={styles.listCredits}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.areaItens}>
                                <View style={styles.imageActors}>
                                    <Image
                                        style={styles.imagePerfilActors}
                                        source={
                                            item?.profile_path
                                                ? {
                                                      uri: `https://image.tmdb.org/t/p/original${item?.profile_path}`,
                                                  }
                                                : anonimo
                                        }
                                    />
                                </View>
                                <View style={styles.actor}>
                                    <Text style={styles.name}>
                                        {item?.name}
                                    </Text>
                                    <Text style={styles.character}>
                                        {item?.character}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </>
    );
};
