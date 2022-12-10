import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useLocation } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import ScrollToTop from "react-scroll-to-top";

const ScrollToTops = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <ScrollToTops />
        <App />
        <ScrollToTop
          title="Go to top"
          smooth
          style={{
            justifyContent: "center",
            display: "grid",
            alignContent: "center",
            zIndex: 1000,
          }}
        />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
