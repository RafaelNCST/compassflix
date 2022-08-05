import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../screens/Home'
import { DetailsMovie } from '../screens/DetailsMovie'

import { StackOptions } from './options/stackOptions';

export const StackFilmsRoutes = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={StackOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DetailScreen" component={DetailsMovie} />
        </Stack.Navigator>
    )
}