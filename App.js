import 'react-native-gesture-handler';
import React from 'react';
import { LoginContextProvider } from './src/contexts/loginContext';
import { RootRoutes } from './src/routes/rootRoutes';
import { StatusBar } from 'react-native';

export const App = () => {
    return (
        <LoginContextProvider>
            <RootRoutes />
            <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
        </LoginContextProvider>
    );
};
