import React, { useState, useEffect, useContext, Fragment } from 'react';
import { View, Text, FlatList } from 'react-native';
import { DataHome } from '../../helpers/dataListHome';
import { styles } from './style'
import { ItensList } from './components/itemList';
import { instance, apiKey } from '../../services/api'
import { LoginContext } from '../../contexts/loginContext';

export const Home = () => {

    const [filmeList, setFilmeList] = useState([]);
    const [name, setName] = useState('');
    const { requestKey } = useContext(LoginContext);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');

    const getRequestName = async () => {
        await instance.get(`/account?api_key=${apiKey}&session_id=${requestKey}`)
            .then(resp => {
                setName(resp?.data?.name)
                setUserName(resp?.data?.username)

            })
            .catch(error => console.log(error))
    }

    const getRequestKey = async () => {
        await instance.get(`/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`) //${apiKey}
            .then(resp => {
                setFilmeList(resp.data.results)
                setLoading(true)
            })
            .catch(error => console.log(error))
    }
    const getRequestApi = () => {
        getRequestName()
        getRequestKey()
    }

    useEffect(() => {
        getRequestApi()
    }, [loading])

    return (
        <View style={styles.bodyScreen}>
            {loading &&
                <>
                    <Text style={styles.bodyScreenName}>
                        Olá, <Text style={{ color: '#e9a6a6' }}> {name || userName}</Text>!
                    </Text>
                    <Text style={styles.bodyScreenSubtitle}>
                        Reveja ou acompanhe os filmes que você assistiu...
                    </Text>
                    <Text style={styles.bodyScreenPopularMovies}>
                        Filmes populares este mês
                    </Text>

                    <FlatList
                        data={filmeList}
                        contentContainerStyle={styles.containerPopularMovies}
                        numColumns={4}
                        key={'_'}
                        keyExtractor={item => "_" + item.id}
                        renderItem={({ item }) => {
                            return (
                                <ItensList
                                    listaDeFilmes={item.poster_path}
                                    notaDosFilmes={item.vote_average}
                                    idFilmes={item.id}
                                />
                            )
                        }}
                    />
                </>
            }
        </View >
    )
}