import React, { useContext } from 'react';
import { LoginContext } from '../contexts/loginContext'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from '../screens/Login'
import { BottomTabs } from './bottomTabs'

import { StackOptions } from './options/stackOptions'

export const RootStacks = () => {

    const RootStack = createStackNavigator();
    const { isSignedIn } = useContext(LoginContext);

    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={StackOptions}>
                {
                    isSignedIn ? (
                        <RootStack.Screen name="BottomTabs" component={BottomTabs} />
                    ) : (
                        <RootStack.Screen name="Login" component={Login} />
                    )
                }
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
