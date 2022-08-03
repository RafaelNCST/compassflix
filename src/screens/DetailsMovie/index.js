import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React from 'react';
import { styles } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PosterMovie } from '../../helpers/PosterMovie';
import { Cast } from '../../helpers/Cast';


export const DetailsMovie = () => {

    return (

        <View style={styles.bodyScreen}>
            <View style={styles.posterArea} >
                <ImageBackground resizeMode='contain' style={styles.imagePoster} source={PosterMovie.imagePoster} />
            </View>
            <View style={styles.perfilArea}>
                <Image source={PosterMovie.imagePerfil} />
                <View style={styles.infoArea}>
                    <View style={styles.titleArea}>
                        <Text style={styles.textTitle}> {PosterMovie.title}</Text>
                        <Text style={styles.textAno}> {PosterMovie.year} </Text>
                        <Text style={styles.textDuration}>{PosterMovie.duration} min</Text>
                        <View style={styles.areaDirector}>
                        <Text style={styles.textDirector}>Direção por {PosterMovie.director}</Text>
                        </View>
                    </View>
                    <View style={styles.notesArea}>
                        <Text style={styles.textNote}>{PosterMovie.note}</Text>
                        <Icon name="favorite" size={20} color="white" />
                    </View>
                </View>
            </View>
            <View style={styles.areaDescription}>
                <Text style={styles.textDescription}>
                    {PosterMovie.description}
                </Text>
            </View>
            <View style={styles.castArea}>
                <View style={styles.castTitle}>
                    <Text style={styles.textCast}>Elenco</Text>
                </View>
            </View>
        </View >

    )
}
