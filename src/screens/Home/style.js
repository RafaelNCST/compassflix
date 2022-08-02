import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bodyScreen: {
        flex: 1,
        backgroundColor: '#000000',
        width: '100%'
    },
    bodyScreenName: {
        color: '#FFFFFF',
        fontSize: 18,
        marginLeft: 14,
        marginTop: 60
    },
    bodyScreenSubtitle: {
        color: '#FFFFFF',
        fontSize: 10,
        marginTop: 1,
        marginLeft: 14
    },
    bodyScreenPopularMovies: {
        color: '#FFFFFF',
        fontSize: 12,
        marginTop: 21,
        marginLeft: 14
    },
    containerPopularMovies: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 12,
        marginEnd: 1
    },
    imagePopularMovies: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 27,
        marginLeft: 12,
        marginEnd: 1
    },
    subContainerPopularMovies: {
        flexDirection: 'row',
        marginTop: 4
    },
    iconPopularMovies: {
        color: '#EC2626',
        marginLeft: 10
    },
    textPopularMovies: {
        color: '#FFFFFF',
        marginLeft: 5,
        fontSize: 14
    }
})