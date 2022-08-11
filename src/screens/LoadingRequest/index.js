import React, { useContext, useEffect, useState } from 'react';
import Lottie from 'lottie-react-native';

import { LoginContext } from '../../contexts/loginContext';
import { View, Image } from 'react-native';
import { instance, apiKey } from '../../services/api'

import { styles } from './style'

export const SplashScreen = () => {

    const { endLoadingRequest } = useContext(LoginContext)

    const getRequestKey = async () => {
        await instance.get(`authentication/token/new?api_key=${apiKey}`)
            .then(resp => {
                endLoadingRequest(resp.data.request_token, false)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getRequestKey()
    }, [])

    return (
        <View style={styles.bodyScreen}>
            <View style={styles.container}>
                <Image style={styles.imageLogo} source={require('../../assets/Images/logo.png')} />
                <View style={styles.animation}>
                    <Lottie
                        source={require('../../assets/lottie/red-spinner.json')}
                        resizeMode='contain'
                        loop={true}
                        autoPlay />
                </View>
            </View>
        </View>
    )
}