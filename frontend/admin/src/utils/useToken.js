import { useState } from 'react';

export const getToken = () => {
    const tokenString = sessionStorage.getItem('userData');
    const userToken = JSON.parse(tokenString);
    
    return userToken?.jwtToken;
};

export const doLogout = () => new Promise((resolve, _reject) => {
    sessionStorage.setItem('userData', '{}');
    
    resolve();
});

export const saveLocalToken = userToken => {
    sessionStorage.setItem('userData', JSON.stringify(userToken));
};


export default function useToken() {
    const [token, setToken] = useState(getToken());
    
    const saveToken = userToken => {
        saveLocalToken(userToken);
        setToken(userToken.jwtToken);
    };
    
    return {
        setToken: saveToken,
        doLogout,
        token
    };
}