import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import anonimo from '../../../../assets/DetailMovies/imagemAnonima.jpg'

import { styles } from './style'

export const CreditsComponent = ({ cast }) => {

    return (
        <>
            <View style={styles.castArea}>
                <View style={styles.castTitle}>
                    <Text style={styles.textCast}>Elenco</Text>
                </View>

                <View style={styles.spaceCast} />
            </View>

            <View style={styles.cast}>
                <FlatList
                    data={cast}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.areaItens}>
                                <View style={styles.imageActors}>
                                    <Image style={styles.imagePerfilActors} source={item?.profile_path ? { uri: `https://image.tmdb.org/t/p/original${item?.profile_path}` } : anonimo} />
                                </View>
                                <View style={styles.actor}>
                                    <Text style={styles.name}>{item?.name}</Text>
                                    <Text style={styles.character}>{item?.character}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </>
    )


}
