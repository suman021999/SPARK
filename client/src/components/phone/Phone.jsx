
import React, { useContext } from "react";
import { IoShareOutline } from "react-icons/io5";
import "./phone.css";
import { PhoneContext } from "../../hooks/PhoneContext";
import { sellsApps, socialApps } from "../../utils/constants";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Phone = () => {
  const location = useLocation()
  const isPreviewMode = location.pathname.includes('/preview/');
  const {
    avatar,
    bgColor,
    toggle,
    setToggle,
    textColor,
    profileTitle,
    username,
    bio,
    userLinks,
    userShop,
    selectedButtonStyle,
    layoutbox,
    fontChange,
    fontColor,
    theam,
  } = useContext(PhoneContext);

  const displayUsername = username.includes("@")
    ? username.split("@")[0]
    : username;

  function cleanObject(obj) {
    const cleaned = {};
    for (const key in obj) {
      if (
        obj[key] !== undefined &&
        obj[key] !== null &&
        (typeof obj[key] !== "object" || Object.keys(obj[key]).length > 0) &&
        (Array.isArray(obj[key]) ? obj[key].length > 0 : true)
      ) {
        cleaned[key] = obj[key];
      }
    }
    return cleaned;
  }
    
  const handleShare = async () => {
    try {
      // Filter out empty userLinks and userShop
      const validUserLinks = userLinks.filter(link => link && Object.keys(link).length > 0) || [];
      const validUserShop = userShop?.filter(shop => shop && Object.keys(shop).length > 0) || [];
  
      const profileData = {
        avatar,
        username,
        bio,
        profileTitle,
        userLinks: validUserLinks,
        userShop: validUserShop,
        bgColor,
        textColor,
        selectedButtonStyle,
        layoutbox,
        fontChange,
        fontColor,
        theam,
      };
  
      const cleanedData = cleanObject(profileData);
      // console.log('Sending data:', cleanedData);
  
      const res = await axios.post(`${import.meta.env.VITE_USER_URL}/share`, cleanedData);
  
      const shareableLink = `${window.location.origin}/preview/${res.data.id}`;
      navigator.clipboard.writeText(shareableLink);
      alert("Shareable link copied to clipboard!");
    } catch (error) {
      console.error('Share failed:', error.response?.data || error.message);
      alert('Failed to create share link.');
    }
  };

  // Helper function to safely find app
  const findApp = (apps, linkTitle) => {
    if (!linkTitle) return null;
    return apps.find(app => 
      linkTitle.toLowerCase().includes(app.name.toLowerCase())
    );
  };

  return (
    <>
      <div className="phone">
        <div style={{ background: `${bgColor}` }} className="phone_profile">

        {!isPreviewMode && (
           <button className="phone_profile_btn" onClick={handleShare}>
            <IoShareOutline className="phone_profile_btn_icon"/></button>
          )}
          


          <img
            className="image_piker"
            src={avatar || "default-profile.png"}
            alt=""
          />
          <p className="phone_text" style={{ color: textColor }}>
            {profileTitle.trim() ? profileTitle : displayUsername}
          </p>

          <p className="phone_bio" style={{ color: textColor }}>
            {bio}
          </p>
        </div>

        <div className="phone_save">
          <div className="phone_save_container">
            <div
              onClick={() => setToggle("link")}
              className={`p_s_l  ${toggle === "link" ? "p_link" : "p_inital"}`}
            >
              link
            </div>
            <div
              onClick={() => setToggle("shop")}
              className={`p_s_l ${toggle === "shop" ? "p_link" : "p_inital"}`}
            >
              Shop
            </div>
          </div>
        </div>

        {toggle === "link" && (
          <div
            className="phone_links"
            style={{ backgroundColor: theam.bgColor }}
          >
            <div id="tasklist" className="phone_links_scroll">
              {userLinks && userLinks.length > 0 ? (
                layoutbox.id === "stack" ? (
                  userLinks.map((link, index) => {
                    if (!link || !link.title) return null;
                    const socialApp = findApp(socialApps, link.title);
                    return (
                      <div
                        key={link._id || index}
                        className="stack"
                        style={{ ...selectedButtonStyle, ...layoutbox }}
                      >
                        <div className="phone_links_scroll_bar_img_div">
                          <img
                            className="phone_links_scroll_bar_img"
                            src={socialApp ? socialApp.img : ""}
                            alt=""
                          />
                        </div>
                        <p
                          style={{
                            ...fontChange,
                            color: fontColor,
                            fontFamily: fontChange.fontFamily,
                          }}
                        >
                          {link.title}
                        </p>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden-link"
                        >
                          {link.url}
                        </a>
                      </div>
                    );
                  })
                ) : layoutbox.id === "grids" ? (
                  <div className="grid_layout">
                    {userLinks.map((link, index) => {
                      if (!link || !link.title) return null;
                      const socialApp = findApp(socialApps, link.title);
                      return (
                        <div
                          key={link._id || index}
                          className="grid_item"
                          style={{ ...selectedButtonStyle, ...layoutbox }}
                        >
                          <img
                            className="grid_img"
                            src={socialApp ? socialApp.img : ""}
                            alt=""
                          />
                          <p
                            style={{
                              ...fontChange,
                              color: fontColor,
                              fontFamily: fontChange.fontFamily,
                            }}
                          >
                            {link.title}
                          </p>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden-link"
                          >
                            {link.url}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                ) : layoutbox.id === "carousel" ? (
                  <div className="carousel_layout" id="tasklist">
                    {userLinks.map((link, index) => {
                      if (!link || !link.title) return null;
                      const socialApp = findApp(socialApps, link.title);
                      return (
                        <div
                          key={link._id || index}
                          className="carousel_item"
                          style={{ ...selectedButtonStyle, ...layoutbox }}
                        >
                          <img
                            className="carousel_img"
                            src={socialApp ? socialApp.img : ""}
                            alt=""
                          />
                          <p
                            style={{
                              ...fontChange,
                              color: fontColor,
                              fontFamily: fontChange.fontFamily,
                            }}
                          >
                            {link.title}
                          </p>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden-link"
                          >
                            {link.url}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p style={{ color: textColor }}>No links available</p>
                )
              ) : (
                <p style={{ color: textColor }}>No links available</p>
              )}
            </div>
          </div>
        )}

        {toggle === "shop" && (
          <div
            className="phone_links"
            style={{ backgroundColor: theam.bgColor }}
          >
            <div id="tasklist" className="phone_links_scroll">
              {userShop && userShop.length > 0 ? (
                layoutbox.id === "stack" ? (
                  userShop.map((shop, index) => {
                    if (!shop || !shop.title) return null;
                    const sellsApp = findApp(sellsApps, shop.title);
                    
                    return (
                      <div
                        key={shop._id || index}
                        className="stack"
                        style={{ ...selectedButtonStyle, ...layoutbox }}
                      >
                        <div className="phone_links_scroll_bar_img_div">
                          <img
                            className="phone_links_scroll_bar_img"
                            src={sellsApp ? sellsApp.img : ""}
                            alt=""
                          />
                        </div>
                        
                        <p
                          style={{
                            ...fontChange,
                            color: fontColor,
                            fontFamily: fontChange.fontFamily,
                          }}
                  
                        >
                          {shop.title}
                        </p>

                        <a
                          href={shop.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden-link"
                        >
                          {shop.url}
                        </a>
                      </div>
                    );
                  })
                ) : layoutbox.id === "grids" ? (
                  <div className="grid_layout">
                    {userShop.map((shop, index) => {
                      if (!shop || !shop.title) return null;
                      const sellsApp = findApp(sellsApps, shop.title);
                      
                      return (
                        <div
                          key={shop._id || index}
                          className="grid_item"
                          style={{ ...selectedButtonStyle, ...layoutbox }}
                        >
                          <img
                            className="grid_img"
                            src={sellsApp ? sellsApp.img : ""}
                            alt=""
                          />
                          <p
                            style={{
                              ...fontChange,
                              color: fontColor,
                              fontFamily: fontChange.fontFamily,
                            }}
                          >
                            {shop.title}
                          </p>
                          <a
                            href={shop.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden-link"
                          >
                            {shop.url}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                ) : layoutbox.id === "carousel" ? (
                  <div className="carousel_layout" id="tasklist">
                    {userShop.map((shop, index) => {
                      if (!shop || !shop.title) return null;
                      const sellsApp = findApp(sellsApps, shop.title);
                      
                      return (
                        <div
                          key={shop._id || index}
                          className="carousel_item"
                          style={{ ...selectedButtonStyle, ...layoutbox }}
                        >
                          <img
                            className="carousel_img"
                            src={sellsApp ? sellsApp.img : ""}
                            alt=""
                          />
                          <p
                            style={{
                              ...fontChange,
                              color: fontColor,
                              fontFamily: fontChange.fontFamily,
                            }}
                          >
                            {shop.title}
                          </p>
                          <a
                            href={shop.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden-link"
                          >
                            {shop.url}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p style={{ color: textColor }}>No shop items available</p>
                )
              ) : (
                <p style={{ color: textColor }}>No shop items available</p>
              )}
            </div>
          </div>
        )}

        <div className="logo">
          <h2>SPARK</h2>
          <img src="/public/logo.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Phone;



