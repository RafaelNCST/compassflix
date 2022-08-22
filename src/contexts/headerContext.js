import React, { createContext, useState } from 'react';
import { instance } from '../services/api';

export const HeaderContext = createContext();

export const HeaderContextProvider = ({ children }) => {
    const [userInfos, setUserInfos] = useState({});

    const getRequestInfosUser = async id => {
        await instance
            .get(`account?&session_id=${id}`)
            .then(resp => {
                setUserInfos(resp?.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <HeaderContext.Provider
            value={{
                getRequestInfosUser,
                userInfos,
            }}
        >
            {children}
        </HeaderContext.Provider>
    );
};
