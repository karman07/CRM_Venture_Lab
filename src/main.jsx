import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InfoCardProvider } from "./context/InfoCardContext";
import { IncubatorProvider } from "./context/IncubatorContext";
import { TeamProvider } from "./context/TeamContext";
import { StartupInfoProvider } from "./context/StartupInfoContext";
import { DocumentsProvider } from "./context/DocumentsContext.jsx";
import { TasksProvider } from "./context/TasksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoCardProvider>
      <IncubatorProvider>
        <TeamProvider>
          <StartupInfoProvider>
            <DocumentsProvider>
              <TasksProvider>
                  <App />
              </TasksProvider>
            </DocumentsProvider>
          </StartupInfoProvider>
        </TeamProvider>
      </IncubatorProvider>
    </InfoCardProvider>
  </React.StrictMode>,
);
