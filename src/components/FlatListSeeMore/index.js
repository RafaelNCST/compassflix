import React from 'react';
import { SpinnerMultiColor } from '../SpinnerMultiColor';
import { ItensSeeMoreList } from './components/ItensList';

import * as Styled from './style';
import { styles } from './style';

import { FlatList } from 'react-native';

export const ListSeeMore = ({
    data,
    loadingScroll,
    totalPages,
    loadInfiniteScroll,
    lastPage,
    program,
    type,
    TypeButton,
}) => {
    const blank1 = program === 'movies' ? 'filme' : 'série';
    const blank2 = type === 'favorite' ? 'favoritou' : 'avaliou';

    console.log(TypeButton());

    return (
        <>
            {totalPages === 0 ? (
                <Styled.BlankInfos>
                    <Styled.BlankText>
                        {`Você ainda não ${blank2} nenhum(a) ${blank1} :(`}
                    </Styled.BlankText>
                </Styled.BlankInfos>
            ) : (
                <FlatList
                    data={data}
                    contentContainerStyle={styles.ContainerFlatList}
                    numColumns={4}
                    onEndReached={
                        lastPage < totalPages ? loadInfiniteScroll : null
                    }
                    onEndReachedThreshold={0.2}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item }) => {
                        return (
                            <ItensSeeMoreList
                                listItens={item?.poster_path}
                                noteItens={item?.rating}
                                idItens={item?.id}
                                typeNavigation={TypeButton}
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
