import { createContext } from "react";
import articles from "../../data.json";

export const ArticleContext = createContext();

export function ArticleProvider({ children }) {
  return (
    <ArticleContext.Provider value={{ articles }}>
      {children}
    </ArticleContext.Provider>
  );
}
