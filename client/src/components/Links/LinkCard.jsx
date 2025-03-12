import React, { useState } from "react";
import "./links.css"
import { FaCopy, FaTrash } from "react-icons/fa"; 

const LinkCard = ({ isOpen,onClose }) => {
  const [title, setTitle] = useState(""); 
  const [isToggleOn, setIsToggleOn] = useState(false)
  const [linkUrl, setLinkUrl] = useState("")
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("linkcard_modal-overlay")) {
      onClose()
    }
  };

  // const handleSaveTitle = () => {
  //   setIsEditing(false);
  //   console.log("Saved Title:", title); 
  // };

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn); 
    console.log(setIsToggleOn(!isToggleOn) )
  };





  const handleCopy = () => {
    if (linkUrl.trim() !== "") {
      navigator.clipboard.writeText(linkUrl);
      alert("Link copied! ✅");
    } else {
      alert("Please enter a URL to copy. ❌");
    }
  };

  const handleDelete = () => {
    setLinkUrl("") 
  };

  return (
    <div className="linkcard_modal-overlay" onClick={handleOutsideClick}>
      <div className="linkcard_modal-content" >
        <h2 className="linkcard_modal-content_h2">Enter URL</h2>

        <div className="linkcard_modal-content_linktitle"> 


       


          <input type="text" placeholder="Link title ✏️" className="linkcard_modal-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
           />
        <div className={`toggle-switch ${isToggleOn ? "on" : ""}`} onClick={handleToggle}>
            <div className="toggle-thumb"></div>
          </div>
        </div>


            <div className="linkcard_modal-content_linkurl">
            <input type="text" placeholder="Link URL" className="linkcard_modal-input" />
            <button className="icon-button" onClick={handleCopy}>
            <FaCopy />
          </button>

         
          <button className="icon-button delete" onClick={handleDelete}>
            <FaTrash />
          </button>
            </div>
       

        <h3>Applications</h3>

        <div className="linkcard_app-icons_box_container">

        <div className="linkcard_app-icons_box">
         <div className="linkcard_app-icons_border"><img className="linkcard_app-icons" src="/public/instagram.svg" alt="" /></div>
          <span>Instagram</span>
        </div>

        <div className="linkcard_app-icons_box">
         <div className="linkcard_app-icons_border"><img className="linkcard_app-icons" src="/public/facebook.svg" alt="" /></div>
         <span>Facebook</span>
        </div>

        <div className="linkcard_app-icons_box">
         <div className="linkcard_app-icons_border"><img className="linkcard_app-icons" src="/public/youtube.svg" alt="" /></div>
         <span>YouTube</span>
        </div>


        <div className="linkcard_app-icons_box">
         <div className="linkcard_app-icons_border"><img className="linkcard_app-icons" src="/public/twitter.svg" alt="" /></div>
         <span>X</span>
        </div>
    
        </div>


        
          
        

      </div>
    </div>
  );
};

export default LinkCard;

