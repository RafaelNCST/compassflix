import React from 'react';
import { FlatList } from 'react-native';
import * as Styled from './style';

import { SpinnerMultiColor } from '../../../../components/SpinnerMultiColor';
import { ItemList } from '../ItemList';
import { BlankList } from '../BlankList';

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
}) => {
    return (
        <Styled.ContainerList>
            <FlatList
                data={createLists}
                testID='flatlistCards'
                keyExtractor={(_, index) => index}
                onEndReached={page < totalPages ? handlerInfiniteScroll : null}
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
                        />
                    );
                }}
            />
        </Styled.ContainerList>
    );
};
