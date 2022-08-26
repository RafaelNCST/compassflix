import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [requestKey, setRequestKey] = useState(null);
    const [signedIn, setSignedIn] = useState(false);
    const [sessionId, setSessionId] = useState(false);

    const endLoadingRequest = (key, stateBoolean) => {
        if (stateBoolean) {
            setSessionId(key);
        } else {
            setRequestKey(key);
        }
        setSignedIn(stateBoolean);
        setIsLoading(false);
    };

    const changeSessionID = (state, id) => {
        setSignedIn(state);
        setSessionId(id);
        if (id) {
            AsyncStorage.setItem('sessionId', id);
        }
    };

    return (
        <LoginContext.Provider
            value={{
                isLoading,
                signedIn,
                requestKey,
                endLoadingRequest,
                changeSessionID,
                sessionId,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};
