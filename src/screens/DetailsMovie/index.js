import React, { useState, useEffect, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { styles } from "./style";
import { CreditsComponent } from "./components/Credits";
import { DetailsMovieComponent } from ".//components/DetailMovie";
import { instance } from "../../services/api";
import { LoginContext } from "../../contexts/loginContext";
import { LoadingScreensApis } from "../../components/LoadingScreensApis";

export const DetailsMovie = () => {
    const { sessionId } = useContext(LoginContext);
    const [noteAvaliation, setNoteAvaliation] = useState('');
    const [markFavorite, setMarkFavorite] = useState(false);
    const [detail, setDetail] = useState({});
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [note, setNote] = useState(false);
    const [movieStates, setMovieStates] = useState({});

    const Navigation = useNavigation();
    const { idFilmes } = useRoute().params;

    const getStates = async () => {
        await instance.get(`movie/${idFilmes}/account_states?&session_id=${sessionId}`)
            .then((resp) => {
                setMovieStates(resp?.data);
                console.log(resp?.data?.favorite)

            })
            .catch((error) => {
                if(error.response){
                    console.log(error.response.data);
                }else if(error.request){
                    console.log(error.request.data);
                }else{
                    console.log('Error', error.message);
                }
            })
    }

    const getDetail = async () => {
        await instance
            .get(`movie/${idFilmes}?&language=pt-BR`)
            .then((resp) => {
                setDetail(resp.data);
            
            })
            .catch((error) => console.log(error));
    };

    const getCast = async () => {
        await instance
            .get(`movie/${idFilmes}/credits?&language=pt-BR`)
            .then((resp) => {
                setCast(resp.data.cast);
                setCrew(resp.data.crew);
            })
            .catch((error) => console.log(error));
    };

        useEffect(() => {
            getDetail();
            getCast();
            setTimeout(() => {
                setLoading(true);
            }, 2000);
        }, []);

        useEffect(() => {
            getStates();
        },[noteAvaliation, markFavorite])

        return (
            <View style={styles.bodyScreen}>
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
                            movieStates = {movieStates}
                            markFavorite ={markFavorite}
                            setMarkFavorite={setMarkFavorite}
                            
                        />
                        <CreditsComponent cast={cast} />
                    </>
                ) : (
                    <LoadingScreensApis />
                )}
            </View>
        );
    };
