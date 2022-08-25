import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, ImageBackground,Image, ScrollView, TouchableOpacity, Modal, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import { instance } from '../../services/api';
import StarActice from '../../assets/Images/StarActice.png'
import StarInative from '../../assets/Images/StarInative.png';
import { LoginContext } from "../../contexts/loginContext";
import { ExtraInformatinSerie } from './components/ExtraInformationSerie';
import { EvaluationSerie } from './components/EvaluationSerie';



export const DetailsSerie = () => {
    
    const animationController = useRef (new Animated.Value(0)).current;
    const [showContet, setShowConst] = useState(false);
    const [assessmentSerie, setAssessmentSerie] = useState(false)
    const [noteAvaliationSerie, setNoteAvaliatioSerie] = useState('');
    const [verificationSerie, setVerificationSerie] = useState(false);
    const [menssagErrorSerie, setMenssagErrorSerie] = useState('')
    const [detailSerie, setDetailSerie] = useState({});
    const [loading, setLoading] = useState(false);
    const [markFavoriteSerie, setMarkFavoriteSerie] = useState(false);
    const [buttomEdit, setButtomEdit] = useState(false);
    const [serieState, setSerieStates] = useState ({});
    const [extraInformation, setExtraInformation] = useState(false);
    const [directorResearch, setDirectorResearch] = useState([]);
    const Navigation = useNavigation();

    const { sessionId } = useContext(LoginContext);

        const getDetailSerie = async () => {
            await instance.get(`tv/90802?&language=pt-BR`)
                .then((resp) => {
                    setDetailSerie(resp.data);
                })
                .catch(error => console.log(error));
        };

        const getStatesSerie = async () => {
            await instance.get(`tv/90802$/account_states?&session_id=${sessionId}`)
                .then((resp) => {
                    setSerieStates(resp?.data);
                })
                .catch((error) => console.log(error));
        };

        const postFavoriteSerie = async () => {
            await instance.post(`account/13846517/favorite?&session_id=${sessionId}`,{
                'media_type': 'tv',
                'media_id': '90802',
                'favorite': markFavoriteSerie
            }).then((resp) => {
                    console.log(resp.data.favorite);
            }).catch((error) => console.log(error))
        };       
        
        const postRateSerie = async () => {
            await instance.post(`tv/90802/rating?&session_id=${sessionId}`,{
                'value':parseFloat(noteAvaliationSerie)
            }).then(resp => {
                setNoteAvaliatioSerie(resp?.value);
                setVerificationSerie(false);
                setAssessmentSerie(false);
            }).catch(error => {
                setVerificationSerie(true);
                setNoteAvaliatioSerie('');
                if (error?.response?.status === 400){
                    setMenssagErrorSerie("A nota deve ser de 0,50 a 10");
                }
            });
        
        };
        const buttmEdit = () => {
            setAssessmentSerie(true)
            setButtomEdit(true)
        }

        const validationNoteSerie = () => {
            setVerificationSerie(false)
            if(noteAvaliationSerie === 0 && noteAvaliationSerie > 10){
                setVerificationSerie(true)
                setMenssagErrorSerie("A nota deve ser de 0.50 a 10");
                
            }else if(noteAvaliationSerie === ''){
                setVerificationSerie(true);
                setMenssagErrorSerie("Por favor digite sua nota");
            }else{
                postRateSerie();
            }
        }
        const toggleListItem = () => {
            const config = {
                duration: 300,
                toValue: showContet ? 0 : 1,
                useNativeDriver: true
            }
            Animated.timing(animationController, config).start();
            setShowConst(!showContet)
        }
        
        const arrowTransforms = animationController.interpolate({
            inputRange: [0,1],
            outputRange:['0deg', '180deg']});

        const click = () => {
            setMarkFavoriteSerie(!markFavoriteSerie);
            postFavoriteSerie();
            };
    
        useEffect(() => {
            getDetailSerie();
            setTimeout(() => {
            setLoading(true);
                }, 2000);
            }, []);

        useEffect(() => {
            getStatesSerie();
            },[markFavoriteSerie, noteAvaliationSerie]);


    const date = new Date(detailSerie?.first_air_date);



    return (
    <>
        <View style={styles.screen}>
            <View style={styles.posterArea}>
                <ImageBackground resizeMode='cover' style={styles.imagePoster} source={{ uri: `https://image.tmdb.org/t/p/original${detailSerie?.backdrop_path}`}} />
            </View>
            <TouchableOpacity style={styles.buttomBack} onPress={() => Navigation.goBack()} >
                <Icon name='arrow-back' size={30} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.favoriteButtom} onPress={()=> click()}>
                <Image style={{width:23, height:23}} source={serieState?.favorite ? StarActice : StarInative}/>
            </TouchableOpacity>

            <Modal animationType='fade' visible={extraInformation} transparent={true}>
                <ExtraInformatinSerie
                    imageMovie={detailSerie?.poster_path}
                    titleMovie={detailSerie?.original_name}
                    genreMovie={detailSerie?.genres}
                    setExtraInformation={setExtraInformation}
                />
            </Modal>

            <Modal animationType='fade' visible={assessmentSerie} transparent={true} >
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
                    <TouchableOpacity onPress={() => setExtraInformation(true)}>
                        <Image style={styles.imagePerfil} source={{ uri: `https://image.tmdb.org/t/p/original${detailSerie?.poster_path}` }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonAvalution, {backgroundColor: serieState?.rated?.value ? '#8BE0EC' : '#E9A6A6'}]} onPress={() => buttmEdit()}>
                        <Text style={styles.textAvaliation}> {serieState?.rated?.value ? "Sua nota é: " + (serieState?.rated?.value) + "/10" : "Avalie Agora" } </Text>
                    </TouchableOpacity>

                { buttomEdit && (
                    <View style={styles.buttonEdit}>
                        <TouchableOpacity onPress={() => buttmEdit()}>
                            <Icon name='edit' size={10} color={'#000000'} />
                        </TouchableOpacity>
                    </View>
                )}

            </View>
            <View style={styles.infoArea}>
                <View style={styles.titleArea}>
                        <View style={styles.containerNameAndYear}>
                                <TouchableOpacity >
                                    <Text style={styles.textTitle}>{detailSerie?.original_name}
                                    </Text>
                                </TouchableOpacity>
                            <Text style={styles.textAno}>{date.getFullYear()}</Text>
                        </View>
                </View>
                
                <Text style={styles.textDirector}>Direção por </Text>
                
                <View style={styles.notesArea}>
                    <Text style={styles.textNote}>{(detailSerie?.vote_average).toFixed(1)}/10</Text>
                    <View style={styles.bottomLike}>
                            <TouchableOpacity>
                                <Icon name="favorite" size={25} color={'red'} />
                            </TouchableOpacity>
                            <Text style={styles.likesQtd}>{detailSerie?.popularity > 1000 ? Math.floor(detailSerie?.popularity/1000) + 'K' : (detailSerie?.popularity).toFixed(0)}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.areaDescription}>
                <ScrollView style={styles.scrollDescription}>
                    <Text style={styles.tagline}>{detailSerie?.tagline}</Text>
                    <Text style={styles.textDescription}>{detailSerie?.overview}</Text>
                </ScrollView>
            </View>

            <TouchableOpacity onPress={() => toggleListItem() } style={{width:'90%', height:40, left:15, backgroundColor:'green', top:40, flexDirection:'row'}}>
            <Text style={{alignItems:'center', top:8}}> Temporada 1</Text>
            <Animated.View style={{transform: [{rotateZ:arrowTransforms}]}}>
            <Icon name='expand-more' color={'black'} size={20} style={{top:8}}/>
            </Animated.View>
            </TouchableOpacity>
            {showContet && (
                <View style={{ marginVertical:5, width:'90%', height:40, left:15, backgroundColor:'green', top:25,justifyContent:'center'}}>
                    <Text> TESTE </Text>
                </View>
            )}
        </View>

        



    </>
    );
    
};

