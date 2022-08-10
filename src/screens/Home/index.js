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
    const [lastPage, setLastPage] = useState(1);


    const getRequestName = async () => {
        await instance.get(`/account?api_key=${apiKey}&session_id=${requestKey}`)
            .then(resp => {
                setName(resp?.data?.name)
                setUserName(resp?.data?.username)

            })
            .catch(error => console.log(error))
    }
    async function loadingApi() {
        if (loading) return
        setLoading(true)

        const getRequestKey = async () => {
            await instance.get(`/movie/popular?api_key=${apiKey}&language=pt-BR&page=${lastPage}`) //${apiKey}
                .then(resp => {
                    setFilmeList(resp.data)
                    setLoading(true);
                })
                .catch(error => console.log(error))
        }

        setFilmeList([...filmeList, ...getRequestKey.data]);
        setLastPage(page + 1);
        setLoading(false);

    }

    useEffect(() => {
        getRequestName()
        loadingApi()
    }, [])

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
                        data={filmeList.results}
                        contentContainerStyle={styles.containerPopularMovies}
                        numColumns={4}
                        onEndReached={loadingApi}
                        onEndReachedThreshold={1}
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
                    //onEndReached={() => {
                    //   var lastFilm = filmeList.pop();
                    //   setLastPage(lastFilm.data.page)
                    //setLastPage(lastPage => lastPage + 1) //criar um botão no onpress chamar o setLastPage(lastPage => lastPage + 1) e setLastPage(lastPage => lastPage - 1)

                    //}}
                    />

                </>
            }

        </View >
    )
}