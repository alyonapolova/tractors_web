import { createContext, useState } from 'react';
import { LoginDialog } from '../login/LoginDialog';

export const UserContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogginDialogOpen, setIsLogginDialogOpen] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
  };

  const login = () => {
    setIsLogginDialogOpen(true);
  };

  const handleSubmit = (email, password) => {
    if (email === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setIsLogginDialogOpen(false);
    }
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      <LoginDialog
        open={isLogginDialogOpen}
        onClose={() => {
          setIsLogginDialogOpen(false);
        }}
        onSubmit={handleSubmit}
      />
      {children}
    </UserContext.Provider>
  );
};
