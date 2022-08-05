import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [requestKey, setRequestKey] = useState(null)

    const endLoadingRequest = (reqKey) => {
        setIsLoading(false)
        setRequestKey(reqKey)
    }

    const setSignedIn = () => {
        setIsSignedIn(true)
    }

    return (
        <LoginContext.Provider value={{ isSignedIn, setSignedIn, isLoading, requestKey, endLoadingRequest }}>
            {children}
        </LoginContext.Provider>
    )
}