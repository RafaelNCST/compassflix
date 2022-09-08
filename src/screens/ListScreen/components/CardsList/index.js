import React from 'react';
import { FlatList } from 'react-native';
import * as Styled from './style';

import { SpinnerMultiColor } from '../../../../components/SpinnerMultiColor';
import { ItemList } from '../ItemList';
import { BlankList } from '../../../../components/BlankList';

export const CardsList = ({
    createLists,
    handlerInfiniteScroll,
    loadingScroll,
    page,
    totalPages,
    handleDeleteList,
    visible,
    setVisible,
    activeModalDeleteItem,
    itemID,
    loading,
    Navigation,
}) => {
    return (
        <Styled.ContainerList>
            {loading ? (
                <SpinnerMultiColor
                    flexNumber={1}
                    color='#FFFFFF'
                    size={20}
                    Loadingstate={loading}
                />
            ) : (
                <FlatList
                    data={createLists}
                    testID='flatlistCards'
                    keyExtractor={(_, index) => index}
                    onEndReached={
                        page < totalPages ? handlerInfiniteScroll : null
                    }
                    onEndReachedThreshold={0.3}
                    ListEmptyComponent={
                        <BlankList BlankText='Você ainda não possui nenhuma lista :(' />
                    }
                    ListFooterComponent={
                        <SpinnerMultiColor
                            Loadingstate={loadingScroll}
                            size={20}
                            color='#FFFFFF'
                            flexNumber={0}
                        />
                    }
                    renderItem={({ item }) => {
                        return (
                            <ItemList
                                item={item}
                                handleDeleteList={handleDeleteList}
                                visible={visible}
                                setVisible={setVisible}
                                activeModalDeleteItem={activeModalDeleteItem}
                                itemID={itemID}
                                Navigation={Navigation}
                            />
                        );
                    }}
                />
            )}
        </Styled.ContainerList>
    );
};
