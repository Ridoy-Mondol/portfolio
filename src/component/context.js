import React, { useState, createContext, useContext, useEffect } from "react";

const ModeContext = createContext();

export const Provider = ({ children }) => {
  const [mode, setMode] = useState(0);

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("mode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode !== null) {
      setMode(JSON.parse(savedMode));
    }
  }, []);

  return (
    <ModeContext.Provider value={{ toggleMode, mode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
