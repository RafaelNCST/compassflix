import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CreditsComponent } from './components/Credits';
import { DetailsMovieComponent } from './/components/DetailMovie';
import { LoginContext } from '../../contexts/loginContext';
import { ListFilmsContext } from '../../contexts/listFilmsContext';
import { LoadingScreensApis } from '../../components/LoadingScreensApis';
import {getCast, getDetail, getStates} from './apis/GetMovieInformation';
import {postFavoriteMovie} from './apis/PostSendUserInformationMovie';
import { instance } from '../../services/api';
import * as Styled from './style';

export const DetailsMovie = () => {
    const [verification, setVerification] = useState(false);
    const [menssagError, setMenssagError] = useState('');
    const {sessionId} = useContext(LoginContext);
    const {movieStates, setMovieStates} = useContext(ListFilmsContext);
    const [noteAvaliation, setNoteAvaliation] = useState('');
    const [markFavorite, setMarkFavorite] = useState(false);
    const [detail, setDetail] = useState({});
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [note, setNote] = useState(false);
    const [buttonListFavorite, setButtonListFavorite] = useState(false);
    const [buttonMarkFavorite, setButtonMarkFavorite] = useState(false);
    const Navigation = useNavigation();
    const {idItens} = useRoute().params;

    const accountStatus = async () => {
    let resp = await getStates(idItens, sessionId);
                setMovieStates(resp?.data);
    };

    const movieInformation = async () => {
        let resp = await getDetail(idItens); 
                setDetail(resp?.data);
    };

    const movieCastInformation = async () => {
        let resp = await getCast(idItens);
                setCast(resp?.data?.cast);
                setCrew(resp?.data?.crew);
    };

    const FavoriteMovie = async () => {
        await postFavoriteMovie(idItens,sessionId, markFavorite);
        setMarkFavorite(!markFavorite);
};

const RateMovie = async () => {
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


    useEffect(() => {
        movieInformation();
        movieCastInformation();
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    useEffect(() => {
        accountStatus();
    }, [noteAvaliation, markFavorite, buttonMarkFavorite]);

    return (
        <Styled.BodyScreen>
            {loading ? (
                <>
                    <DetailsMovieComponent
                        Navigation={Navigation}
                        detail={detail}
                        visible={visible}
                        setVisible={setVisible}
                        directorArray={crew}
                        note={note}
                        setNote={setNote}
                        noteAvaliation={noteAvaliation}
                        setNoteAvaliation={setNoteAvaliation}
                        movieStates={movieStates}
                        markFavorite={markFavorite}
                        setMarkFavorite={setMarkFavorite}
                        idItens={idItens}
                        sessionId={sessionId}
                        FavoriteMovie={FavoriteMovie}
                        RateMovie={RateMovie}
                        verification={verification}
                        setVerification={setVerification}
                        menssagError={menssagError}
                        setMenssagError={setMenssagError}
                        buttonListFavorite={buttonListFavorite}
                        setButtonListFavorite={setButtonListFavorite}
                        buttonMarkFavorite={buttonMarkFavorite}
                        setButtonMarkFavorite={setButtonMarkFavorite}
                    />
                    <CreditsComponent cast={cast} />
                </>
            ) : (
                <LoadingScreensApis />
            )}
        </Styled.BodyScreen>
    );
};
