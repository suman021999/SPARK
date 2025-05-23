import React, { useEffect, useState } from "react";
import { FaCopy, FaTrash } from "react-icons/fa";
import axios from "axios";
import { sellsApps} from "../../utils/constants";

const ShopModal = ({ isOpen, onClose, setUserShop,editShop = null}) => {
  const [title, setTitle] = useState("");
  const [shopUrl, setShopUrl] = useState("");
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [editingLinkId, setEditingLinkId] = useState(null);
  

  if (!isOpen) return null;

    useEffect(() => {
      if (editShop) {
        setTitle(editShop.title || "");
        setShopUrl(editShop.url || "");
        setEditingLinkId(editShop._id);
        setIsToggleOn((prev) => (prev ? false : prev))
      }
    }, [editShop]);

    const handleAppClick = (appName) => {
      setTitle(appName);
    }

    const handleToggle = () => {
      setIsToggleOn((prevState) => {
        const newState = !prevState;
        console.log("Toggle State:", newState);
        return newState;
      });
    };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("linkcard_modal-overlay")) {
      onClose();
    }
  };

   // copy
    const handleCopy = (url) => {
      navigator.clipboard.writeText(url);
      alert("Link copied! ✅");
    };

 



  
  const handleSave = async () => {
    if (!title || !shopUrl) {
      alert("Please enter both a title and URL!");
      return;
    }

    try {
      const payload = { url: shopUrl, title };

      if (editingLinkId) {
        await axios.put(`${import.meta.env.VITE_USER_URL}/shop/update/${editingLinkId}`,
          payload,
          { 
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",

          } }
        );
        alert("Link updated successfully ✅");
      } 
      else {
        const res = await axios.post(`${import.meta.env.VITE_USER_URL}/shop/create`,
          payload,
          {
             headers: { 
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",

             } }
        );
        setUserShop((prevShops) => (Array.isArray(prevShops) ? [...prevShops, res.data.shop] : [res.data.shop]));
        alert("Link saved successfully ✅");
      }
      onClose()
      setTitle("");
      setShopUrl("");
      setEditingLinkId(null);
      
    } catch (error) {
      console.error("Error saving link:", error);
      alert("Failed to save link ❌");
    }
  };



  return (
    <div className="linkcard_modal-overlay" onClick={handleOutsideClick}>
      <div className="linkcard_modal-content">
        <h2 className="linkcard_modal-content_h2">Enter URL</h2>

        <div className="linkcard_modal-content_linktitle">
          <input
            type="text"
            placeholder="Link title ✏️"
            className="linkcard_modal-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div
            className={`toggle-switch ${isToggleOn ? "on" : ""}`}
            onClick={handleToggle}
          >
            <div className="toggle-thumb" onClick={handleSave}></div>
          </div>
        </div>

        <div className="linkcard_modal-content_linkurl">
          <input
            type="text"
            placeholder="Link URL"
            className="linkcard_modal-input"
            value={shopUrl}
            onChange={(e) => setShopUrl(e.target.value)}
          />

          <button className="icon-button" onClick={() => handleCopy(shopUrl)}>
            <FaCopy />
          </button>

          <button className="icon-button delete" onClick={() => setShopUrl("")}>
            <FaTrash />
          </button>
        </div>



              <h3>Applications</h3>
        
                <div className="linkcard_app-icons_box_container">
        
                  {sellsApps.map((app, index)=>(
                    <div 
                    key={index}
                    className="linkcard_app-icons_box" onClick={() => handleAppClick(app.name)}>
                    <div className="linkcard_app-icons_border">
                      <img className="linkcard_app-icons" src={app.img} alt={app.name} />
                    </div>
                    <span>{app.name}</span>
                    </div>
                  ))}
                </div>
      </div>
    </div>
  );
};

export default ShopModal;
