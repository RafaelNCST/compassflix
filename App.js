import React from 'react';
import { View, Text} from 'react-native';
import {DetailsMovie} from './src/screens/DetailsMovie';

export const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <DetailsMovie/>
    </View>
  )
}



