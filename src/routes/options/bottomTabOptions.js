import React from 'react';
import { Image } from 'react-native';

import FilmsGray from '../../assets/Images/moviesGray.png';
import SeriesGray from '../../assets/Images/seriesGray.png';
import PerfilGray from '../../assets/Images/perfilGray.png';

import FilmsWhite from '../../assets/Images/moviesWhite.png';
import SeriesWhite from '../../assets/Images/seriesWhite.png';
import PerfilWhite from '../../assets/Images/perfilWhite.png';

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
    tabBarIcon: ({ focused }) => (
        <Image source={focused ? SeriesWhite : SeriesGray} />
    ),
};

export const homeOptions = {
    tabBarIcon: ({ focused }) => (
        <Image source={focused ? FilmsWhite : FilmsGray} />
    ),
};

export const UserOptions = {
    tabBarIcon: ({ focused }) => (
        <Image source={focused ? PerfilWhite : PerfilGray} />
    ),
};
