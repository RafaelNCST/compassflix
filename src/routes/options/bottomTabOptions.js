import React from 'react';
import { Image } from 'react-native';

export const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        height: 55,
        width: '100%',
        backgroundColor: '#454545',
        alignItems: 'center',
        borderTopWidth: 0,
    }
}

export const homeOptions = {
    tabBarIcon: () => (
        <Image source={require('../../assets/Images/homeImage.png')} />
    ),
    tabBarItemStyle: {
        backgroundColor: '#E9A6A6',
        maxWidth: 40,
        height: 40,
        borderRadius: 52,
        alignItems: 'center',
        alignSelf: 'center'
    }
}