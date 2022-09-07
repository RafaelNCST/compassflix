import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    subContainerAnimated: {
        backgroundColor: '#FFFFFF',
        width: 76,
        height: 25,
        borderRadius: 30,
    },
    buttonAnimated: {
        backgroundColor: '#E9A6A6',
        width: 37,
        height: 25,
        borderRadius: 30,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        height: 25,
        width: 76,
    },
    textCenter: {
        alignItems: 'center',
        flex: 1,
    },
    textFilmes: {
        color: '#E9A6A6',
        fontSize: 20,
        width: 250,
        maxWidth: 350,
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
        marginTop: 20,
        marginBottom: 25,
    },
    textContent: {
        color: '#FFFFFF',
        fontSize: 11,
        lineHeight: 15,
        marginHorizontal: 15,
        textAlign: 'justify',
        fontFamily: 'OpenSans-Regular',
    },
    modalScreens: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalTextOne: {
        color: '#000000',
        fontSize: 14,
        marginTop: 30,
        marginLeft: 32,
    },
    modalTextTwo: {
        color: '#8E8E8E',
        fontSize: 13,
        marginTop: 17,
        marginLeft: 32,
    },
    modalarea: {
        width: 300,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 250,
    },
    modalBottons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    modalBottonsOne: {
        width: 83,
        height: 20,
        backgroundColor: '#000000',
        borderRadius: 5,
    },
    modalBottonsTwo: {
        width: 83,
        height: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 2,
    },
    modalBottonsTextOne: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontSize: 10,
        marginTop: 3,
    },
    modalBottonsTextTwo: {
        color: '#000000',
        alignSelf: 'center',
        fontSize: 10,
        marginTop: 1,
    },
    containerFlastlistImage: {
        marginHorizontal: 8,
        marginBottom: 12,
        marginTop: 5,
    },
    subContainerFlastlistImage: {
        borderRadius: 7,
        width: 76,
        height: 95,
    },
});

export default styles;
