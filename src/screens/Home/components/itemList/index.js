import React from "react"
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style'
import { useNavigation } from "@react-navigation/native";
export const ItensList = ({ listaDeFilmes, notaDosFilmes }) => {

    const Navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => Navigation.navigate('DetailScreen')} style={styles.imagePopularMovies}>
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
        </TouchableOpacity>
    )
}