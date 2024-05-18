/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
const UrlContext = createContext({});

export const UrlContextProvider = ({ children }) => {
  const savedUrls = localStorage.getItem("shortly-urls");
  const [shortUrls, setShortUrls] = useState(
    !savedUrls ? [] : JSON.parse(savedUrls),
  );

  return (
    <UrlContext.Provider value={{ shortUrls, setShortUrls }}>
      {children}
    </UrlContext.Provider>
  );
};

export default UrlContext;
