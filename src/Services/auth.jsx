import { useState, useEffect, useContext, createContext } from 'react';
import { localStorage } from "../Helpers/helper";

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

function useProvideAuth() {
    const storage = localStorage();
    const [user, setUser] = useState(storage.getJson('user'));
    const [loading, setLoading] = useState(false)


    const handleUser = (rawUser) => {
        if (rawUser) {
            // const user = formatUser(rawUser)
            setLoading(false)
            setUser(rawUser)
            return user
        } else {
            setLoading(false)
            setUser(null)
            return false
        }
    }

    const signout = () => {
        handleUser(null);
    }

    const isAuthenticated = () => {
        return user ? true : false;
    }
    const isHub = () => {
        return user && user.is_hub === 'hub';
    }
    const isAdmin = () => {
        return user && user.is_admin === 'admin';
    }

    const isPartner = () => {
        return user && user.is_partner === 'partner';
    }

    const isUser = () => {
        return user && user.is_customer === 'user';
    }
    const isCarrier = () => {
        return user && user.is_carrier === 'carrier';
    }

    useEffect(() => {
        user ? storage.setJson('user', user) : storage.clear('user');
    }, [user, storage]);

    return {
        user,
        handleUser,
        loading,
        setLoading,
        isAuthenticated,
        isAdmin,
        isHub,
        isPartner,
        isUser,
        isCarrier,
        signout,
    }
}
