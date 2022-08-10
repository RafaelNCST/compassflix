import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imagePopularMovies: {
        marginHorizontal: 8,
        paddingTop: 25,
        alignItems: 'center'
    },
    imageContainer: {
        width: 76,
        height: 95,
        borderRadius: 10
    },
    subContainerPopularMovies: {
        flexDirection: 'row',
        marginTop: 1,
        justifyContent: 'flex-start',
        width: '100%'
    },
    iconPopularMovies: {
        color: '#EC2626',
    },
    textPopularMovies: {
        color: '#FFFFFF',
        marginLeft: 4.5,
        fontSize: 9
    }
})