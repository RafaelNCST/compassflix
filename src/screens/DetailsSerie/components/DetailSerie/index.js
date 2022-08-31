import React from 'react';
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
import StarActice from '../../../../assets/Images/StarActice.png';
import StarInative from '../../../../assets/Images/StarInative.png';
import { ExtraInformatinSerie } from '../../components/ExtraInformationSerie';
import { EvaluationSerie } from '../../components/EvaluationSerie';

export const DetailSerieComponent = ({ 
    detailSerie, 
    extraInformation, 
    assessmentSerie, 
    verificationSerie, 
    director,
    Navigation,
    serieStates,
    menssagErrorSerie,
    favoriteSerie,
    postRateSerie,
    setMenssagErrorSerie,
    noteAvaliationSerie,
    setNoteAvaliatioSerie,
    setExtraInformation,
    setVerificationSerie,
    setAssessmentSerie
}) => {

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

    const date = new Date(detailSerie?.first_air_date);

    return (
        <>
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
                        onPress={() => favoriteSerie()}
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
                                        : '  Agora'}{' '}
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
                                            {detailSerie?.name?.length > 14
                                                ? detailSerie?.name?.substring(
                                                    0,
                                                    14,
                                                ) + '...'
                                                : detailSerie?.name}
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textAno}>
                                        {date.getFullYear()}
                                    </Text>
                                </View>
                            </View>

                            {director?.find(item => item.gender === 2) ? (
                                <Text style={styles.textDirector}>
                                    Direção por{' '}
                                    <Text style={styles.stroke}>
                                        {
                                            director?.find(
                                                item => item.gender === 2,
                                            )?.name
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
                                {(detailSerie?.tagline)?.toUpperCase() ||
                                    detailSerie?.name}
                            </Text>
                            <Text style={styles.textDescription}>
                                {(detailSerie?.overview)?.toString() ||
                                    'Descrição indisponível'}
                            </Text>
                        </ScrollView>
                    </View>
        </>
    );
};
    
