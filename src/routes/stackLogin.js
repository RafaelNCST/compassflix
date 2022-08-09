import React, { useContext } from 'react';
import { LoginContext } from '../contexts/loginContext';
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from '../screens/Login';
import { BottomTabs } from './bottomTabs';

import { StackOptions } from './options/stackOptions';

export const LoginStacks = () => {

    const LoginStack = createStackNavigator();

    const { signedIn } = useContext(LoginContext);

    return (
        <LoginStack.Navigator screenOptions={StackOptions}>
            {signedIn ? (
                <LoginStack.Screen name='BottomTabs' component={BottomTabs} />
            ) : (
                <LoginStack.Screen name='Login' component={Login} />
            )
            }
        </LoginStack.Navigator>
    )
}