import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [requestKey, setRequestKey] = useState(null)
    const [signedIn, setSignedIn] = useState(false)

    const endLoadingRequest = (reqKey, stateBoolean) => {
        setRequestKey(reqKey)
        setSignedIn(stateBoolean)
        setLoading(false)
    }

    const sessionID = async (id) => {
        setSignedIn(true)
        AsyncStorage.setItem('@session_token', id)
    }

    return (
        <LoginContext.Provider value={{ loading, signedIn, requestKey, endLoadingRequest, sessionID }}>
            {children}
        </LoginContext.Provider>
    )
}