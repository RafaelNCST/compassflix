import React, { useContext } from 'react';
import { LoginContext } from '../contexts/loginContext';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SplashScreen } from '../screens/LoadingRequest';
import { LoginStacks } from './stackLogin'

import { StackOptions } from './options/stackOptions';

export const RootStacks = () => {

    const RootStack = createStackNavigator();

    const { isLoading } = useContext(LoginContext);

    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={StackOptions}>
                {isLoading ? (
                    <RootStack.Screen name='Loading' component={SplashScreen} />
                ) : (
                    <RootStack.Screen name='stackLogin' component={LoginStacks} />
                )
                }
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
