import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    BodyScreen: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ViewAll: {
        width: '90%',
        height: 400,
        alignItems: 'center',
        position: 'absolute',
        top: '26%'
    },
    BottomView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextLogin: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '700'
    },
    ContinueText: {
        marginBottom: 10,
        color: '#fff',
        fontSize: 14
    },
    Enter: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700'
    },
    Button: {
        marginTop: 50,
        pading: 10,
        width: 100,
        height: 39,
        borderRadius: 20,
        backgroundColor: '#e9a6a6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: 415,
        height: 420,
        marginTop: -45
    },
    LogoImage: {
        width: 250,
        height: 200,
    }
})