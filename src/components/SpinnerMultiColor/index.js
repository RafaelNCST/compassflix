import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './style';

export const SpinnerMultiColor = ({
    Loadingstate,
    size,
    color,
    flexNumber,
}) => {
    if (!Loadingstate) return null;

    return (
        <View style={[styles.spinnerContainer, { flex: flexNumber }]}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
};
