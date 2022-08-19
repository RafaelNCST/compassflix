import React, { useState, useContext } from 'react';
import { LoginContext } from '../../../../contexts/loginContext';

import * as Styled from './style';
import { Modal } from 'react-native';
import { instance } from '../../../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const LogoutButton = () => {
    const [visible, setVisible] = useState(false);
    const { sessionId, changeSessionID } = useContext(LoginContext);

    const logoutRequest = () => {
        instance
            .delete('authentication/session', {
                data: { session_id: sessionId },
            })
            .then(resp => {
                if (resp.data.success) {
                    changeSessionID(false, null);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <Styled.ButtonStyled onPress={() => setVisible(true)}>
                <Icon name='logout' size={11} color='#000000' />
                <Styled.ButtonText>Sair</Styled.ButtonText>
            </Styled.ButtonStyled>
            <Modal visible={visible} animationType='fade' transparent={true}>
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
                                    Cancelar
                                </Styled.TextModal>
                            </Styled.Button>
                            <Styled.Button
                                onPress={() => logoutRequest()}
                                backColor={'#FFFFFF'}
                            >
                                <Styled.TextModal
                                    nameFont={'OpenSans-Bold'}
                                    sizeFont={10}
                                    color={'#000000'}
                                    margin={0}
                                >
                                    Sair
                                </Styled.TextModal>
                            </Styled.Button>
                        </Styled.ButtonContainer>
                    </Styled.ModalContainer>
                </Styled.BodyModal>
            </Modal>
        </>
    );
};
