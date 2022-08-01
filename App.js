import React from 'react';
import { View } from 'react-native'
import { Login } from './src/screens/Login'

export const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Login />
    </View>
  )
}



