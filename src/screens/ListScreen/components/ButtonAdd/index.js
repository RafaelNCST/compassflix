import React from 'react';

import * as Styled from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ButtonAdd = () => {
    return (
        <Styled.TestScreenView>
            <Styled.AddButtonList>
                <Icon name='add' color='#000' size={40} />
            </Styled.AddButtonList>
        </Styled.TestScreenView>
    );
};
