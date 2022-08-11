import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { styles } from './style';
import { CreditsComponent } from './components/Credits';
import { DetailsMovieComponent } from './/components/DetailMovie'
import { instance, apiKey } from '../../services/api'

export const DetailsMovie = () => {

    const [loadingFilm, setLoadingFilm] = useState(false)
    const [loadingCredits, setLoadingCredits] = useState(false)
    const [detail, setDetail] = useState({});
    const [cast, setCast] = useState([])
    const [visible, setVisible] = useState(false)

    const Navigation = useNavigation()

    const getDetail = async () => {
        await instance.get(`movie/616037?api_key=${apiKey}&language=pt-BR`)
            .then(resp => {
                setDetail(resp.data);
                setLoadingFilm(true)
            })
            .catch(error => console.log(error));
    }

    const getCast = async () => {
        await instance.get(`movie/616037/credits?api_key=${apiKey}&language=pt-BR`)
            .then(resp => {
                setCast(resp.data.cast);
                setLoadingCredits(true);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getDetail();
        getCast();
    }, [])


    return (
        <View style={styles.bodyScreen}>
            {loadingFilm && loadingCredits &&
                <>
                    <DetailsMovieComponent
                        Navigation={Navigation}
                        detail={detail}
                        visible={visible}
                        setVisible={setVisible}
                    />
                    < CreditsComponent
                        cast={cast}
                    />
                </>
            }
        </View>
    )
}
