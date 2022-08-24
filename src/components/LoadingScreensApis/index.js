import React from 'react';
import { View } from 'react-native';

import { styles } from './style';
import * as Styled from './style';
import Lottie from 'lottie-react-native';

export const LoadingScreensApis = () => {
    return (
        <Styled.loadingApis>
            <Styled.containerAnimationLoading>
                <Lottie
                    source={require('../../assets/lottie/movie-loading.json')}
                    loop={true}
                    autoPlay
                    resizeMode='contain'
                />
            </Styled.containerAnimationLoading>
        </Styled.loadingApis>
    );
};
