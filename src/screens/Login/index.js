import React from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { LoginInputs } from './components/LoginInputs';
import { styles } from './style';

export const Login = () => {

    return (
        <View style={styles.bodyScreen}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/Images/fundo.png')}
                    style={styles.image}
                />
            </View>
            <KeyboardAvoidingView
                behavior={'position'}
                keyboardVerticalOffset={40}
                style={styles.viewAll}>
                <Image
                    source={require('../../assets/Images/logo.png')}
                    style={styles.logoImage}
                />
                <View style={styles.bottomView}>
                    <Text style={styles.textLogin}>
                        Login
                    </Text>
                    <Text style={styles.continueText}>
                        Entre na sua conta para continuar.
                    </Text>
                </View>
                <LoginInputs />
            </KeyboardAvoidingView>
        </View>
    )
}
