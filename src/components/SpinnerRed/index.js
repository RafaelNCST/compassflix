import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

import { styles } from './style';

export const SpinnerRed = ({ height, width }) => {
    return (
        <View style={[styles.animation, { width: width, height: height }]}>
            <Lottie
                source={require('../../assets/lottie/spinner-red.json')}
                resizeMode='contain'
                loop={true}
                autoPlay
            />
        </View>
    );
};
