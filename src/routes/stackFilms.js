import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListHomeContextProvider } from '../contexts/listHomeContext';

import { HomeMovies } from '../screens/HomeMovies';
import { DetailsMovie } from '../screens/DetailsMovie';

import { StackOptions } from './options/stackOptions';

export const StackFilmsRoutes = () => {
    const StackFilm = createStackNavigator();

    return (
        <ListHomeContextProvider>
            <StackFilm.Navigator screenOptions={StackOptions}>
                <StackFilm.Screen name='Home' component={HomeMovies} />
                <StackFilm.Screen
                    name='DetailScreen'
                    component={DetailsMovie}
                />
            </StackFilm.Navigator>
        </ListHomeContextProvider>
    );
};
