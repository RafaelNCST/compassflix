import React from 'react'
import { View, ActivityIndicator } from 'react-native';

import { styles } from './style';

export const FooterComponentLoading = ({ loadingScroll }) => {
    if (!loadingScroll) return null;

    return (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator size={25} color={'#F3503A'} />
        </View>
    )
}