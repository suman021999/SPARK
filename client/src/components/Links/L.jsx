import React, { useEffect, useState } from "react";
import { FaCopy, FaTrash } from "react-icons/fa";
import axios from "axios";

const LinkCard = ({ isOpen, onClose, setUserLinks }) => {


  if (!isOpen) return null;

  const handleSave = async () => {
    if (!title || !linkUrl) {
      alert("Please enter both a title and URL!");
      return;
    }

    try {
      const payload = { url: linkUrl, title };

      if (editingLinkId) {
        // If editing, update the existing link
        await axios.put(`${import.meta.env.VITE_USER_URL}/links/${editingLinkId}`, payload, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        alert("Link updated successfully ✅");
      } else {
        // Otherwise, create a new link
        const response = await axios.post(`${import.meta.env.VITE_USER_URL}/links/create`, payload, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        alert("Link saved successfully ✅");

        // Update the main page links
        setUserLinks((prevLinks) => [...prevLinks, response.data]);
      }

      setTitle("");
      setLinkUrl("");
      setEditingLinkId(null);
      onClose();
    } catch (error) {
      console.error("Error saving link:", error.response?.data || error.message);
      alert("Failed to save link ❌");
    }
  };

  return (
    <div className="linkcard_modal-overlay" onClick={onClose}>
      <div className="linkcard_modal-content">
        <h2>Enter URL</h2>

        <input
          type="text"
          placeholder="Link Title"
          className="linkcard_modal-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Link URL"
          className="linkcard_modal-input"
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
        />

        <div className="linkcard_modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;

