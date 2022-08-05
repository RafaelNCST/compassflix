import 'react-native-gesture-handler';
import React from 'react';
import { LoginContextProvider } from './src/contexts/loginContext';
import { RootStacks } from './src/routes/rootRoutes';

export const App = () => {
  return (
    <LoginContextProvider>
      <RootStacks />
    </LoginContextProvider>
  )
}



