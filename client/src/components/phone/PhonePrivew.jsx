import React, { useEffect, useState } from "react";
import Phone from "./Phone"; // Your original Phone component
import { PhoneContext } from "../../hooks/PhoneContext";

const PhonePublicPreview = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.substring(1); // remove #
    if (hash) {
      try {
        const decoded = JSON.parse(decodeURIComponent(atob(hash)));
        setUserData(decoded);
      } catch (err) {
        console.error("Invalid data in URL", err);
      }
    }
  }, []);

  if (!userData) return <p>Loading preview...</p>;

  return (
    <PhoneContext.Provider value={userData}>
      <Phone />
    </PhoneContext.Provider>
  );
};

export default PhonePublicPreview;

