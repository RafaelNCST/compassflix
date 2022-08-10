import { View, Text, TouchableOpacity, Image, ImageBackground, FlatList, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DATA } from '../../helpers/Cast';
import { Item } from './components';
import { instance, apiKey } from '../../services/api'
import anonimo from '../../assets/DetailMovies/Paul.png'


export const DetailsMovie = () => {
    const [cast, setCast] = useState();
    const [loading, setLoading] = useState(false)
    const [detail, setDetail] = useState({});
    const getDetail = async () => {
        await instance.get(`movie/616037?api_key=${apiKey}&language=pt-BR`)
            .then(resp => {
                setDetail(resp.data);
                console.log("deu certo");
                setLoading(true);

            })
            .catch(error => console.log(error));
    }
    const getCast = async () => {
        await instance.get(`movie/616037/credits?api_key=${apiKey}&language=pt-BR`)
            .then(resp => {
                setCast(resp.data.cast);
            })
            .catch(error => console.log(error))
    }
    const requestApis = () => {
        getDetail();
        getCast();
    }
    useEffect(() => {
        requestApis();
    }, [loading])


    return (

        <View style={styles.bodyScreen}>

            {loading &&
                <>
                    <View style={styles.posterArea} >
                        <ImageBackground resizeMode='cover' style={styles.imagePoster} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.belongs_to_collection.backdrop_path}` }} />
                    </View>
                    <View style={styles.areBottom} >
                        <TouchableOpacity style={styles.buttomBack} >
                            <Icon name='arrow-back' size={30} color={'black'} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.perfilArea}>
                        <Image style={styles.imagePerfil} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.belongs_to_collection.poster_path}` }} />
                        <View style={styles.infoArea}>
                            <View style={styles.titleArea}>
                                <Text style={styles.textTitle}>{detail?.original_title}</Text>
                                <Text style={styles.textAno}>{detail?.release_date}</Text>
                                <Text style={styles.textDuration}>{detail?.runtime}min</Text>
                                    <Text style={styles.textDirector}>Direção por {detail?.production_companies[1].name}</Text>
                                
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

                    <View style={styles.areaDescription}>
                        <ScrollView style={styles.scrollDescription}>
                            <Text style={styles.textDescription}>
                                {detail?.tagline} {'\n \n'} {detail?.overview}
                            </Text>
                        </ScrollView>
                    </View>

                    <View style={styles.castArea}>
                        <View style={styles.castTitle}>
                            <Text style={styles.textCast}>Elenco</Text>

                        </View>
                        <View style={styles.spaceCast} />


                    </View>
                    <View style={styles.cast}>
                        <FlatList
                            data={cast}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <Item
                                        image={item?.profile_path}
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
