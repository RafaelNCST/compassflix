import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [requestKey, setRequestKey] = useState(null);
    const [signedIn, setSignedIn] = useState(false);
    const [sessionId, setSessionId] = useState(false);

    const endLoadingRequest = (reqKey, stateBoolean) => {
        setRequestKey(reqKey);
        setSignedIn(stateBoolean);
        setIsLoading(false);
    };

    const changeSessionID = (state, id) => {
        setSignedIn(state);
        setSessionId(id);
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
