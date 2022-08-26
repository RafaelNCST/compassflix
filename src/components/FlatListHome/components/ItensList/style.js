import styled from 'styled-components/native';

export const ImagePopularMovies = styled.TouchableOpacity`
    margin-horizontal: 8px;
    padding-vertical: 15px;
    align-items: center;
`;

export const ImageContainer = styled.View`
    width: 76px;
    height: 95px;
    border-radius: 10px;
`;

export const ImagePoster = styled.Image`
    height: 95px;
    width: 76px;
    object-fit: contain;
    border-radius: 10px;
`;

export const SubContainerPopularMovies = styled.View`
    flex-direction: row;
    margin-top: 1px;
    justify-content: flex-start;
    width: 100%;
`;

export const TextPopularMovies = styled.Text`
    color: #ffffff;
    margin-left: 4.5px;
    font-size: 9px;
    font-family: 'OpenSans-SemiBold';
`;
