import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackFilmsRoutes } from './stackFilms'

import { screenOptions, homeOptions } from './options/bottomTabOptions';

export const BottomTabs = () => {

    const BottomTab = createBottomTabNavigator();

    return (
        <BottomTab.Navigator screenOptions={screenOptions}>
            <BottomTab.Screen name="StackHome" component={StackFilmsRoutes} options={homeOptions} />
        </BottomTab.Navigator>
    )
} 