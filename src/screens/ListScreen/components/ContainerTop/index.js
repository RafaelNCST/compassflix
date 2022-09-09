import React from 'react';
import * as Styled from './style';

import { BackButton } from '../../../../components/StyledComponents/BackButton';
import { TextTitle } from '../../../PageSeeMore/style';

export const ContainerTop = () => {
    return (
        <Styled.ContainerTop>
            <BackButton />
            <TextTitle size={20} color='#FFFFFF'>
                Minhas Listas
            </TextTitle>
        </Styled.ContainerTop>
    );
};
