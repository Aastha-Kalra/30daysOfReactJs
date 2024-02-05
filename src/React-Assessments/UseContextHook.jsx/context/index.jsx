import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

const GlobalState = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

