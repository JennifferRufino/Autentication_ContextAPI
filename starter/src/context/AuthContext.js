import React, {createContext} from 'react';

import useAuth from './hooks/useAuth';

export const Context = createContext();

export function AuthProvider({children}) {

    const {authenticated, handleLogin, loading, handleLogout} = useAuth();
    
    return(
        <Context.Provider value={{authenticated, handleLogin, loading, handleLogout}}>{children}</Context.Provider>
    )
}