import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";
import Linksimg from "../../../public/linksss.svg";
import Appearance from "../../../public/Appearance.svg";

const Sidebar = () => {


  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>SPARK</h2>
      </div>

      <div className="sidebar_link">

        <div>
        <img src={Linksimg } alt="" />
        <Link to="/linkspage">Links</Link>
        </div>

        <div>
        <img src={Appearance} alt="" />
        <Link to="/appearance">Appearance</Link>
        </div>

        <div>
        <img src={Linksimg } alt="" />
        <Link to="/analytics">Analytics</Link>
        </div>

        <div>
        <img src={Linksimg } alt="" />
        <Link to="/settings">Settings</Link>
        </div>
        
        
      </div>
    </div>
  );
};

export default Sidebar;
