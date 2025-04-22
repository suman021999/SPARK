
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./logout.css";
import { PhoneContext } from "../../hooks/PhoneContext";

const Logout = () => {
  const navigate = useNavigate();
  const { avatar, username, setUsername } = useContext(PhoneContext);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (!username && storedUsername) {
      setUsername(storedUsername);
      setDisplayName(storedUsername.split("@")[0]);
    } else if (username && username.trim() !== "") {
      setDisplayName(
        username.includes("@") ? username.split("@")[0] : username
      );
    }
  }, [username, setUsername]);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_AUTH_URL}/logout`,
        {},
        { withCredentials: true }
      );

      localStorage.removeItem("avatar");
      localStorage.removeItem("username");

      setUsername("");
      setDisplayName("");

      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <section>
      <div className="logout_flex" onClick={handleLogout}>
        <img className="logout_flex_img" src={avatar} alt="User Avatar" />
        <p className="logout_flex_text">{displayName || "Guest"}</p>
      </div>
    </section>
  );
};

export default Logout;
