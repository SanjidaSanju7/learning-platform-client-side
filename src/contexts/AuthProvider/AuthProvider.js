import React, { createContext } from 'react';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
// const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const user = { displayName: 'batash ali' }

    const authInfo = { user }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;