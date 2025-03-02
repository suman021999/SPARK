import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";
import { sidebar } from "../../utils/constants";

const Sidebar = () => {
  const [active,setActive]=useState()
  console.log(active)
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>SPARK</h2>
      </div>

      <div className="">
        {sidebar.map((link, index) => (
            <div  className={`sidebar_link  ${active===index?"active":""}`} onClick={()=>setActive(index)} key={index}>
              <img className={`none ${active===index?"img_bar":""}`} src={link.img} alt="" />
              <Link className={`none ${active===index?"sidebar_a":""}`} to={link.href}>{link.label}</Link>
            </div>
        ))}
      </div>

      <div>
        <img src="" alt="" />
        <p>name</p>
      </div>
    </div>
  );
};

export default Sidebar;
