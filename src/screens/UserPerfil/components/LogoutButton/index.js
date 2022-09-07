import React from 'react';
import * as Styled from './style';
import { Modal } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { SpinnerMultiColor } from '../../../../components/SpinnerMultiColor';

export const LogoutButton = ({
    logoutApi,
    visible,
    setVisible,
    logoutLoading,
}) => {
    return (
        <>
            <Styled.ButtonStyled onPress={() => setVisible(true)}>
                <Icon name='logout' size={11} color='#000000' />
                <Styled.ButtonText>Sair</Styled.ButtonText>
            </Styled.ButtonStyled>
            <Modal
                testID='ModalLogout'
                visible={visible}
                animationType='fade'
                transparent={true}
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
                            Deseja mesmo Sair?
                        </Styled.TextModal>
                        <Styled.ButtonContainer>
                            {logoutLoading ? (
                                <SpinnerMultiColor
                                    Loadingstate={true}
                                    size={20}
                                    color={'#000000'}
                                    flexNumber={1}
                                />
                            ) : (
                                <>
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
                                        onPress={() => logoutApi()}
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
                                </>
                            )}
                        </Styled.ButtonContainer>
                    </Styled.ModalContainer>
                </Styled.BodyModal>
            </Modal>
        </>
    );
};
