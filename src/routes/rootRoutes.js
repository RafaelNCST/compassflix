import React, { useContext } from 'react';
import { LoginContext } from '../contexts/loginContext';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login';
import { BottomTabs } from './bottomTabs';

import { StackOptions } from './options/stackOptions';
import { NavigationContainer } from '@react-navigation/native';

export const RootRoutes = () => {
    const RootStack = createStackNavigator();

    const { signedIn } = useContext(LoginContext);

    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={StackOptions}>
                {signedIn ? (
                    <RootStack.Screen
                        name='BottomTabs'
                        component={BottomTabs}
                    />
                ) : (
                    <RootStack.Screen name='Login' component={Login} />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
