import React, { useEffect, useState } from "react";
import "./links.css"
import { FaCopy, FaTrash } from "react-icons/fa"; 
import axios from "axios";

const LinkCard = ({ isOpen, onClose, setUserLinks, userLinks }) => {
  const [title, setTitle] = useState(""); 
  const [linkUrl, setLinkUrl] = useState("");
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [editingLinkId, setEditingLinkId] = useState(null);


    if (!isOpen) return null;

    const handleSave = async () => {
      if (!title || !linkUrl) {
        alert("Please enter both a title and URL!");
        return;
      }
  
      try {
        const payload = { url: linkUrl, title };
        const token = localStorage.getItem("token");
  
        if (editingLinkId) {
          await axios.put(
            `${import.meta.env.VITE_USER_URL}/links/update/${editingLinkId}`,
            payload,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          alert("Link updated successfully ✅");
        } else {
          const res = await axios.post(
            `${import.meta.env.VITE_USER_URL}/links/create`,
            payload,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setUserLinks([...userLinks, res.data]);
          alert("Link saved successfully ✅");
        }
  
        setTitle("");
        setLinkUrl("");
        setEditingLinkId(null);
        onClose();
      } catch (error) {
        console.error("Error saving link:", error);
        alert("Failed to save link ❌");
      }
    };

 const handleToggle = () => {
    setIsToggleOn(!isToggleOn); 
    console.log(setIsToggleOn(!isToggleOn) )
  };


    const handleOutsideClick = (e) => {
    if (e.target.classList.contains("linkcard_modal-overlay")) {
      onClose()
    }
  };


    
  
    // 📌 Delete a link
    const handleDelete = async (id) => {
      try {
        await axios.delete(`${import.meta.env.VITE_USER_URL}/links/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        alert("Link deleted successfully ✅");
        setUserLinks(userLinks.filter((link) => link._id !== id));
      } catch (error) {
        console.error("Error deleting link:", error.response?.data || error.message);
        alert("Failed to delete link ❌");
      }
    };
  // copy
    const handleCopy = (url) => {
      navigator.clipboard.writeText(url);
      alert("Link copied! ✅");
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
            <div className="toggle-thumb" onClick={handleSave}></div>
        </div>

        </div>



            <div className="linkcard_modal-content_linkurl">
            <input type="text" placeholder="Link URL" className="linkcard_modal-input"  value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)} />


            <button className="icon-button" onClick={() => handleCopy(linkUrl)}>
            <FaCopy />
          </button>

         
          <button className="icon-button delete" onClick={() => setLinkUrl("")}>
            <FaTrash />
          </button>
            </div>




           
       

        <h3>Applications</h3>

        {/* <div className="linkcard_app-icons_box_container">

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
    
        </div> */}


        
          
        

      </div>
    </div>
  );
};

export default LinkCard;



// const handleSave = async () => {
      
//   if (!title || !linkUrl) {
//     alert("Please enter both a title and URL!");
//     return;
//   }


//   try {
//     const payload = { url: linkUrl, title };

//     if (editingLinkId) {
//       // If editing, update the existing link
//       await axios.put(`${API_URL}/links/${editingLinkId}`, payload, {
//         headers: { Authorization: `Bearer ${userToken}` }
//       });
//       alert("Link updated successfully ✅");
//     } else {
//       // Otherwise, create a new link
//       await axios.post(`${API_URL}/links/create`, payload, {
//         headers: { Authorization: `Bearer ${userToken}` }
//       });
//       alert("Link saved successfully ✅");
//     }

//     setTitle("");
//     setLinkUrl("");
//     setEditingLinkId(null);
//     onClose();
//   } catch (error) {
//     console.error("Error saving link:", error.response?.data || error.message);
//     alert("Failed to save link ❌");
//   }
// };