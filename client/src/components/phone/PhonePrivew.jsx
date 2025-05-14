

// const PhonePublicPreview = () => {
//   const { id } = useParams();
//   const [userData, setUserData] = useState(null);
//   const [toggle, setToggle] = useState("link");
  
//   useEffect(() => {
//     axios.get(`${import.meta.env.VITE_USER_URL}/share/${id}`).then((res) => {
//       const data = res.data;
//       setUserData(data);
      
//       // Load the font stylesheet
//       if (data.fontChange?.url) {
//         const link = document.createElement('link');
//         link.href = data.fontChange.url;
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//       }
//     });
//   }, [id]);

//   if (!userData) return <p>Loading preview...</p>;
  
//   const contextValue = {
//     ...userData,
//     toggle,
//     setToggle,
//     // Ensure fontChange has proper fallback
//     fontChange: userData.fontChange || { 
//       fontFamily: "Roboto",
//       url: "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
//     }
//   };

//   return (
//     <PhoneContext.Provider value={contextValue}>
//       <Phone />
//     </PhoneContext.Provider>
//   );
// };

// export default PhonePublicPreview;



// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Phone from "./Phone"; // Adjust the path if needed
// import { PhoneContext } from "./PhoneContext"; // Adjust the path if needed

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Phone from "./Phone";
import { PhoneContext } from "../../hooks/PhoneContext";
import axios from "axios";

const PhonePublicPreview = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [toggle, setToggle] = useState("link");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_USER_URL}/share/${id}`);
        const data = res.data;
        setUserData(data);
      } catch (err) {
        console.error("Failed to fetch shared data:", err);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (userData?.fontChange?.url) {
      const link = document.createElement("link");
      link.href = userData.fontChange.url;
      link.rel = "stylesheet";
      link.id = "dynamic-font";

      const oldLink = document.getElementById("dynamic-font");
      if (oldLink) {
        document.head.removeChild(oldLink);
      }

      document.head.appendChild(link);
    }
  }, [userData?.fontChange?.url]);

  if (!userData) return <p>Loading preview...</p>;

  const contextValue = {
    ...userData,
    toggle,
    setToggle,
    fontChange: userData.fontChange || ''
  };

  return (
    <PhoneContext.Provider value={contextValue}>
      <Phone />
    </PhoneContext.Provider>
  );
};

export default PhonePublicPreview;


