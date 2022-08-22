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

export const styles = StyleSheet.create({
    imagePoster: {
        height: 95,
        width: 76,
        resizeMode: 'contain',
        borderRadius: 10,
    },
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
