import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import { styles } from './style';
import { CreditsComponent } from './components/Credits';
import { DetailsMovieComponent } from './/components/DetailMovie'
import { instance } from '../../services/api'

import { LoadingScreensApis } from '../../components/LoadingScreensApis'

export const DetailsMovie = () => {

    const [detail, setDetail] = useState({});
    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const Navigation = useNavigation()
    const { idFilmes } = useRoute().params;

    const getDetail = async () => {
        await instance.get(`movie/${idFilmes}?&language=pt-BR`)
            .then(resp => {
                setDetail(resp.data);
            })
            .catch(error => console.log(error));
    }

    const getCast = async () => {
        await instance.get(`movie/${idFilmes}/credits?&language=pt-BR`)
            .then(resp => {
                setCast(resp.data.cast);
                setCrew(resp.data.crew)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getDetail();
        getCast();
        setTimeout(() => {
            setLoading(true);
        }, 2000)
    }, []);


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
                    />
                    < CreditsComponent
                        cast={cast}
                    />
                </>
            ) : (
                <LoadingScreensApis />
            )
            }
        </View>
    )
}
