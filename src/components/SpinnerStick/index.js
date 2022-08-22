import React from 'react';

import * as Styled from './style';

import Lottie from 'lottie-react-native';

export const SpinnerStick = () => {
    return (
        <Styled.LottieView>
            <Lottie
                source={require('../../assets/lottie/spinnerStick.json')}
                resizeMode='contain'
                loop={true}
                autoPlay
            />
        </Styled.LottieView>
    );
};
