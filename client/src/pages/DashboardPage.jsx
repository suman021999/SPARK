import React from "react";
import "./pages.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Linkspage from "../components/Links/Linkspage";
import Appearance from "../components/Appearance/Appearance";
import Analytics from "../components/Analytics/Analytics";
import Settings from "../components/Settings/Settings";

const DashboardPage = () => {
  return (
    <>
      <Router>
        <div className="dashboardPage">
          <Sidebar />
       
            <Routes>
              <Route path="/links" element={<Linkspage />} />
              <Route path="/appearance" element={<Appearance />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
      </Router>
    </>
  );
};

export default DashboardPage;
