import React, { useState, useContext } from 'react';
import { LoginContext } from '../../../../contexts/loginContext';
import { styles } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import * as Styled from './style';

import { instance } from '../../../../services/api';

import { SpinnerRed } from '../../../../components/SpinnerRed';

export const LoginInputs = () => {
    const [hidePass, setHidePass] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [erroruser, setErrorUser] = useState(false);
    const [errorpass, setErrorPass] = useState(false);

    const { requestKey, changeSessionID } = useContext(LoginContext);

    const requestApiInputs = async () => {
        await instance
            .post('authentication/token/validate_with_login?', {
                username: username,
                password: password,
                request_token: requestKey,
            })
            .then(resp => {
                setLoading(false);
                createSession(resp?.data?.request_token);
            })
            .catch(error => {
                setLoading(false);
                setErrorUser(true);
                setErrorPass(true);
                setPassword('');
                if (error?.response?.status === 401) {
                    console.log('Usuário ou senha inválidos!');
                    setMessage('Usuário ou senha inválidos!');
                } else {
                    console.log('Falha no Login, tente mais tarde');
                    setMessage('Falha no Login, tente mais tarde');
                }
            });
    };

    const createSession = async requestToken => {
        await instance
            .post('authentication/session/new?', {
                request_token: requestToken,
            })
            .then(resp => {
                changeSessionID(true, resp?.data?.session_id);
            })
            .catch(error => {
                setPassword('');
                setErrorUser(true);
                setErrorPass(true);
                console.log(error);
            });
    };

    const changeCharSpecial = Text => {
        setErrorUser(false);
        if (/\W/.test(Text)) {
            setUsername(username.replace(Text, ''));
        } else {
            setUsername(Text);
        }
    };

    const validInput = () => {
        setErrorUser(false);
        setErrorPass(false);
        setLoading(true);
        if (username === '' && password === '') {
            setErrorUser(true);
            setErrorPass(true);
            setMessage('Preencha todos os campos');
            setLoading(false);
        } else if (username === '') {
            setErrorUser(true);
            setPassword('');
            setMessage('Preencha seu Usuário');
            setLoading(false);
        } else if (password === '') {
            setErrorPass(true);
            setMessage('Preencha sua senha');
            setLoading(false);
        } else {
            requestApiInputs();
        }
    };

    return (
        <>
            <Styled.LoginInput>
                <Animatable.View
                    style={styles.input}
                    animation={erroruser ? 'shake' : null}
                    useNativeDriver
                >
                    <Icon
                        name='account-circle'
                        size={20}
                        color={
                            erroruser ? '#EC2626' : 'rgba(255, 255, 255, 0.5)'
                        }
                    />
                    <Styled.TextStyle
                        placeholder='Usuário'
                        placeholderTextColor={
                            erroruser ? '#EC2626' : 'rgba(255, 255, 255, 0.5)'
                        }
                        onChangeText={Text => changeCharSpecial(Text)}
                        value={username}
                    />
                </Animatable.View>

                <Animatable.View
                    style={styles.input}
                    animation={errorpass ? 'shake' : null}
                    useNativeDriver
                >
                    <Icon
                        name='lock'
                        size={18}
                        color={
                            errorpass ? '#EC2626' : 'rgba(255, 255, 255, 0.5)'
                        }
                    />
                    <Styled.TextStyle
                        placeholder='senha'
                        placeholderTextColor={
                            errorpass ? '#EC2626' : 'rgba(255, 255, 255, 0.5)'
                        }
                        value={password}
                        onChangeText={Text => {
                            setPassword(Text);
                            setErrorPass(false);
                        }}
                        secureTextEntry={hidePass}
                    />
                    <Styled.Eye
                        style={styles.eye}
                        onPress={() => setHidePass(!hidePass)}
                    >
                        <Icon
                            name={hidePass ? 'visibility' : 'visibility-off'}
                            color='rgba(255, 255, 255, 0.5)'
                            size={20}
                        />
                    </Styled.Eye>
                </Animatable.View>
            </Styled.LoginInput>

            <Styled.ErrorContainer>
                {(erroruser || errorpass) && (
                    <Styled.ErrorText>{message}</Styled.ErrorText>
                )}
            </Styled.ErrorContainer>

            {loading ? (
                <SpinnerRed height={40} width={'100%'} />
            ) : (
                <Styled.Button onPress={validInput}>
                    <Styled.Enter>Entrar</Styled.Enter>
                </Styled.Button>
            )}
        </>
    );
};
