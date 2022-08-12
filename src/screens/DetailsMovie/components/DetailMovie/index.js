import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style'

import { genresColors } from '../../../../helpers/genresObj';

export const DetailsMovieComponent = ({ Navigation, detail, visible, setVisible, directorArray }) => {

    const date = new Date(detail?.release_date)

    return (
        <>
            <View style={styles.posterArea} >
                <ImageBackground resizeMode='cover' style={styles.imagePoster} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.backdrop_path}` }} />
            </View>

            <TouchableOpacity style={styles.buttomBack} onPress={() => Navigation.goBack()} >
                <Icon name='arrow-back' size={30} color={'black'} />
            </TouchableOpacity>

            <Modal
                animationType='fade'
                visible={visible}
                transparent={true}
            >
                <View style={styles.modalScreens}>
                    <View style={styles.modalArea}>
                        <View style={styles.iconeArea}>
                            <TouchableOpacity style={styles.iconeButton} onPress={() => setVisible(false)}>
                                <Icon name='clear' size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infoModal}>
                            <Image style={styles.imageModal} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.poster_path}` }} />
                            <Text style={styles.titleModal}>{detail?.original_title}</Text>
                            <View style={styles.genresContainer}>
                                {detail?.genres.map((item, index) => (
                                    <View key={index} style={[styles.genresArea, { backgroundColor: genresColors[item?.name], borderRadius: 15 }]}>
                                        <Text style={styles.genresText}>{(item?.name).length > 8 ? (item?.name).substring(0, 8) + '.' : (item?.name)}</Text>
                                    </View>
                                )
                                )}
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>


            <View style={styles.perfilArea}>
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <Image style={styles.imagePerfil} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.poster_path}` }} />
                </TouchableOpacity>
                <View style={styles.infoArea}>
                    <View style={styles.titleArea}>
                        <View style={styles.containerNameAndYear}>
                            <Text style={styles.textTitle}>{(detail?.original_title).length > 10 ? (detail?.original_title).substring(0, 10) + '...' : detail?.original_title}</Text>
                            <Text style={styles.textAno}>{date.getFullYear()}</Text>
                        </View>
                        <Text style={styles.textDuration}>{detail?.runtime}min</Text>
                    </View>
                    <Text style={styles.textDirector}>Direção por <Text style={styles.stroke}>{directorArray.find(item => item.job === 'Director').name}</Text></Text>
                    <View style={styles.notesArea}>
                        <Text style={styles.textNote}>{(detail?.vote_average).toFixed(1)}/10</Text>
                        <View style={styles.bottomLike}>
                            <TouchableOpacity>
                                <Icon name="favorite" size={25} color={"red"} />
                            </TouchableOpacity>
                            <Text style={styles.likesQtd}>{detail?.popularity > 1000 ? Math.floor(detail?.popularity / 1000) + 'K' : (detail?.popularity).toFixed(0)}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.areaDescription}>
                <ScrollView style={styles.scrollDescription}>
                    <Text style={styles.tagline}>{(detail?.tagline).toUpperCase() || detail?.title}</Text>
                    <Text style={styles.textDescription}>
                        {(detail?.overview).toString() || "Descrição indisponível"}
                    </Text>
                </ScrollView>
            </View>
        </>
    )
}
