import React from 'react';
import { createContext } from 'react';
import useQuizes from '../hooks/useQuizes';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContents = useQuizes();
  return (
    <div>
      <AuthContext.Provider value={allContents}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
