import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackFilmsRoutes } from './stackFilms';
import { StackSeriesRoutes } from './stackSeries';
import { StackUserRoutes } from './stackUser';
import { ListHomeContextProvider } from '../contexts/listHomeContext';

import {
    screenOptions,
    homeOptions,
    UserOptions,
    seriesOptions,
} from './options/bottomTabOptions';

export const BottomTabs = () => {
    const BottomTab = createBottomTabNavigator();

    return (
        <ListHomeContextProvider>
            <BottomTab.Navigator
                initialRouteName='StackFilms'
                screenOptions={screenOptions}
            >
                <BottomTab.Screen
                    name='StackSeries'
                    component={StackSeriesRoutes}
                    options={seriesOptions}
                />
                <BottomTab.Screen
                    name='StackFilms'
                    component={StackFilmsRoutes}
                    options={homeOptions}
                />
                <BottomTab.Screen
                    name='StackUser'
                    component={StackUserRoutes}
                    options={UserOptions}
                />
            </BottomTab.Navigator>
        </ListHomeContextProvider>
    );
};
