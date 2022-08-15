import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { DetailsMovie } from '../screens/DetailsMovie';

import { StackOptions } from './options/stackOptions';

export const StackFilmsRoutes = () => {
    const StackFilm = createStackNavigator();

    return (
        <StackFilm.Navigator screenOptions={StackOptions}>
            <StackFilm.Screen name='Home' component={Home} />
            <StackFilm.Screen name='DetailScreen' component={DetailsMovie} />
        </StackFilm.Navigator>
    );
};
