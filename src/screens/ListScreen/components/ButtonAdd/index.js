import React from 'react';

import * as Styled from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Modal } from 'react-native';

export const ButtonAdd = ({
    handleAddList,
    setNameList,
    setDescList,
    visibleAdd,
    setVisibleAdd,
}) => {
    return (
        <>
            <Styled.AddButtonList onPress={() => setVisibleAdd(true)}>
                <Icon name='add' color='#000' size={40} />
            </Styled.AddButtonList>
            <Modal animationType='fade' transparent={true} visible={visibleAdd}>
                <Styled.ListBodyModal>
                    <Styled.ListContainerModal>
                        <Styled.TextListModal>Nova lista</Styled.TextListModal>
                        <Styled.TopInputModal
                            onChangeText={text => setNameList(text)}
                            placeholder='Nome da lista'
                        />
                        <Styled.BottomInputModal
                            onChangeText={text => setDescList(text)}
                            placeholder='Descrição'
                        />
                        <Styled.BottomView>
                            <Styled.ButtonModal
                                onPress={() => setVisibleAdd(false)}
                            >
                                <Styled.CancelText>CANCELAR</Styled.CancelText>
                            </Styled.ButtonModal>
                            <Styled.ButtonModal onPress={() => handleAddList()}>
                                <Styled.SaveText>SALVAR</Styled.SaveText>
                            </Styled.ButtonModal>
                        </Styled.BottomView>
                    </Styled.ListContainerModal>
                </Styled.ListBodyModal>
            </Modal>
        </>
    );
};
