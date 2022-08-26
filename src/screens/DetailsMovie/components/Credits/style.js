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
`;

export const styles = StyleSheet.create({
    listCredits: {
        paddingVertical: 5,
    },
    areaItens: {
        flexDirection: 'row',
    },
    name: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'OpenSans-Bold',
    },
    character: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'OpenSans-SemiBold',
    },
    imageActors: {
        width: 52,
        height: 54,
        marginRight: 10,
    },
    imagePerfilActors: {
        width: 48,
        height: 48,
        borderRadius: 30,
    },
    actor: {
        justifyContent: 'center',
    },
    listCredits: {
        paddingVertical: 3,
    },
});
