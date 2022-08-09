import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { LoginInputs } from './components/LoginInputs';
import { styles } from './style'

export const Login = () => {

    return (
        <View style={styles.BodyScreen}>
            <Image
                source={require('../../assets/Images/fundo.png')}
                style={styles.Image}
            />
            <View style={styles.ViewAll}>
                <Image
                    source={require('../../assets/Images/logo.png')}
                    style={styles.LogoImage} />
                <View style={styles.BottomView}>
                    <Text style={styles.TextLogin}>
                        Login
                    </Text>
                    <Text style={styles.ContinueText}>
                        Entre na sua conta para continuar.
                    </Text>
                </View>
                <LoginInputs />
            </View>
        </View>
    )
}
