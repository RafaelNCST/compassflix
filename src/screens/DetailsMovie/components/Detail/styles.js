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

export const InfoModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ImageModal = styled.Image`
    width: 116px;
    height: 180px;
    border-radius: 8px;
`;

export const TitleModal = styled.Text`
    font-size: 20px;
    color: white;
    margin-vertical: 15px;
    font-family: 'OpenSans-Bold';
`;

export const GenresContainer = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const GenresArea = styled.View`
    align-items: center;
    justify-content: center;
    width: 80px;
    margin: 3px;
    height: 25px;
    border-radius: 15px;
`;

export const GenresText = styled.Text`
    color: white;
    align-items: center;
    justify-content: center;
    font-family: 'OpenSans-SemiBold';
`;
