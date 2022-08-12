import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './style'
import { ItensList } from './components/itemList';
import { instance } from '../../services/api'
import { LoginContext } from '../../contexts/loginContext';

import { LoadingScreensApis } from '../../components/LoadingScreensApis'

import { FooterComponentLoading } from './components/FooterComponentLoading';

export const Home = () => {

    const [filmeList, setFilmeList] = useState([]);
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingScroll, setLoadingScroll] = useState(false);
    const [username, setUserName] = useState('');
    const [lastPage, setLastPage] = useState(1);

    const { sessionId } = useContext(LoginContext);

    const getRequestName = async () => {
        await instance.get(`account?&session_id=${sessionId}`)
            .then(resp => {
                setName(resp?.data?.name)
                setUserName(resp?.data?.username)
            })
            .catch(error => {
                console.log(error)
            });
    }


    const loadInfiniteScroll = () => {
        if (loadingScroll) return null;
        setLoadingScroll(true);
        setLastPage(lastPage + 1);
    }

    const requestMovieListFilms = async () => {
        await instance.get(`movie/popular?&language=pt-BR&page=${lastPage}`)
            .then(resp => {
                setFilmeList([...filmeList, ...resp.data.results]);
            })
            .finally(() => setLoadingScroll(false))
    }

    useEffect(() => {
        if (sessionId) {
            getRequestName()
            requestMovieListFilms();
            setTimeout(() => setLoading(true), 2000);
        }
    }, [sessionId])


    useEffect(() => {
        if (loadingScroll) setTimeout(() => requestMovieListFilms(), 2000);
    }, [lastPage])

    return (
        <View style={styles.bodyScreen}>
            {loading ? (
                <>
                    <Text style={styles.bodyScreenName}>
                        Olá, <Text style={{ color: '#e9a6a6' }}> {name || username}</Text>!
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
                        onEndReached={loadInfiniteScroll}
                        onEndReachedThreshold={0.3}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {
                            return (
                                <ItensList
                                    listaDeFilmes={item.poster_path}
                                    notaDosFilmes={item.vote_average}
                                    idFilmes={item.id}
                                />
                            )
                        }}
                        ListFooterComponent={() => {
                            return (
                                <FooterComponentLoading loadingScroll={loadingScroll} />
                            )
                        }}
                    />
                </>
            ) : (
                <LoadingScreensApis />
            )
            }

        </View >
    )
}