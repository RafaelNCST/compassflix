import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    bodyScreen: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
    },
    imageContainer: {
        height: height / 2,
        width: width,
    },
    image: {
        width: '100%',
        flex: 1,
        marginTop: -80,
        resizeMode: 'contain',
    },
    viewAll: {
        position: 'absolute',
        width: '100%',
        height: 400,
        top: 260,
        justifyContent: 'space-between',
    },
    logoImage: {
        width: 250,
        height: 100,
        alignSelf: 'center',
    },
    bottomView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 28,
        marginTop: 15,
        alignSelf: 'center',
    },
    textLogin: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'OpenSans-Bold',
    },
    continueText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
    },
    animation: {
        height: 100,
        width: 100,
    },
});
