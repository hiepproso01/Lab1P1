import React, { useState, createContext } from 'react';
export const AuthenticatedUserContext = createContext({});
export default AuthenticatedUserProvider = ({ children }) => {
const [user, setUser] = useState(null);
return (
<AuthenticatedUserContext.Provider value={{ user, setUser }}>
{children}
</AuthenticatedUserContext.Provider>
);
};