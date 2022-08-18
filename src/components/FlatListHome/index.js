import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { SpinnerMultiColor } from '../SpinnerMultiColor';
import { ItensList } from './components/ItensList';
import { ListHomeContext } from '../../contexts/listHomeContext';

import { styles } from './style';

export const ListHome = ({ data }) => {
    // prettier-ignore
    const { loading, loadInfiniteScroll, loadingScroll } = useContext(ListHomeContext);

    return (
        <>
            {loading ? (
                <SpinnerMultiColor
                    Loadingstate={true}
                    size={40}
                    color={'#FFFFFF'}
                    flexNumber={1}
                />
            ) : (
                <FlatList
                    data={data}
                    contentContainerStyle={styles.containerPopularMovies}
                    numColumns={4}
                    onEndReached={loadInfiniteScroll}
                    onEndReachedThreshold={0.2}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item }) => {
                        return (
                            <ItensList
                                listItens={item.poster_path}
                                noteItens={item.vote_average}
                                idItens={item.id}
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
        </>
    );
};
