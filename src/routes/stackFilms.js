import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../screens/Home'
import { DetailsScreen } from '../screens/DetailsMovie'

import { StackOptions } from './options/stackOptions';

export const StackFilmsRoutes = () => {

    const stack = createStackNavigator();

    return (
        <stack.Navigator screenOptions={StackOptions}>
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="DetailScreen" component={DetailsScreen} />
        </stack.Navigator>
    )
}