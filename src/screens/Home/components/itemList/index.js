import React from "react"
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style'
import { useNavigation } from "@react-navigation/native";
export const ItensList = ({ listaDeFilmes, notaDosFilmes, idFilmes }) => {

    const Navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => Navigation.navigate('DetailScreen', { idFilmes })} style={styles.imagePopularMovies}>
            <View style={styles.imageContainer}>
                <Image
                    style={{ height: 95, width: 76, resizeMode: 'contain', borderRadius: 10 }}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${listaDeFilmes}` }}
                />
            </View>
            <View style={styles.subContainerPopularMovies}>
                <Icon
                    style={styles.iconPopularMovies}
                    name="star"
                    size={13.5}
                />
                <Text
                    style={styles.textPopularMovies}>
                    {notaDosFilmes}/10
                </Text>
            </View>
        </TouchableOpacity>
    )
}