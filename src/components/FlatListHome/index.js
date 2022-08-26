import React from 'react';
import { FlatList } from 'react-native';
import { SpinnerMultiColor } from '../SpinnerMultiColor';
import { ItensList } from './components/ItensList';

import { styles } from './style';

export const ListHome = ({ loading, data, infiniteScrollFn, loadingState }) => {
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
                    onEndReached={infiniteScrollFn}
                    onEndReachedThreshold={0.2}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item }) => {
                        return (
                            <ItensList
                                listItens={item?.poster_path}
                                noteItens={item?.vote_average}
                                idItens={item?.id}
                            />
                        );
                    }}
                    ListFooterComponent={() => {
                        return (
                            <SpinnerMultiColor
                                Loadingstate={loadingState}
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
