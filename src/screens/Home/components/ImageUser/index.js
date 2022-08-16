import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import anonimo from '../../../../assets/Images/imagemAnonima.jpg';
import { styles } from './style';

export const ImageUser = ({ ImageUser }) => {
    return (
        <TouchableOpacity style={styles.containerImageUser}>
            <Image style={styles.imageUser} source={ImageUser || anonimo} />
        </TouchableOpacity>
    );
};
