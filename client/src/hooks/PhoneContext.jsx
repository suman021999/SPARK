import { createContext, useState, useEffect } from "react";

export const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {

  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [bgColor, setBgColor] = useState(localStorage.getItem("bgColor") || "#fff");
  const [toggle, setToggle] = useState("link"); // Default is 'link'

//   Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("bgColor", bgColor);
  }, [avatar, bgColor]);

  return (
    <PhoneContext.Provider
     value={
        { avatar, setAvatar, bgColor, setBgColor, toggle, setToggle }
        }>
      {children}
    </PhoneContext.Provider>
  );
};
