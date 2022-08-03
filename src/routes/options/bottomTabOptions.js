import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

export const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        height: 60,
        width: '100%',
        backgroundColor: '#454545',
        alignItems: 'center',
    }
}

export const homeOptions = {
    tabBarIcon: () => (
        <Icon name='slideshow' size={30} color='#FFFFFF' />
    ),
    tabBarItemStyle: {
        backgroundColor: '#E9A6A6',
        maxWidth: 45,
        height: 45,
        borderRadius: 52,
        alignItems: 'center',
        alignSelf: 'center'
    }
}