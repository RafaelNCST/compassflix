import React, { useContext } from 'react';
import { ListHomeContext } from '../../contexts/listHomeContext';

import * as Styled from './style';

import { ListHome } from '../../components/FlatListHome';
import { BackButton } from '../../components/StyledComponents/BackButton';

import { BodyScreen } from '../../components/StyledComponents/GlobalStyleds';

import { useRoute } from '@react-navigation/native';

export const PageSeeMore = () => {
    const { userInfos } = useContext(ListHomeContext);

    const route = useRoute();

    return (
        <BodyScreen>
            <BackButton />
            <Styled.TextTitle color={'#FFFFFF'}>
                {route?.params?.Title}{' '}
                <Styled.TextTitle color={'#E9A6A6'}>
                    {userInfos?.name || userInfos?.username}
                </Styled.TextTitle>
                !
            </Styled.TextTitle>
        </BodyScreen>
    );
};
