import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Phone from "./Phone";
import { PhoneContext } from "../../hooks/PhoneContext";
import axios from "axios";

const PhonePublicPreview = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_USER_URL}/share/${id}`).then((res) => {
      console.log("Retrieved data:", res.data);
    console.log("Links:", res.data.userLinks);
    console.log("Shop:", res.data.userShop);
      setUserData(res.data);
    });
  }, [id]);

  if (!userData) return <p>Loading preview...</p>;

  // Provide both userData and the toggle state/function to the context
  const contextValue = {
    ...userData,
    toggle,
    setToggle
  };

  return (
    <PhoneContext.Provider value={contextValue}>
      <Phone />
    </PhoneContext.Provider>
  );
};

export default PhonePublicPreview;

