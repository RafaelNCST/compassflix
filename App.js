import 'react-native-gesture-handler';
import React from 'react';
import { LoginContextProvider } from './src/contexts/loginContext';
import { RootStacks } from './src/routes/rootRoutes';
import { StatusBar } from 'react-native';

export const App = () => {
  return (
    <LoginContextProvider>
      <RootStacks />
      <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
    </LoginContextProvider>
  )
}



