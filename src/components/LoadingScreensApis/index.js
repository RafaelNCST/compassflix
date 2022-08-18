import React from 'react';
import { View } from 'react-native';

import { styles } from './style';

import Lottie from 'lottie-react-native';

export const LoadingScreensApis = () => {
    return (
        <View style={styles.loadingApis}>
            <View style={styles.containerAnimationLoading}>
                <Lottie
                    source={require('../../assets/lottie/movie-loading.json')}
                    loop={true}
                    autoPlay
                    resizeMode='contain'
                />
            </View>
        </View>
    );
};
