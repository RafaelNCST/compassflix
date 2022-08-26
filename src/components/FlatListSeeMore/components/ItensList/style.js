import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imagePopularMovies: {
        marginHorizontal: 8,
        paddingVertical: 15,
        alignItems: 'center',
    },
    imageContainer: {
        width: 76,
        height: 95,
        borderRadius: 10,
    },
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