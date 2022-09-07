import React from 'react';

import * as Styled from './style';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const BackButton = () => {
    const Navigation = useNavigation();

    return (
        <Styled.BackButtonStyled onPress={() => Navigation.goBack()}>
            <Icon
                name='arrow-back'
                size={20}
                color={'black'}
                testID='ArrowBack'
            />
        </Styled.BackButtonStyled>
    );
};
