import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListScreen } from '../screens/ListScreen';

import { StackOptions } from './options/stackOptions';

import { ListsContextProvider } from '../contexts/listsContext';
import { PageFavoritesList } from '../screens/PageFavoritesList';

export const StackListRoutes = () => {
    const StackUserLists = createStackNavigator();
    return (
        <ListsContextProvider>
            <StackUserLists.Navigator screenOptions={StackOptions}>
                <StackUserLists.Screen
                    name='ListScreen'
                    component={ListScreen}
                />
                <StackUserLists.Screen
                    name='DetailListScreen'
                    component={PageFavoritesList}
                />
            </StackUserLists.Navigator>
        </ListsContextProvider>
    );
};
//.
