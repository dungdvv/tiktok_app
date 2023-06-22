import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true);

  return (
    <HeaderContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => {
  return useContext(HeaderContext);
};
