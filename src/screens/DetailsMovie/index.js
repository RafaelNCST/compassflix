import { View, Text, TouchableOpacity, Image, ImageBackground, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PosterMovie } from '../../helpers/PosterMovie';
import { DATA } from '../../helpers/Cast';
import { Item } from './components';
import { instance, apiKey } from '../../services/api'
import { ScrollView } from 'react-native-gesture-handler';


export const DetailsMovie = () => {
    const [loading, setLoading] = useState(false)
    const [detail, setDetail] = useState({});

    const getDetail = async () => {
        await instance.get(`movie/616037?api_key=${apiKey}&language=pt-BR`)
            .then(resp => {
                setDetail(resp.data);
                console.log("deu certo")
                setLoading(true)

            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getDetail()
    }, [loading])

    return (

        <View style={styles.bodyScreen}>

            {loading &&
                <>
                    <View style={styles.posterArea} >
                        <ImageBackground resizeMode='cover' style={styles.imagePoster} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.belongs_to_collection.backdrop_path}` }} />
                    </View>
                    <View style={styles.bottoBack}>
                        <TouchableOpacity   >
                            <Icon name='arrow-back' size={30} color={'red'} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.perfilArea}>
                        <Image style={{ width: 116, height: 182, marginTop: -80 }} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.belongs_to_collection.poster_path}` }} />
                        <View style={styles.infoArea}>
                            <View style={styles.titleArea}>
                                <Text style={styles.textTitle}> {detail?.original_title}</Text>
                                <Text style={styles.textAno}> {detail?.release_date} </Text>
                                <Text style={styles.textDuration}>{detail?.runtime} min</Text>
                                <View style={styles.areaDirector}>
                                    <Text style={styles.textDirector}>Direção por {detail?.production_companies.name}</Text>
                                </View>
                            </View>
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
                    <ScrollView style={styles.areaDescription}>
                        <Text style={styles.textDescription}>
                            DESCUBRA A VERDADE {'\n \n'}{detail?.overview}
                        </Text>
                    </ScrollView>
                    <View style={styles.castArea}>
                        <View style={styles.castTitle}>
                            <Text style={styles.textCast}>Elenco</Text>
                        </View>
                    </View>
                    <View style={styles.cast}>
                        <FlatList
                            data={DATA}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <Item
                                        image={item?.image}
                                        name={item?.name}
                                        character={item?.character}
                                    />
                                )
                            }
                            }
                        />

                    </View>
                </>
            }
        </View >


    )
}
