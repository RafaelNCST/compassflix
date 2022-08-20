import styled from 'styled-components/native';

export const ContainerMid = styled.View`
    height: 51px;
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-top-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.19);
`;

export const ImageButton = styled.Image`
    width: 28px;
    height: 28px;
`;

export const ButtonMenu = styled.TouchableOpacity`
    height: 100%;
    width: 50%;
    align-items: center;
    justify-content: center;
    border-left-width: ${props => props.sizeLeft || 0}px;
    border-right-width: ${props => props.sizeRight || 0}px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.19);
`;
