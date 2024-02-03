import React, { useState, useContext } from "react";
const ThemeContext = React.createContext({ theme: "dark", setTheme: () => {} });

function Comp1() {
  const { theme } = useContext(ThemeContext);
  const styles = {
    color: theme === "dark" ? "#fff" : "#333",
  };

  return (
    <div style={styles}>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

function Comp2() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        className="bg-yellow-500 px-4 py-2 text-green-700 mx-3"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button  className="bg-yellow-500 px-4 py-2 text-green-700 mx-3" onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default function Theme() {
  const [theme, setTheme] = useState("light");
  const appStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} className="App">
      <div style={appStyles}>
        <Comp1 />
        <Comp2 />
      </div>
    </ThemeContext.Provider>
  );
}
