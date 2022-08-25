import styled from 'styled-components/native';

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

export const styles = StyleSheet.create({
    cast: {
        width: '90%',
        flex: 1,
    },
    listCredits: {
        paddingVertical: 5,
    },
    areaItens: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        marginVertical: 5,
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
