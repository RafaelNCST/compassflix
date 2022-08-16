import React from 'react';
import { Image } from 'react-native';

export const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        height: 55,
        width: '100%',
        backgroundColor: '#454545',
        borderTopWidth: 0,
        alignItems: 'center',
    },
    tabBarItemStyle: {
        maxWidth: 40,
        height: 40,
        borderRadius: 52,
        alignSelf: 'center',
        marginRight: 45,
        marginLeft: 45,
    },
    tabBarActiveBackgroundColor: '#E9A6A6',
    tabBarInactiveBackgroundColor: '#454545',
};

export const seriesOptions = {
    tabBarIcon: () => (
        <Image source={require('../../assets/Images/series.png')} />
    ),
};

export const homeOptions = {
    tabBarIcon: () => (
        <Image source={require('../../assets/Images/movies.png')} />
    ),
};

export const UserOptions = {
    tabBarIcon: () => (
        <Image source={require('../../assets/Images/perfil.png')} />
    ),
};
