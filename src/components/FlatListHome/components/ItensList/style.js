import styled from 'styled-components/native';

export const ImagePopularMovies = styled.TouchableOpacity`
    margin-horizontal: 8;
    padding-vertical: 15;
    align-items: 'center';
`;

export const ImageContainer = styled.View`
    width: 76;
    height: 95;
    border-radius: 10;
`;

export const ImagePoster = styled.Image`
    height: 95;
    width: 76;
    resize-mode: 'contain';
    border-radius: 10;
`;

export const SubContainerPopularMovies = styled.View`
    flex-direction: 'row';
    margin-top: 1;
    justify-content: 'flex-start';
    width: '100%';
`;

export const TextPopularMovies = styled.Text`
    color: #ffffff;
    margin-left: 4.5;
    font-size: 9;
    font-family: 'OpenSans-SemiBold';
`;
