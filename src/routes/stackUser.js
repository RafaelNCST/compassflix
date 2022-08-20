import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackOptions } from './options/stackOptions';

import { UserPerfil } from '../screens/UserPerfil';
import { PageSeeMore } from '../screens/PageSeeMore';

export const StackUserRoutes = () => {
    const StackUser = createStackNavigator();

    return (
        <StackUser.Navigator screenOptions={StackOptions}>
            <StackUser.Screen name='UserScreen' component={UserPerfil} />
            <StackUser.Screen
                name='PageSeeMoreScreen'
                component={PageSeeMore}
            />
        </StackUser.Navigator>
    );
};
