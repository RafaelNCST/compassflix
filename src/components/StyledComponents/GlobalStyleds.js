import styled from 'styled-components/native';

export const BodyScreen = styled.View`
    flex: 1;
    background-color: #000000;
    align-items: center;
`;

export const TextInfos = styled.Text`
    font-family: ${props => props.fontFamily};
    color: ${props => props.color};
    line-height: 15px;
    font-size: 11px;
`;

export const TextTitle = styled.Text`
    font-family: 'OpenSans-Bold';
    color: ${props => props.color};
    line-height: 20px;
    font-size: ${props => props.size}px;
`;

export const TextSubTitle = styled.Text`
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.color};
    line-height: 16px;
    font-size: ${props => props.size}px;
`;
