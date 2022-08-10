import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './style'

export const DetailsMovieComponent = ({ Navigation, detail, visible, setVisible }) => {

    const date = new Date(detail?.release_date)

    return (
        <>
            <View style={styles.posterArea} >
                <ImageBackground resizeMode='cover' style={styles.imagePoster} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.belongs_to_collection.backdrop_path}` }} />
            </View>

            <TouchableOpacity style={styles.buttomBack} onPress={() => Navigation.goBack()} >
                <Icon name='arrow-back' size={30} color={'black'} />
            </TouchableOpacity>

            <Modal
                animationType='fade'
                visible={visible}
                transparent={true}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '80%', height: 400, backgroundColor: '#1C2227', borderRadius: 10 }}>
                        <View style={{ width: '100%', height: 30, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setVisible(false)}><Text style={{ color: '#FFFF' }}>X</Text></TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                </View>
            </Modal>


            <View style={styles.perfilArea}>
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <Image style={styles.imagePerfil} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.belongs_to_collection.poster_path}` }} />
                </TouchableOpacity>
                <View style={styles.infoArea}>
                    <View style={styles.titleArea}>
                        <View style={styles.containerNameAndYear}>
                            <Text numberOfLines={1} style={styles.textTitle}>{detail?.original_title}</Text>
                            <Text style={styles.textAno}>{date.getFullYear()}</Text>
                        </View>
                        <Text style={styles.textDuration}>{detail?.runtime}min</Text>
                    </View>
                    <Text style={styles.textDirector}>Direção por <Text style={styles.stroke}>{detail?.production_companies[1].name}</Text></Text>
                    <View style={styles.notesArea}>
                        <Text style={styles.textNote}>{detail?.vote_average}/10</Text>
                        <View style={styles.bottomLike}>
                            <TouchableOpacity>
                                <Icon name="favorite" size={30} color={"red"} />
                            </TouchableOpacity>
                            <Text style={styles.likesQtd}>{detail?.vote_count}K</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.areaDescription}>
                <ScrollView style={styles.scrollDescription}>
                    <Text style={styles.tagline}>{(detail?.tagline).toUpperCase() || detail?.title}</Text>
                    <Text style={styles.textDescription}>
                        {detail?.overview}
                    </Text>
                </ScrollView>
            </View>
        </>
    )
}