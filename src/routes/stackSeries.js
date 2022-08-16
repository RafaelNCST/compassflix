import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { DetailsSerie } from '../screens/DetailsSerie';

import { StackOptions } from './options/stackOptions';

export const StackSeriesRoutes = () => {
    const StackSeries = createStackNavigator();

    return (
        <StackSeries.Navigator screenOptions={StackOptions}>
            <StackSeries.Screen name='Home' component={Home} />
            <StackSeries.Screen name='DetailScreen' component={DetailsSerie} />
        </StackSeries.Navigator>
    );
};
