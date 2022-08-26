import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import { Detail } from '../Detail';
import { Evaluation } from '../Evaluation';
import { instance } from '../../../../services/api';
import { LoginContext } from '../../../../contexts/loginContext';
import { useRoute } from '@react-navigation/native';
import StarActice from '../../../../assets/Images/StarActive.png';
import StarInative from '../../../../assets/Images/StarInative.png';

export const DetailsMovieComponent = ({
    markFavorite,
    noteAvaliation,
    movieStates,
    setMarkFavorite,
    setNoteAvaliation,
    Navigation,
    note,
    setNote,
    detail,
    visible,
    setVisible,
    directorArray,
}) => {
    const { sessionId } = useContext(LoginContext);
    const { idItens } = useRoute().params;
    const [verification, setVerification] = useState(false);
    const [menssagError, setMenssagError] = useState('');

    const postFavoriteMovie = async () => {
        await instance
            .post(`account/${idItens}/favorite?&session_id=${sessionId}`, {
                media_type: 'movie',
                media_id: idFilmes,
                favorite: markFavorite,
            })
            .then(resp => {})
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                } else if (error.request) {
                    console.log(error.request.data);
                } else {
                    console.log('Error', error.message);
                }
            });
    };

    const PostRateMovie = async () => {
        await instance
            .post(`movie/${idItens}/rating?session_id=${sessionId}`, {
                value: parseFloat(noteAvaliation),
            })
            .then(resp => {
                setVerification(false);
                setNoteAvaliation(resp?.value);
                setNote(false);
            })
            .catch(error => {
                setVerification(true);
                setNoteAvaliation('');
                if (error?.response?.status === 400) {
                    setMenssagError('A nota deve ser de 0,50 a 10');
                }
            });
    };

    const validationNote = () => {
        setVerification(false);
        if (noteAvaliation === 0 && noteAvaliation > 10) {
            setVerification(true);
            setMenssagError('A nota deve ser de 0.50 a 10');
        } else if (noteAvaliation === '') {
            setVerification(true);
            setMenssagError('Por favor digite sua nota');
        } else {
            PostRateMovie();
        }
    };

    const click = () => {
        setMarkFavorite(!markFavorite);
        postFavoriteMovie();
    };

    const date = new Date(detail?.release_date);

    return (
        <>
            <View style={styles.posterArea}>
                <ImageBackground
                    resizeMode='cover'
                    style={styles.imagePoster}
                    source={{
                        uri: `https://image.tmdb.org/t/p/original${detail?.backdrop_path}`,
                    }}
                />
            </View>

            <TouchableOpacity
                style={styles.buttomBack}
                onPress={() => Navigation.goBack()}
            >
                <Icon name='arrow-back' size={30} color={'black'} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.favoriteButtom}
                onPress={() => click()}
            >
                <Image
                    style={{ width: 23, height: 23 }}
                    source={
                        movieStates?.favorite === true
                            ? StarActice
                            : StarInative
                    }
                />
            </TouchableOpacity>

            <Modal animationType='fade' visible={visible} transparent={true}>
                <Detail
                    imageMovie={detail?.poster_path}
                    titleMovie={detail?.title}
                    genreMovie={detail?.genres}
                    setVisible={setVisible}
                />
            </Modal>

            <Modal animationType='fade' visible={note} transparent={true}>
                <Evaluation
                    setNote={setNote}
                    setNoteAvaliation={setNoteAvaliation}
                    noteAvaliation={noteAvaliation}
                    PostRateMovie={PostRateMovie}
                    validationNote={validationNote}
                    menssagError={menssagError}
                    verification={verification}
                    setVerification={setVerification}
                />
            </Modal>

            <View style={styles.perfilArea}>
                <View style={{ width: 132 }}>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Image
                            style={styles.imagePerfil}
                            source={{
                                uri: `https://image.tmdb.org/t/p/original${detail?.poster_path}`,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setNote(true)}
                        style={[
                            styles.buttonAvalution,
                            {
                                backgroundColor: movieStates?.rated?.value
                                    ? '#8BE0EC'
                                    : '#E9A6A6',
                            },
                        ]}
                    >
                        <Text style={styles.textAvaliation}>
                            {' '}
                            {movieStates?.rated?.value
                                ? 'Sua nota é: ' +
                                  movieStates?.rated?.value +
                                  ' /10'
                                : 'Avalie Agora'}{' '}
                        </Text>
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
                                <Text style={styles.textTitle}>
                                    {(detail?.title).length > 10
                                        ? (detail?.title).substring(0, 10) +
                                          '...'
                                        : detail?.title}
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.textAno}>
                                {date.getFullYear()}
                            </Text>
                        </View>
                        <Text style={styles.textDuration}>
                            {detail?.runtime}min
                        </Text>
                    </View>

                    {directorArray.find(item => item.job === 'Director') ? (
                        <Text style={styles.textDirector}>
                            Direção por{' '}
                            <Text style={styles.stroke}>
                                {
                                    directorArray.find(
                                        item => item.job === 'Director',
                                    ).name
                                }
                            </Text>
                        </Text>
                    ) : (
                        <Text style={styles.textDirector}>
                            {' '}
                            Direção índisponivel{' '}
                        </Text>
                    )}

                    <View style={styles.notesArea}>
                        <Text style={styles.textNote}>
                            {(detail?.vote_average).toFixed(1)}/10
                        </Text>
                        <View style={styles.bottomLike}>
                            <TouchableOpacity>
                                <Icon name='favorite' size={25} color={'red'} />
                            </TouchableOpacity>
                            <Text style={styles.likesQtd}>
                                {detail?.popularity > 1000
                                    ? Math.floor(detail?.popularity / 1000) +
                                      'K'
                                    : (detail?.popularity).toFixed(0)}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.areaDescription}>
                <ScrollView style={styles.scrollDescription}>
                    <Text style={styles.tagline}>
                        {(detail?.tagline).toUpperCase() || detail?.title}
                    </Text>
                    <Text style={styles.textDescription}>
                        {(detail?.overview).toString() ||
                            'Descrição indisponível'}
                    </Text>
                </ScrollView>
            </View>
        </>
    );
};
