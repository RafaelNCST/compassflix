import React from "react"
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style'
export const ItensList = ({ listaDeFilmes, notaDosFilmes }) => {
    return (
        <View style={styles.imagePopularMovies}>
            <Image
                source={listaDeFilmes}
            />
            <View style={styles.subContainerPopularMovies}>
                <Icon
                    style={styles.iconPopularMovies}
                    name="star"
                    size={20}
                />
                <Text
                    style={styles.textPopularMovies}>
                    {notaDosFilmes}
                </Text>
            </View>
        </View>
    )
}