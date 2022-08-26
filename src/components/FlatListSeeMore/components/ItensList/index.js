import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export const ItensSeeMoreList = memo(({ listItens, noteItens, idItens }) => {
    const Navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => Navigation.navigate('DetailUserMovie', { idItens })}
            style={styles.imagePopularMovies}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.imagePoster}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${listItens}`,
                    }}
                />
            </View>
            <View style={styles.subContainerPopularMovies}>
                <Icon
                    style={styles.iconPopularMovies}
                    name='star'
                    size={13.5}
                />
                <Text style={styles.textPopularMovies}>{noteItens}/10</Text>
            </View>
        </TouchableOpacity>
    );
});

ItensSeeMoreList.displayName = 'ItensSeeMoreList';
