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

    const isAdmin = () => {
        return user && user.type == 'admin';
    }

    const isPartner = () => {
        return user && user.type === 'partner';
    }

    const isUser = () => {
        return user && user.type === 'user';
    }

    useEffect(() => {
        user ? storage.setJson('user', user) : storage.clear('user');
    }, [user]);

    return {
        user,
        handleUser,
        loading,
        setLoading,
        isAuthenticated,
        isAdmin,
        isPartner,
        isUser,
        signout,
    }
}

const formatUser = (user) => {
    return {
        uid: user.id,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
    }
}
