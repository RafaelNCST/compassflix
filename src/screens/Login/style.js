import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bodyScreen: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
    },
    imageContainer: {
        height: '50%',
        width: '100%',
    },
    image: {
        width: '100%',
        flex: 1,
        marginTop: -80,
        resizeMode: 'contain'
    },
    ViewAll: {
        position: 'absolute',
        width: '90%',
        height: 400,
        top: 250,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    LogoImage: {
        width: 250,
        height: 100,
    },
    BottomView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    TextLogin: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '700'
    },
    ContinueText: {
        color: '#fff',
        fontSize: 14
    },
})