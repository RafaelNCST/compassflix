import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './styles';

export const Item = ({ image, name, character }) => {
    return (
        <View style={styles.areaItens}>
            <View style={styles.imageActors}>
                <Image source={image} />
            </View>
            <View style={styles.actor}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.character}>{character}</Text>
            </View>
        </View>

    )


}
