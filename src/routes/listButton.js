import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListScreen } from '../screens/ListScreen';

import { StackOptions } from './options/stackOptions';

export const StackListRoutes = () => {
    const StackUserLists = createStackNavigator();
    return (
        <StackUserLists.Navigator screenOptions={StackOptions}>
            <StackUserLists.Screen name='ListScreen' component={ListScreen} />
        </StackUserLists.Navigator>
    );
};
