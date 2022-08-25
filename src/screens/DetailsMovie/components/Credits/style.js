import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const CastArea = styled.View`
    margin-top: 27px;
    margin-bottom: 10px;
    width: 60px;
    align-self: flex-start;
    margin-left: 15px;
`;

export const CastTitle = styled.View`
    height: 25px;
    width: 60px;
    background-color: #9c4a8b;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const TextCast = styled.Text`
    color: white;
`;

export const SpaceCast = styled.View`
    margin-horizontal: 10px;
    margin-top: 7px;
    width: 32px;
    border-style: solid;
    border-color: #9c4a8b;
    border-top-width: 1px;
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
    margin-vertical: 5px;
`;

export const Name = styled.Text`
    color: white;
    font-size: 14px;
    font-family: 'OpenSans-Bold';
`;

export const Character = styled.Text`
    color: white;
    font-size: 11px;
    font-family: 'OpenSans-SemiBold';
`;

export const ImageActors = styled.View`
    width: 52px;
    height: 54px;
    margin-right: 10px;
`;

export const ImagePerfilActors = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 30px;
`;

export const Actor = styled.View`
    justify-content: center;
`;

export const styles = StyleSheet.create({
    listCredits: {
        paddingVertical: 8,
    },
});
