import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { DataHome } from '../../helpers/dataListHome';
import { styles } from './style'
import { ItensList } from './components/itemList';
import { instance, apiKey } from '../../services/api'

export const Home = () => {
    const name = 'Jhon'
    const [filmeList, setFilmeList] = useState([]);
    const getRequestKey = async () => {
        await instance.get(`/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`) //${apiKey}
            .then(resp => {
                setFilmeList(resp.data.results)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getRequestKey()
    }, [])

    return (
        <View style={styles.bodyScreen}>
            <Text style={styles.bodyScreenName}>
                Olá, <Text style={{ color: '#e9a6a6' }}> {name}</Text>!
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
        </View >
    )
}