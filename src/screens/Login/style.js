import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const BodyScreen = styled.View`
    flex: 1;
    background-color: #000000;
    align-items: center;
`;
export const ImageContainer = styled.View`
    height: ${props => props.height / 2}px;
    width: ${props => props.width}px;
`;
export const image = styled.Image`
    width: 100%;
    flex: 1;
    margin-top: -80px;
    object-fit: contain;
`;
export const LogoImage = styled.Image`
    width: 250px;
    height: 100px;
    align-self: center;
`;
export const BottomView = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;
    margin-top: 15px;
    align-self: center;
`;
export const TextLogin = styled.Text`
    color: #fff;
    font-size: 28px;
    font-family: 'OpenSans-Bold';
`;
export const ContinueText = styled.Text`
    color: #fff;
    font-size: 14px;
    font-family: 'OpenSans-Regular';
`;
export const styles = StyleSheet.create({
    viewAll: {
        position: 'absolute',
        width: '100%',
        height: 400,
        top: 260,
        justifyContent: 'space-between',
    },
});
