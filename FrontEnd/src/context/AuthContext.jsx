import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Optionally verify token with backend
            setIsAuthenticated(true);
            // Decode token to get user info if needed
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                setUser({ email: payload.email, userId: payload.userId });
            } catch (e) {
                console.error('Invalid token');
                localStorage.removeItem('token');
            }
        }
        setLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            setUser({ email: payload.email, userId: payload.userId });
        } catch (e) {
            console.error('Invalid token');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
    };

    const value = {
        isAuthenticated,
        user,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
