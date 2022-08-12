import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    LoginInput: {
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
    TextStyle: {
        fontSize: 12,
        marginLeft: 10,
        flex: 1,
        color: '#fff'
    },
    eye: {
        marginRight: 10
    },
    Button: {
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#e9a6a6',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Enter: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700'
    },
    errorContainer: {
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        width: 100,
        height: 39,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }

})