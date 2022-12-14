import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackOptions } from './options/stackOptions';

import { UserPerfil } from '../screens/UserPerfil';
import { PageSeeMore } from '../screens/PageSeeMore';
import { DetailsMovie } from '../screens/DetailsMovie';
import { DetailsSerie } from '../screens/DetailsSerie';
import { StackListRoutes } from './stackList';

import { ListSeeMoreContextProvider } from '../contexts/listsSeeMoreContext';

export const StackUserRoutes = () => {
    const StackUser = createStackNavigator();

    return (
        <ListSeeMoreContextProvider>
            <StackUser.Navigator
                screenOptions={StackOptions}
                initialRouteName='UserScreen'
            >
                <StackUser.Screen name='UserScreen' component={UserPerfil} />
                <StackUser.Screen
                    name='PageSeeMoreScreen'
                    component={PageSeeMore}
                />
                <StackUser.Screen
                    name='DetailUserMovie'
                    component={DetailsMovie}
                />
                <StackUser.Screen
                    name='DetailUserSerie'
                    component={DetailsSerie}
                />
                <StackUser.Screen
                    name='StackListRoutes'
                    component={StackListRoutes}
                />
            </StackUser.Navigator>
        </ListSeeMoreContextProvider>
    );
};
