import React, { useContext, useEffect } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { LoginInputs } from './components/LoginInputs';
import { styles } from './style';

import { instance } from '../../services/api';
import { SpinnerRed } from '../../components/SpinnerRed';

import { LoginContext } from '../../contexts/loginContext';

export const Login = () => {
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
        <View style={styles.bodyScreen}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/Images/fundo.png')}
                    style={styles.image}
                />
            </View>
            {isLoading ? (
                <SpinnerRed height={100} width={100} />
            ) : (
                <KeyboardAvoidingView
                    behavior={'position'}
                    keyboardVerticalOffset={40}
                    style={styles.viewAll}
                >
                    <Image
                        source={require('../../assets/Images/logo.png')}
                        style={styles.logoImage}
                    />
                    <View style={styles.bottomView}>
                        <Text style={styles.textLogin}>Login</Text>
                        <Text style={styles.continueText}>
                            Entre na sua conta para continuar.
                        </Text>
                    </View>
                    <LoginInputs />
                </KeyboardAvoidingView>
            )}
        </View>
    );
};
