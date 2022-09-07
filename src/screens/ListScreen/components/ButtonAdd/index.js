import React, { useState } from 'react';

import * as Styled from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Modal } from 'react-native';

export const ButtonAdd = () => {
    const [visible, setVisible] = useState(false);
    return (
        <Styled.ScreenView>
            <Styled.AddButtonList onPress={() => setVisible(true)}>
                <Icon name='add' color='#000' size={40} />
            </Styled.AddButtonList>
            <Modal animationType='fade' transparent={true} visible={visible}>
                <Styled.ListBodyModal>
                    <Styled.ListContainerModal>
                        <Styled.TextListModal>Nova lista</Styled.TextListModal>
                        <Styled.TopInputModal>
                            Nome da lista
                        </Styled.TopInputModal>
                        <Styled.BottomInputModal>
                            Descrição
                        </Styled.BottomInputModal>
                        <Styled.BottomView>
                            <Styled.ButtonModal>
                                <Styled.CancelText
                                    onPress={() => setVisible(false)}
                                >
                                    CANCELAR
                                </Styled.CancelText>
                            </Styled.ButtonModal>
                            <Styled.ButtonModal>
                                <Styled.SaveText>SALVAR</Styled.SaveText>
                            </Styled.ButtonModal>
                        </Styled.BottomView>
                    </Styled.ListContainerModal>
                </Styled.ListBodyModal>
            </Modal>
        </Styled.ScreenView>
    );
};
//.
