import React from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: '#000000',
        flex: 1,
    },
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
        marginTop: 122,
    },
    textFilmes: {
        color: '#E9A6A6',
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
    },
    textContent: {
        marginTop: 25,
        marginLeft: 16,
        marginRight: 16,
        textAlign: 'left',
        color: '#FFFFFF',
        fontSize: 10.3,
        textAlign: 'justify',
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
        paddingVertical: 7,
        marginHorizontal: 8,
        marginLeft: 13.5,
    },
    subContainerFlastlistImage: {
        marginTop: 1,
        borderRadius: 10,
        height: 100,
        width: 80,
    },
});

export default styles;
