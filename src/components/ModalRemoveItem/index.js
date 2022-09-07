import React from 'react';
import { Modal } from 'react-native';
import * as Styled from './style';

export const ModalRemoveItem = ({
    text,
    visible,
    setVisible,
    handleDeleteList,
    itemID,
}) => {
    return (
        <Modal
            animationType='fade'
            visible={visible}
            transparent={true}
            testID='ModalLogout'
        >
            <Styled.BodyModal>
                <Styled.ModalContainer>
                    <Styled.TextModal
                        nameFont={'OpenSans-Bold'}
                        sizeFont={14}
                        color={'#000000'}
                        margin={32}
                    >
                        Atenção!
                    </Styled.TextModal>
                    <Styled.TextModal
                        nameFont={'OpenSans-Regular'}
                        sizeFont={13}
                        color={'#8E8E8E'}
                        margin={32}
                    >
                        {text}
                    </Styled.TextModal>
                    <Styled.ButtonContainer>
                        <Styled.Button
                            onPress={() => setVisible(false)}
                            backColor={'#000000'}
                        >
                            <Styled.TextModal
                                nameFont={'OpenSans-Bold'}
                                sizeFont={10}
                                color={'#FFFFFF'}
                                margin={0}
                            >
                                cancelar
                            </Styled.TextModal>
                        </Styled.Button>
                        <Styled.Button
                            onPress={() => handleDeleteList(itemID)}
                            backColor={'#FFFFFF'}
                        >
                            <Styled.TextModal
                                nameFont={'OpenSans-Bold'}
                                sizeFont={10}
                                color={'#000000'}
                                margin={0}
                            >
                                sair
                            </Styled.TextModal>
                        </Styled.Button>
                    </Styled.ButtonContainer>
                </Styled.ModalContainer>
            </Styled.BodyModal>
        </Modal>
    );
};
