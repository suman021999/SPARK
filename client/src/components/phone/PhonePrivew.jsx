import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Phone from "./Phone";
import { PhoneContext } from "../../hooks/PhoneContext";
import axios from "axios";

const PhonePublicPreview = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get(`/api/share/${id}`).then((res) => {
      setUserData(res.data);
    });
  }, [id]);

  if (!userData) return <p>Loading preview...</p>;

  return (
    <PhoneContext.Provider value={userData}>
      <Phone />
    </PhoneContext.Provider>
  );
};

export default PhonePublicPreview;

