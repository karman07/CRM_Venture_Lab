import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InfoCardProvider } from './context/InfoCardContext';
import { IncubatorProvider } from './context/IncubatorContext';
import { TeamProvider } from './context/TeamContext';
import { StartupInfoProvider } from './context/StartupInfoContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoCardProvider>
      <IncubatorProvider>
        <TeamProvider>
          <StartupInfoProvider>
            <App />
          </StartupInfoProvider>
        </TeamProvider>
      </IncubatorProvider>
    </InfoCardProvider>
  </React.StrictMode>,
);
