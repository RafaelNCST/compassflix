import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const CastArea = styled.View`
    margin-top: 27;
    margin-bottom: 10;
    width: 60;
    align-self: flex-start;
    margin-left: 15;
`;

export const CastTitle = styled.View`
    height: 25;
    width: 60;
    background-color: #9c4a8b;
    border-radius: 10;
    justify-content: center;
    align-items: center;
`;

export const TextCast = styled.Text`
    color: white;
`;

export const SpaceCast = styled.View`
    margin-horizontal: 10;
    margin-top: 7;
    width: 32;
    border-style: solid;
    border-color: #9c4a8b;
    border-top-width: 1;
    align-self: center;
`;

export const Cast = styled.View`
    width: 90%;
    flex: 1;
`;

export const AreaItens = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: black;
    margin-vertical: 5;
`;

export const Name = styled.Text`
    color: white;
    font-size: 14;
    font-family: 'OpenSans-Bold';
`;

export const Character = styled.Text`
    color: white;
    font-size: 11;
    font-family: 'OpenSans-SemiBold';
`;

export const ImageActors = styled.View`
    width: 52;
    height: 54;
    margin-right: 10;
`;

export const ImagePerfilActors = styled.Image`
    width: 48;
    height: 48;
    border-radius: 30;
`;

export const Actor = styled.View`
    justify-content: center;
`;

export const styles = StyleSheet.create({
    listCredits: {
        paddingVertical: 8,
    },
});
