import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeSeries } from '../screens/HomeSeries';
import { DetailsSerie } from '../screens/DetailsSerie';

import { StackOptions } from './options/stackOptions';

import { ListSeriesContextProvider } from '../contexts/listSeriesContext';

export const StackSeriesRoutes = () => {
    const StackSeries = createStackNavigator();

    return (
        <ListSeriesContextProvider>
            <StackSeries.Navigator screenOptions={StackOptions}>
                <StackSeries.Screen
                    name='Home'
                    component={HomeSeries}
                    initialParams={{ strTitle: 'as Séries' }}
                />
                <StackSeries.Screen
                    name='DetailScreen'
                    component={DetailsSerie}
                />
            </StackSeries.Navigator>
        </ListSeriesContextProvider>
    );
};
