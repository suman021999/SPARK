import { createContext, useState, useEffect } from "react";

export const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {

  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [bgColor, setBgColor] = useState(localStorage.getItem("bgColor") || "#fff");
  const [profileTitle, setProfileTitle] = useState("");
  const [bio, setBio] = useState("");
  const [toggle, setToggle] = useState("link"); 

  const textColor = bgColor === "#3B2E25" ? "#fff" : bgColor === "#ffffffde" ? "#000000" : "#fff";

//   Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("bgColor", bgColor);
  }, [avatar, bgColor]);

  return (
    <PhoneContext.Provider
     value={
        { avatar, setAvatar, bgColor, setBgColor, toggle, setToggle, textColor,profileTitle, setProfileTitle,username, setUsername,bio, setBio }
        }>
      {children}
    </PhoneContext.Provider>
  );
};
