import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/MaterialIcons';

export const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        height: 55,
        width: '100%',
        backgroundColor: '#454545',
        alignItems: 'center',
        borderTopWidth: 0,
    }
}

export const homeOptions = {
    tabBarIcon: () => (
        <FontAwesome5 name='slideshow' size={30} color='#FFFFFF' />
    ),
    tabBarItemStyle: {
        backgroundColor: '#E9A6A6',
        maxWidth: 40,
        height: 40,
        borderRadius: 52,
        alignItems: 'center',
        alignSelf: 'center'
    }
}