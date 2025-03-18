import React from "react";
import "./pages.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Linkspage from "../components/Links/Linkspage";
import Appearance from "../components/Appearance/Appearance";
import Settings from "../components/Settings/Settings";

const DashboardPage = () => {
  return (
    <>
           
           <div className="dashboardPage">
           <Sidebar />
           <Routes>
             <Route path="links" element={<Linkspage />} />
            <Route path="appearance" element={<Appearance />} />
           <Route path="settings" element={<Settings />} />
           </Routes>
           </div>
     
    </>
  );
};

export default DashboardPage;
