import React from 'react';
import * as Styled from './style';
import {
    TextSubTitle,
    TextInfos,
} from '../../../../components/StyledComponents/GlobalStyleds';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalRemoveItem } from '../../../../components/ModalRemoveItem';

export const ItemList = ({
    item,
    handleDeleteList,
    visible,
    setVisible,
    activeModalDeleteItem,
    itemID,
    Navigation,
}) => {
    return (
        <Styled.ContainerCard>
            <Styled.ButtonDetailList
                onPress={() =>
                    Navigation.navigate('DetailListScreen', { ID: item.id })
                }
            >
                <Styled.ContainerInfos>
                    <TextSubTitle size={12} color='#FFFFFF'>
                        {item?.name}
                    </TextSubTitle>
                    <TextInfos fontFamily='OpenSans-SemiBold' color='#FFFFFF'>
                        {item?.item_count} FILMES
                    </TextInfos>
                </Styled.ContainerInfos>
            </Styled.ButtonDetailList>

            <ModalRemoveItem
                text='Deseja remover a lista?'
                visible={visible}
                setVisible={setVisible}
                handleDeleteList={handleDeleteList}
                itemID={itemID}
            />

            <Styled.ButtonDeleteList
                onPress={() => activeModalDeleteItem(item.id)}
            >
                <Icon
                    name='delete-forever'
                    size={20}
                    color='rgba(236, 38, 38, 0.6)'
                    testID='DeleteIcon'
                />
            </Styled.ButtonDeleteList>
        </Styled.ContainerCard>
    );
};
