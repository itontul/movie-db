import React, { createContext, useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hobbit");
  const { data, loading, error } = useFetch(`s=${query}`);

  return (
    <AppContext.Provider value={{ data, loading, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
