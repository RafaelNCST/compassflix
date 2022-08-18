import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackFilmsRoutes } from './stackFilms';
import { StackSeriesRoutes } from './stackSeries';
import { UserPerfil } from '../screens/UserPerfil';

import {
    screenOptions,
    homeOptions,
    UserOptions,
    seriesOptions,
} from './options/bottomTabOptions';

export const BottomTabs = () => {
    const BottomTab = createBottomTabNavigator();

    return (
        <BottomTab.Navigator
            initialRouteName='StackHome'
            screenOptions={screenOptions}
        >
            <BottomTab.Screen
                name='StackSeries'
                component={StackSeriesRoutes}
                options={seriesOptions}
            />
            <BottomTab.Screen
                name='StackHome'
                component={StackFilmsRoutes}
                options={homeOptions}
            />
            <BottomTab.Screen
                name='UserPerfil'
                component={UserPerfil}
                options={UserOptions}
            />
        </BottomTab.Navigator>
    );
};
