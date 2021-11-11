import { createContext, useState, useEffect } from "react";

export const AppContext = createContext<any>({});

export const AppContextProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    setDarkMode((prev) => JSON.parse(localStorage.getItem("darkMode") as string) ?? prev);
  }, []);

  useEffect(
    () => localStorage.setItem("darkMode", JSON.stringify(darkMode)),
    [darkMode]
  );

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};
