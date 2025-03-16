import React, { useEffect, useState } from "react";
import "./links.css";
import { FiCopy } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri"
import axios from "axios";

const LinkModal = ({ isOpen, onClose, setUserLinks,editLink = null}) => {
  const [title, setTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [editingLinkId, setEditingLinkId] = useState(null);

  if (!isOpen) return null;


  useEffect(() => {
    if (editLink) {
      setTitle(editLink.title || "");
      setLinkUrl(editLink.url || "");
      setEditingLinkId(editLink._id);
      
    } else {
      setTitle("");
      setLinkUrl("");
      setEditingLinkId(null);
      
    }
  }, [editLink]);


  const handleAppClick = (appName) => {
    setTitle(appName);
  }

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
    console.log(setIsToggleOn(!isToggleOn));
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
    if (!title || !linkUrl ) {
      alert("Please enter both a title and URL!");
      return;
    }

    try {
      const payload = { url: linkUrl, title };

      if (editingLinkId) {
        await axios.put(
          `${import.meta.env.VITE_USER_URL}/links/update/${editingLinkId}`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        alert("Link updated successfully ✅");
      } else {
        const res = await axios.post(
          `${import.meta.env.VITE_USER_URL}/links/create`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUserLinks((prevLinks) =>
          Array.isArray(prevLinks)
            ? [...prevLinks, res.data.link]
            : [res.data.link]
        );
        // alert("Link saved successfully ✅");
      }
      onClose();
      setTitle("");
      setLinkUrl("");
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
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />

          <button className="icon-button" onClick={() => handleCopy(linkUrl)}>
          <FiCopy />
          </button>

          <button className="icon-button delete" onClick={() => setLinkUrl("")}>
          <RiDeleteBin6Line />
          </button>
        </div>



        <h3>Applications</h3>

        <div className="linkcard_app-icons_box_container">
          
          <div className="linkcard_app-icons_box" onClick={() => handleAppClick("Instagram")}>

            <div className="linkcard_app-icons_border">
              <img
                className="linkcard_app-icons"
                src="/public/instagram.svg"
                alt=""
              />
            </div>
            <span>Instagram</span>

          </div>

          <div className="linkcard_app-icons_box" onClick={() => handleAppClick("Facebook")}>
            <div className="linkcard_app-icons_border" >
              <img
                className="linkcard_app-icons"
                src="/public/facebook.svg"
                alt=""
              />
            </div>
            <span>Facebook</span>
          </div>

          <div className="linkcard_app-icons_box" onClick={() => handleAppClick("YouTube")}>
            <div className="linkcard_app-icons_border">
              <img
                className="linkcard_app-icons"
                src="/public/youtube.svg"
                alt=""
              />
            </div>
            <span>YouTube</span>
          </div>

          <div className="linkcard_app-icons_box" onClick={() => handleAppClick("X")}>
            <div className="linkcard_app-icons_border">
              <img
                className="linkcard_app-icons"
                src="/public/twitter.svg"
                alt=""
              />
            </div>
            <span>X</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LinkModal;


