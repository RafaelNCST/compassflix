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

export const subContainerPopularMovies = styled.View`
    flex-direction: 'row';
    margin-top: 1;
    justify-content: 'flex-start';
    width: '100%';
`;

export const styles = StyleSheet.create({
    subContainerPopularMovies: {
        flexDirection: 'row',
        marginTop: 1,
        justifyContent: 'flex-start',
        width: '100%',
    },
    iconPopularMovies: {
        color: '#EC2626',
    },
    textPopularMovies: {
        color: '#FFFFFF',
        marginLeft: 4.5,
        fontSize: 9,
        fontFamily: 'OpenSans-SemiBold',
    },
});
