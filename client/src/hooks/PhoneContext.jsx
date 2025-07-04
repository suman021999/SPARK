import { createContext, useState, useEffect } from "react";
import { fillLine, fonts, layouts} from "../utils/constants";
export const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {

  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  
  const [bgColor, setBgColor] = useState(localStorage.getItem("bgColor") || "#fff");
  const [selectedButtonStyle, setSelectedButtonStyle] = useState(fillLine[0]);
  const [layoutbox, setLayoutbox] = useState(layouts[0]);


  const [fontChange, setFontChange] = useState({
    fontFamily: fonts[0].fonts, 
    ...fonts[0]         
  });
  const [selectFont, setSelectFont] = useState("");

  const [fontColor, setFontColor] = useState(localStorage.getItem("fontColor") || "#222"); 


  const [fillLineButton, setFillLineButton] = useState('');
  const [layaout, setLayaout] = useState('');

  const [theam, setTheam] = useState({
    bgColor: "#fff",
    barColor: "#000",
    barBorder: "1px solid #ccc",
  });

   

 

  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  
  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    }
  }, [username]);
  
  


  useEffect(() => {
    localStorage.setItem("theam", JSON.stringify(theam));
  }, [theam]);


  useEffect(() => {
    localStorage.setItem("fontColor", fontColor);
  }, [fontColor]);



  const [userLinks, setUserLinks] = useState(
    JSON.parse(localStorage.getItem("userLinks")) || []
  );


   const [userShop, setUserShop] = useState(
    JSON.parse(localStorage.getItem("userShop")) || []
  );

  const [profileTitle, setProfileTitle] = useState("");
  const [bio, setBio] = useState("");
  const [toggle, setToggle] = useState("link"); 

  const textColor = bgColor === "#3B2E25" ? "#fff" : bgColor === "#ffffffde" ? "#000000" : "#fff";

//   Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("userLinks", JSON.stringify(userLinks))
    localStorage.setItem("userShop", JSON.stringify(userShop))

  }, [avatar, bgColor,userLinks,userShop]);

  return (
    <PhoneContext.Provider
     value={
        { 
          avatar,
          setAvatar, 
          bgColor, 
          setBgColor, 
          toggle, 
          setToggle, 
          textColor,
          profileTitle, 
          setProfileTitle,
          username, 
          setUsername,
          bio, 
          setBio,
          userLinks,
          setUserLinks,
          userShop, 
          setUserShop,
          selectedButtonStyle, 
          setSelectedButtonStyle,
          layoutbox, setLayoutbox,
          
          fontColor, setFontColor,
          theam, setTheam,
          fontChange, setFontChange,
          selectFont, setSelectFont,
          fillLineButton, setFillLineButton,
          layaout, setLayaout
      
        }
        }>
      {children}
    </PhoneContext.Provider>
  );
};
