import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    View
} from 'react-native';
import {DetailSerieComponent} from './components/DetailSerie';
import { Seasons } from './components/Seasons';
import { styles } from './style';
import { instance } from '../../services/api';
import { LoginContext } from '../../contexts/loginContext';
import { ListSeriesContext } from '../../contexts/listSeriesContext';
import { LoadingScreensApis } from '../../components/LoadingScreensApis';
import { getDetailSerie, getEpisode, getStatesSerie } from './apis/GetSerieInformation';
import { postFavoriteSerie} from './apis/PostSendUserInformationSerie';

export const DetailsSerie = () => {
    const [assessmentSerie, setAssessmentSerie] = useState(false);
    const [noteAvaliationSerie, setNoteAvaliatioSerie] = useState('');
    const [verificationSerie, setVerificationSerie] = useState(false);
    const [menssagErrorSerie, setMenssagErrorSerie] = useState('');
    const [detailSerie, setDetailSerie] = useState({});
    const [markFavoriteSerie, setMarkFavoriteSerie] = useState(false);
    const [extraInformation, setExtraInformation] = useState(false);
    const [director, setDirector] = useState([]);
    const [seasons, setSeasons] = useState([]);
    const [listEpisode, setListEpisode] = useState([]);
    const [loading, setLoading] = useState(false);
    const Navigation = useNavigation();
    

    const { idItens } = useRoute().params;
    const { sessionId } = useContext(LoginContext);
    const { serieStates, setSerieStates } = useContext(ListSeriesContext);

    const serieInformation = async () => {
        let resp = await getDetailSerie(idItens);
                setDetailSerie(resp?.data);
                setSeasons(resp?.data?.seasons);
                setDirector(resp?.data?.created_by);
            
        };

    const serieEpisode = async () => {
        let resp =  await getEpisode(idItens);
        setListEpisode(resp?.data?.episodes);    
    };

    const statesSerie = async () => {
        let resp = await getStatesSerie(idItens, sessionId);
                setSerieStates(resp?.data);
    };

    const favoriteSerie = async () => {
        await postFavoriteSerie(idItens, sessionId, markFavoriteSerie);
                setMarkFavoriteSerie(!markFavoriteSerie);
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

    useEffect(() => {
        serieInformation();
        serieEpisode();
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    useEffect(() => {
        statesSerie();
    }, [markFavoriteSerie, noteAvaliationSerie]);


    return (
                <View style={styles.screen}>
                {loading ? (
                    <>
                    <DetailSerieComponent
                    setAssessmentSerie={setAssessmentSerie}
                    detailSerie={detailSerie}
                    extraInformation={extraInformation}
                    assessmentSerie={assessmentSerie}
                    verificationSerie={verificationSerie}
                    director={director}
                    Navigation ={Navigation}
                    serieStates={serieStates}
                    setVerificationSerie={setVerificationSerie}
                    favoriteSerie={favoriteSerie}
                    postRateSerie={postRateSerie}
                    setExtraInformation={setExtraInformation}
                    noteAvaliationSerie={noteAvaliationSerie}
                    setNoteAvaliatioSerie={setNoteAvaliatioSerie}
                    menssagErrorSerie={menssagErrorSerie}
                    setMenssagErrorSerie={setMenssagErrorSerie}
    
                    />
                    <Seasons 
                    seasons={seasons}
                    listEpisode={listEpisode}
                    />
                    </>
            ) : (
                <LoadingScreensApis />
            )}
            </View>
    );
};
