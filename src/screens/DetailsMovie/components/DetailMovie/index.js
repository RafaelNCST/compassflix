import React , { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style'
import { Detail } from '../Detail'
import { Evaluation } from '../Evaluation';
import { instance } from '../../../../services/api';
import { LoginContext } from "../../../../contexts/loginContext";
import { useRoute } from "@react-navigation/native";



export const DetailsMovieComponent = ({ setAvaliation, movieStates, avaliation, Navigation, note, setNote, detail, visible, setVisible, directorArray }) => {
    const { sessionId } = useContext(LoginContext);
    const { idFilmes } = useRoute().params;
    const [favorite, setFavorite] = useState(false);

    const postFavoriteMovie = async () => {
        await instance.post(`account/13846517/favorite?&session_id=${sessionId}`, 
        {"media_type": "movie",
        "media_id": idFilmes,
        "favorite": favorite
    }). then((resp) => {
            console.log("funcionou")
            console.log(resp?.data?.success)
            
    }) .catch((error) => {
        if(error.response){
            console.log(error.response.data);
        }else if(error.request){
            console.log(error.request.data);
        }else{
            console.log('Error', error.message);
        }
    })
}
    
    const click = () => {
        setFavorite(!favorite)
        postFavoriteMovie()
    }


    const date = new Date(detail?.release_date)

    return (
        <>
            <View style={styles.posterArea} >
                <ImageBackground resizeMode='cover' style={styles.imagePoster} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.backdrop_path}` }} />
            </View>

            <TouchableOpacity style={styles.buttomBack} onPress={() => Navigation.goBack()} >
                <Icon name='arrow-back' size={30} color={'black'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.favoriteButtom} onPress={()=> click()}>
                <Icon name='grade' size={30} color={favorite ? 'red' : 'white' } style={styles.Favorite}/>
            </TouchableOpacity>

            <Modal animationType='fade' visible={visible} transparent={true}>
                <Detail
                    imageMovie={detail?.poster_path}
                    titleMovie={detail?.title}
                    genreMovie={detail?.genres}
                    setVisible={setVisible}
                />
            </Modal>

            <Modal animationType='fade' visible={note} transparent={true} >
                <Evaluation
                    setNote={setNote}
                    setAvaliation={setAvaliation}
                    avaliation={avaliation}
                />
            </Modal>

            <View style={styles.perfilArea}>
                <View style={{ width: 132 }}>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Image style={styles.imagePerfil} source={{ uri: `https://image.tmdb.org/t/p/original${detail?.poster_path}` }} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => setNote(true)} style={styles.buttonAvalution}>
                        <Text style={styles.textAvaliation}>
                            {(movieStates?.rated?.value) || "Avalie Agora !!" } </Text>
                    </TouchableOpacity>
                    
                    <View style={styles.buttonEdit}>
                        <TouchableOpacity onPress={() => setNote(true)}>
                        <Icon name='edit' size={10} color={'#000000'} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.infoArea}>
                    <View style={styles.titleArea}>
                        <View style={styles.containerNameAndYear}>
                            <TouchableOpacity onPress={() => setVisible(true)}>
                                <Text style={styles.textTitle}>{(detail?.title).length > 10 ? (detail?.title).substring(0, 10) + '...' : detail?.title}</Text>
                            </TouchableOpacity>
                            <Text style={styles.textAno}>{date.getFullYear()}</Text>
                        </View>
                        <Text style={styles.textDuration}>{detail?.runtime}min</Text>
                    </View>

                    {directorArray.find(item => item.job === "Director") ?
                        (<Text style={styles.textDirector}>Direção por <Text style={styles.stroke}>{directorArray.find(item => item.job === 'Director').name}</Text></Text>
                        ) : (
                            <Text style={styles.textDirector} >  Direção índisponivel </Text>
                        )
                    }

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
