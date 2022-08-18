import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeSeries } from '../screens/HomeSeries';
import { DetailsSerie } from '../screens/DetailsSerie';
import { ListHomeContextProvider } from '../contexts/listHomeContext';

import { StackOptions } from './options/stackOptions';

export const StackSeriesRoutes = () => {
    const StackSeries = createStackNavigator();

    return (
        <ListHomeContextProvider>
            <StackSeries.Navigator screenOptions={StackOptions}>
                <StackSeries.Screen name='Home' component={HomeSeries} />
                <StackSeries.Screen
                    name='DetailScreen'
                    component={DetailsSerie}
                />
            </StackSeries.Navigator>
        </ListHomeContextProvider>
    );
};
