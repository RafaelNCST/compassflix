import React, { useContext, useEffect } from 'react';
import { KeyboardAvoidingView, Dimensions } from 'react-native';
import { LoginInputs } from './components/LoginInputs';
import { styles } from './style';
import * as Styled from './style';

import { instance } from '../../services/api';
import { SpinnerRed } from '../../components/SpinnerRed';

import { LoginContext } from '../../contexts/loginContext';

export const Login = () => {
    const height = Dimensions.get('screen').height;
    const width = Dimensions.get('screen').width;

    const { endLoadingRequest, isLoading } = useContext(LoginContext);

    useEffect(() => {
        instance
            .get('authentication/token/new?')
            .then(resp => {
                endLoadingRequest(resp.data.request_token, false);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <Styled.BodyScreen>
            <Styled.ImageContainer height={height} width={width}>
                <Styled.image
                    source={require('../../assets/Images/fundo.png')}
                    style={styles.image}
                />
            </Styled.ImageContainer>
            {isLoading ? (
                <SpinnerRed height={100} width={100} />
            ) : (
                <KeyboardAvoidingView
                    behavior={'position'}
                    keyboardVerticalOffset={40}
                    style={styles.viewAll}
                >
                    <Styled.LogoImage
                        source={require('../../assets/Images/logo.png')}
                        style={styles.logoImage}
                    />
                    <Styled.BottomView>
                        <Styled.TextLogin>Login</Styled.TextLogin>
                        <Styled.ContinueText>
                            Entre na sua conta para continuar.
                        </Styled.ContinueText>
                    </Styled.BottomView>
                    <LoginInputs />
                </KeyboardAvoidingView>
            )}
        </Styled.BodyScreen>
    );
};
