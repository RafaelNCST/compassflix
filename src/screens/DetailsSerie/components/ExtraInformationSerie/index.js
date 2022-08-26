import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles'
import { genresColors } from '../../../../helpers/genresObj';

export const ExtraInformatinSerie = ( {imageMovie, titleMovie, setExtraInformation, genres}) => {
    return(

        <View style={styles.modalScreens}>
            <View style={styles.modalArea}>
                <View style={styles.iconeArea}>
                    <TouchableOpacity style={styles.iconeButton} onPress={() => setExtraInformation(false)}>
                        <Icon name='clear' size={20} color={'black'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.infoModal}>
                    <Image style={styles.imageModal} source={{ uri: `https://image.tmdb.org/t/p/original${imageMovie}` }} />
                    <Text style={styles.titleModal}>{titleMovie}</Text>
                </View>
            </View>
        </View>
    
    
        )}