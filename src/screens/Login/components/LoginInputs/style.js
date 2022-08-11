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
        backgroundColor: '#C4C4C459',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        borderStyle: 'solid',
        borderColor: '#ef5350'
    },
    TextStyle: {
        fontSize: 11,
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    Enter: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700'
    },
    errorContainer: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loading: {
        marginTop: 20,
        pading: 10,
        width: 100,
        height: 39,
        alignItems: 'center',
        justifyContent: 'center'
    }

})