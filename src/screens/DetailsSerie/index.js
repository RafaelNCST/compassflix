import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
    Modal,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import { instance } from '../../services/api';
import StarActice from '../../assets/Images/StarActice.png';
import StarInative from '../../assets/Images/StarInative.png';
import { LoginContext } from '../../contexts/loginContext';
import { ListSeriesContext } from '../../contexts/listSeriesContext';
import { ExtraInformatinSerie } from './components/ExtraInformationSerie';
import { EvaluationSerie } from './components/EvaluationSerie';
import { ListSeason } from './components/ListSeason';
import { LoadingScreensApis } from '../../components/LoadingScreensApis';

export const DetailsSerie = () => {
    const [assessmentSerie, setAssessmentSerie] = useState(false);
    const [noteAvaliationSerie, setNoteAvaliatioSerie] = useState('');
    const [verificationSerie, setVerificationSerie] = useState(false);
    const [menssagErrorSerie, setMenssagErrorSerie] = useState('');
    const [detailSerie, setDetailSerie] = useState({});
    const [markFavoriteSerie, setMarkFavoriteSerie] = useState(false);
    const [buttomEdit, setButtomEdit] = useState(false);
    const [extraInformation, setExtraInformation] = useState(false);
    const [director, setDirector] = useState([]);
    const [seasons, setSeasons] = useState([]);
    const [listEpisode, setListEpisode] = useState([]);
    const [loading, setLoading] = useState(false);
    const Navigation = useNavigation();

    const { idItens } = useRoute().params;
    const { sessionId } = useContext(LoginContext);
    const { serieStates, setSerieStates } = useContext(ListSeriesContext);

    console.log(noteAvaliationSerie);

    const getDetailSerie = async () => {
        await instance
            .get(`tv/${idItens}?&language=pt-BR`)
            .then(resp => {
                setDetailSerie(resp.data);
                setSeasons(resp?.data.seasons);
                setDirector(resp?.data?.created_by);
            })
            .catch(error => console.log(error));
    };

    const getEpisode = async () => {
        await instance
            .get(`/tv/${idItens}/season/1?&language=pt-BR`)
            .then(resp => {
                setListEpisode(resp?.data?.episodes);
            })
            .catch(error => console.log(error));
    };

    const getStatesSerie = async () => {
        await instance
            .get(`tv/${idItens}/account_states?&session_id=${sessionId}`)
            .then(resp => {
                setSerieStates(resp?.data);
            })
            .catch(error => console.log(error));
    };

    const postFavoriteSerie = async () => {
        await instance
            .post(`account/${idItens}/favorite?&session_id=${sessionId}`, {
                media_type: 'tv',
                media_id: idItens,
                favorite: markFavoriteSerie,
            })
            .then(resp => {
                setMarkFavoriteSerie(!markFavoriteSerie);
            })
            .catch(error => console.log(error));
    };

    const postRateSerie = async () => {
        await instance
            .post(`tv/${idItens}/rating?&session_id=${sessionId}`, {
                value: parseFloat(noteAvaliationSerie),
            })
            .then(resp => {
                setNoteAvaliatioSerie(resp?.value);
                setVerificationSerie(false);
                setAssessmentSerie(false);
            })
            .catch(error => {
                setVerificationSerie(true);
                setNoteAvaliatioSerie('');
                if (error?.response?.status === 400) {
                    setMenssagErrorSerie('A nota deve ser de 0,50 a 10');
                }
            });
    };

    const validationNoteSerie = () => {
        setVerificationSerie(false);
        if (noteAvaliationSerie === 0 && noteAvaliationSerie > 10) {
            setVerificationSerie(true);
            setMenssagErrorSerie('A nota deve ser de 0.50 a 10');
        } else if (noteAvaliationSerie === '') {
            setVerificationSerie(true);
            setMenssagErrorSerie('Por favor digite sua nota');
        } else {
            postRateSerie();
        }
    };

    useEffect(() => {
        getDetailSerie();
        getEpisode();
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    useEffect(() => {
        getStatesSerie();
    }, [markFavoriteSerie, noteAvaliationSerie]);



    const date = new Date(detailSerie?.first_air_date);

    return (
        <>
            {loading ? (
                <View style={styles.screen}>
                    <View style={styles.posterArea}>
                        <ImageBackground
                            resizeMode='cover'
                            style={styles.imagePoster}
                            source={{
                                uri: `https://image.tmdb.org/t/p/original${detailSerie?.backdrop_path}`,
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
                        onPress={() => postFavoriteSerie()}
                    >
                        <Image
                            style={{ width: 23, height: 23 }}
                            source={
                                serieStates?.favorite ? StarActice : StarInative
                            }
                        />
                    </TouchableOpacity>

                    <Modal
                        animationType='fade'
                        visible={extraInformation}
                        transparent={true}
                    >
                        <ExtraInformatinSerie
                            imageMovie={detailSerie?.poster_path}
                            titleMovie={detailSerie?.name}
                            genres={detailSerie?.genres}
                            setExtraInformation={setExtraInformation}
                        />
                    </Modal>

                    <Modal
                        animationType='fade'
                        visible={assessmentSerie}
                        transparent={true}
                    >
                        <EvaluationSerie
                            setAssessmentSerie={setAssessmentSerie}
                            setNoteAvaliatioSerie={setNoteAvaliatioSerie}
                            noteAvaliationSerie={noteAvaliationSerie}
                            validationNoteSerie={validationNoteSerie}
                            menssagErrorSerie={menssagErrorSerie}
                            verificationSerie={verificationSerie}
                            setVerificationSerie={setVerificationSerie}
                        />
                    </Modal>

                    <View style={styles.perfilArea}>
                        <View style={styles.areaButtonsPerfil}>
                            <TouchableOpacity
                                onPress={() => setExtraInformation(true)}
                            >
                                <Image
                                    style={styles.imagePerfil}
                                    source={{
                                        uri: `https://image.tmdb.org/t/p/original${detailSerie?.poster_path}`,
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.buttonAvalution,
                                    {
                                        backgroundColor: serieStates?.rated
                                            ?.value
                                            ? '#8BE0EC'
                                            : '#E9A6A6',
                                    },
                                ]}
                                onPress={() => setAssessmentSerie(true)}
                            >
                                <Text style={styles.textAvaliation}>
                                    {' '}
                                    {serieStates?.rated?.value
                                        ? 'Sua nota é: ' +
                                          serieStates?.rated?.value +
                                          '/10'
                                        : 'Avalie Agora'}{' '}
                                </Text>
                            </TouchableOpacity>
                            {serieStates?.rated !== false ? (
                                <View style={styles.buttonEdit}>
                                    <TouchableOpacity
                                        onPress={() => setAssessmentSerie(true)}
                                    >
                                        <Icon
                                            name='edit'
                                            size={10}
                                            color={'#000000'}
                                        />
                                    </TouchableOpacity>
                                </View>
                            ) : null}
                        </View>
                        <View style={styles.infoArea}>
                            <View style={styles.titleArea}>
                                <View style={styles.containerNameAndYear}>
                                    <TouchableOpacity
                                        onPress={() =>
                                            setExtraInformation(true)
                                        }
                                    >
                                        <Text style={styles.textTitle}>
                                            {detailSerie?.name?.length > 10
                                                ? detailSerie?.name?.substring(
                                                      0,
                                                      10,
                                                  ) + '...'
                                                : detailSerie?.name}
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textAno}>
                                        {date.getFullYear()}
                                    </Text>
                                </View>
                            </View>

                            {director.find(item => item.gender === 2) ? (
                                <Text style={styles.textDirector}>
                                    Direção por{' '}
                                    <Text style={styles.stroke}>
                                        {
                                            director.find(
                                                item => item.gender === 2,
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
                                    {parseFloat(
                                        detailSerie?.vote_average,
                                    ).toFixed(1)}
                                    /10
                                </Text>
                                <View style={styles.bottomLike}>
                                    <TouchableOpacity>
                                        <Icon
                                            name='favorite'
                                            size={25}
                                            color={'red'}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.likesQtd}>
                                        {detailSerie?.popularity > 1000
                                            ? Math.floor(
                                                  detailSerie?.popularity /
                                                      1000,
                                              ) + 'K'
                                            : parseFloat(
                                                  detailSerie?.popularity,
                                              ).toFixed(0)}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.areaDescription}>
                        <ScrollView style={styles.scrollDescription}>
                            <Text style={styles.tagline}>
                                {detailSerie?.tagline}
                            </Text>
                            <Text style={styles.textDescription}>
                                {detailSerie?.overview}
                            </Text>
                        </ScrollView>
                    </View>
                    <View style={styles.areaDropDown}>
                        <FlatList
                            data={seasons}
                            keyExtractor={(_, index) => index}
                            renderItem={({ item }) => {
                                return (
                                    <ListSeason
                                        season={item.name}
                                        episodes={listEpisode}
                                    />
                                );
                            }}
                        />
                    </View>
                </View>
            ) : (
                <LoadingScreensApis />
            )}
        </>
    );
};
