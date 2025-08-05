import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import FundingPage from "./pages/FundingPage";
import { FundingProvider } from "./context/FundingContext";
import { StartupProvider } from "./context/StartupContext";
import StartUpPage from "./pages/StartUpPage";
import { AwardsProvider } from "./context/AwardsContext";
import AwardsPage from "./pages/AwardsPage";
import IPpage from "./pages/IPpage";
import { IPProvider } from "./context/IPContext";
import { UpdatesProvider } from "./context/UpdatesContext";
import UpdatesPage from "./pages/UpdatesPage";
import TeamPage from "./pages/TeamPage";
import { TeamProvider } from "./context/TeamContext";
import DocumentsPage from "./pages/DocumentsPage";
import TasksPage from "./pages/TasksIncubator";
import { IncubatorTeamMemberProvider } from "./context/IncubatorTeamMemberContext";
import IncubatorTeamPage from "./pages/IncubatorTeamPage";
const App = () => {
  return (
    <BrowserRouter>
      <FundingProvider>
        <StartupProvider>
          <AwardsProvider>
            <IPProvider>
              <UpdatesProvider>
                <TeamProvider>
                  <IncubatorTeamMemberProvider>
                    <Routes>
                      <Route path="/" element={<Onboarding />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/funding" element={<FundingPage />} />
                      <Route path="*" element={<Onboarding />} />
                      <Route path="/startup" element={<StartUpPage />} />
                      <Route path="/awards" element={<AwardsPage />} />
                      <Route path="/ip" element={<IPpage />} />
                      <Route path="/updates" element={<UpdatesPage />} />
                      <Route path="/team" element={<TeamPage />} />
                      <Route path="/docs" element={<DocumentsPage />} />
                      <Route path="/tasks" element={<TasksPage />} />
                      <Route path="/incubatorteam" element={<IncubatorTeamPage />} />
                    </Routes>
                  </IncubatorTeamMemberProvider>
                </TeamProvider>
              </UpdatesProvider>
            </IPProvider>
          </AwardsProvider>
        </StartupProvider>
      </FundingProvider>
    </BrowserRouter>
  );
};

export default App;
