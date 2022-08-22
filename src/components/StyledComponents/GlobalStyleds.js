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
    text-align: center;
    font-size: 11px;
`;
