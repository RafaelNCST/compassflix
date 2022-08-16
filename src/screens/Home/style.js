import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bodyScreen: {
        flex: 1,
        backgroundColor: '#000000',
        width: '100%',
    },
    bodyScreenName: {
        color: '#FFFFFF',
        fontSize: 18,
        marginLeft: 14,
        marginTop: 40,
        fontFamily: 'OpenSans-Bold',
    },
    bodyScreenSubtitle: {
        color: '#FFFFFF',
        fontSize: 10,
        marginTop: 1,
        marginLeft: 14,
        fontFamily: 'OpenSans-Regular',
    },
    bodyScreenPopularMovies: {
        color: '#FFFFFF',
        fontSize: 12,
        marginTop: 21,
        marginLeft: 14,
        marginBottom: 30,
        fontFamily: 'OpenSans-SemiBold',
    },
    containerPopularMovies: {
        width: '100%',
        alignItems: 'center',
    },
});
