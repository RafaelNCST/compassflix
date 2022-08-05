import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { DataHome } from '../../helpers/dataListHome';
import { styles } from './style'
import { ItensList } from './components/itemList';

export const Home = () => {
    const name = 'Jhon'

    return (
        <View style={styles.bodyScreen}>
            <Text style={styles.bodyScreenName}>
                {`Olá, ${name}!`}
            </Text>
            <Text style={styles.bodyScreenSubtitle}>
                Reveja ou acompanhe os filmes que você assistiu...
            </Text>
            <Text style={styles.bodyScreenPopularMovies}>
                Filmes populares este mês
            </Text>

            <FlatList
                data={DataHome}
                contentContainerStyle={styles.containerPopularMovies}
                numColumns={4}
                key={'_'}
                keyExtractor={item => "_" + item.id}
                renderItem={({ item }) => {
                    return (
                        <ItensList
                            listaDeFilmes={item.image}
                            notaDosFilmes={item.note}
                        />
                    )
                }}
            />
        </View>
    )
}