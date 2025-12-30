import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Custom Hook taaki baar baar useContext na likhna pade
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 1. Check karna ki kya user pehle se logged in hai (Local Storage se)
  useEffect(() => {
    const storedUser = localStorage.getItem("shopvia_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 2. Login Function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("shopvia_user", JSON.stringify(userData)); // Data save
  };

  // 3. Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("shopvia_user"); // Data delete
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};