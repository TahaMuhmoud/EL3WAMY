import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ConfigrationContextProvider from "./ConfigrationContext";
import SortedDataContextProvider from "./SortedDataContext";
import GenersContextProvider from "./GenersContext";
import LanguagesContextProvider from "./LanguagesContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguagesContextProvider>
      <GenersContextProvider>
        <SortedDataContextProvider>
          <ConfigrationContextProvider>
            <App />
            
          </ConfigrationContextProvider>
        </SortedDataContextProvider>
      </GenersContextProvider>
    </LanguagesContextProvider>
  </React.StrictMode>
);
