import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loginInput: {
        width: '100%',
        height: 95,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '70%',
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(86, 86, 86, 0.8)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        borderStyle: 'solid',
        borderColor: '#ef5350'
    },
    textStyle: {
        fontSize: 14,
        marginLeft: 10,
        flex: 1,
        color: '#fff',
        fontFamily: 'OpenSans-Regular'
    },
    eye: {
        marginRight: 10
    },
    button: {
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#e9a6a6',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    enter: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'OpenSans-Bold'
    },
    errorContainer: {
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        color: '#ef5350',
        alignSelf: 'center',
        fontFamily: 'OpenSans-SemiBold'
    },
    loading: {
        width: 100,
        height: 39,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }

})