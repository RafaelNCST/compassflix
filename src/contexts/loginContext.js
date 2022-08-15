import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [requestKey, setRequestKey] = useState(null);
    const [signedIn, setSignedIn] = useState(false);
    const [sessionId, setSessionId] = useState(false);

    const endLoadingRequest = (reqKey, stateBoolean) => {
        setRequestKey(reqKey);
        setSignedIn(stateBoolean);
        setLoading(false);
    };

    const changeSessionID = async id => {
        setSignedIn(true);
        setSessionId(id);
    };

    return (
        <LoginContext.Provider
            value={{
                loading,
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
