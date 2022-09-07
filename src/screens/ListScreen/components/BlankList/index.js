import React from 'react';
import * as Styled from './style';
import { TextInfos } from '../../../../components/StyledComponents/GlobalStyleds';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const BlankList = ({ BlankText }) => {
    return (
        <Styled.ContainerTextBlank width={width} height={height}>
            <TextInfos fontFamily='OpenSans-Regular' color='#FFFFFF'>
                {BlankText}
            </TextInfos>
        </Styled.ContainerTextBlank>
    );
};
