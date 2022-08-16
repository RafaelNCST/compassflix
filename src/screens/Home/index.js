import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './style';
import { ItensList } from './components/itemList';
import { instance } from '../../services/api';
import { LoginContext } from '../../contexts/loginContext';
import { SpinnerMultiColor } from '../../components/SpinnerMultiColor';

import { ImageUser } from './components/ImageUser';

export const Home = () => {
    const [filmeList, setFilmeList] = useState([]);
    const [userInfos, setUserInfos] = useState({});
    const [loading, setLoading] = useState(true);
    const [loadingScroll, setLoadingScroll] = useState(false);
    const [lastPage, setLastPage] = useState(1);
    const { sessionId } = useContext(LoginContext);

    const getRequestInfosUser = async () => {
        await instance
            .get(`account?&session_id=${sessionId}`)
            .then(resp => {
                setUserInfos(resp?.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const loadInfiniteScroll = () => {
        if (loadingScroll) return null;
        setLoadingScroll(true);
        setLastPage(prev => prev + 1);
    };

    const requestMovieListFilms = async () => {
        await instance
            .get(`movie/popular?&language=pt-BR&page=${lastPage}`)
            .then(resp => {
                setFilmeList([...filmeList, ...resp.data.results]);
                setLoading(false);
            })
            .finally(() => setLoadingScroll(false));
    };

    useEffect(() => {
        if (sessionId) {
            getRequestInfosUser();
            requestMovieListFilms();
        }
    }, [sessionId]);

    useEffect(() => {
        if (loadingScroll) setTimeout(() => requestMovieListFilms(), 2000);
    }, [lastPage]);

    return (
        <View style={styles.bodyScreen}>
            <ImageUser userImage={userInfos?.avatar?.tmdb?.avatar_path} />
            <Text style={styles.bodyScreenName}>
                {'Olá,  '}
                <Text style={{ color: '#e9a6a6' }}>
                    {userInfos?.name || userInfos?.username}
                </Text>
                !
            </Text>
            <Text style={styles.bodyScreenSubtitle}>
                Reveja ou acompanhe os filmes que você assistiu...
            </Text>
            <Text style={styles.bodyScreenPopularMovies}>
                Filmes populares este mês
            </Text>
            {loading ? (
                <SpinnerMultiColor
                    Loadingstate={true}
                    size={40}
                    color={'#FFFFFF'}
                    flexNumber={1}
                />
            ) : (
                <FlatList
                    data={filmeList}
                    contentContainerStyle={styles.containerPopularMovies}
                    numColumns={4}
                    onEndReached={loadInfiniteScroll}
                    onEndReachedThreshold={0.3}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item }) => {
                        return (
                            <ItensList
                                listaDeFilmes={item.poster_path}
                                notaDosFilmes={item.vote_average}
                                idFilmes={item.id}
                            />
                        );
                    }}
                    ListFooterComponent={() => {
                        return (
                            <SpinnerMultiColor
                                Loadingstate={loadingScroll}
                                size={25}
                                color={'#FFFFFF'}
                                flexNumber={0}
                            />
                        );
                    }}
                />
            )}
        </View>
    );
};
