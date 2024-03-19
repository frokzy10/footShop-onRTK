import React, {createContext, useState} from 'react';
import {
    AuthCallbackVoid,
    AuthPageProps,
    IAuthContextSchema,
    IUserSchemaNavigate
} from "../config/AuthSchema";

export const AuthContext = createContext<IAuthContextSchema>({
    user: null,
    signOut: () => {
    },
    signIn: () => {
    },
})

export const AuthProvider: React.FC<AuthPageProps> = ({children}: AuthPageProps) => {
    const [user, setUser] = useState<IUserSchemaNavigate | null>(null);

    function signIn<T>(newUser: T, cb: AuthCallbackVoid) {
        setUser(newUser as IUserSchemaNavigate)
        cb()
    }

    function signOut(cb: AuthCallbackVoid) {
        setUser(null)
        cb()
    }

    const valueProvider = {user, signIn, signOut}

    return (
        <AuthContext.Provider value={valueProvider}>
            {children}
        </AuthContext.Provider>
    );
};