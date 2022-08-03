import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/loginContext'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style'

export const Login = () => {

    const { setIsSignedIn } = useContext(LoginContext);

    return null
}
