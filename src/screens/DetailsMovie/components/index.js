import { View, Text, Image} from 'react-native';
import React from 'react';
import { styles } from './styles';
import anonimo from '../../../assets/DetailMovies/imagemAnonima.jpg'

export const Item = ({ image, name, character }) => {
    return (
        <View style={styles.areaItens}>
            <View style={styles.imageActors}>
                <Image style={styles.imagePerfilActors} source={ { uri: `https://image.tmdb.org/t/p/original${image}` }}/>
            </View>
            <View style={styles.actor}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.character}>{character}</Text>
            </View>
        </View>

    )


}
