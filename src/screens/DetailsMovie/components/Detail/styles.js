import styled from 'styled-components/native';

export const ModalScreens = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
`;

export const ModalArea = styled.View`
    width: 80%;
    height: 400px;
    background-color: #1c2227;
    border-radius: 10px;
`;

export const IconeArea = styled.View`
    width: 100%;
    height: 50px;
    align-items: flex-end;
    justify-content: center;
`;

export const IconeButton = styled.TouchableOpacity`
    margin-right: 10px;
    width: 30px;
    height: 30px;
    background-color: white;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
`;

export const styles = StyleSheet.create({
    infoModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageModal: {
        width: 116,
        height: 180,
        borderRadius: 8,
    },
    titleModal: {
        fontSize: 20,
        color: 'white',
        marginVertical: 15,
        fontFamily: 'OpenSans-Bold',
    },
    genresContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    genresArea: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        margin: 3,
        height: 25,
        borderRadius: 15,
    },
    genresText: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'OpenSans-SemiBold',
    },
});
