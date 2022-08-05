import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {

    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ isSignedIn, setIsSignedIn }}>
            {children}
        </LoginContext.Provider>
    )
}