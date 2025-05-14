import React, { useState, useEffect, useContext } from "react";
import "./links.css";
import { RiDeleteBin6Line } from "react-icons/ri"
import Nav from "../Navbar/Nav";
import { fillLine, fonts, layouts, presetColors } from "../../utils/constants";
import axios from "axios";
import Phone from "../phone/Phone";
import { PhoneContext } from "../../hooks/PhoneContext";
import LinkModal from "./LinkModal";
import ShopModal from "./ShopModal";

const Linkspage = () => {
  const [uploading, setUploading] = useState(false);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [currentEditLink, setCurrentEditLink] = useState(null);
  const [currentEditshop, setCurrentEditShop] = useState(null);

  const {
    avatar,
    setAvatar,
    bgColor,
    setBgColor,
    toggle,
    setToggle,
    textColor,
    profileTitle,
    setProfileTitle,
    bio, 
    setBio,
    userLinks, 
    setUserLinks,
    userShop, 
    setUserShop,
    setSelectedButtonStyle,
    setLayoutbox,setFillLineButton,
    setLayaout,layaout,fillLineButton,
    setTheam,setSelectFont,setFontChange
      
    
  } = useContext(PhoneContext);





  useEffect(() => {
    const storedAvatar = localStorage.getItem("avatar");
    if (storedAvatar) {
      setAvatar(storedAvatar);
    }
  }, []);

  // upload images
  const handlePhotoChange = async (evx) => {
    const file = evx.target.files[0];
    if (!file) return;

    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID is missing");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("userId", userId);

    try {
      setUploading(true);
      console.log("setUploading....");

      const res = await axios.post(
        `${import.meta.env.VITE_USER_URL}/upload-profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        setAvatar(res.data.avatar);
        localStorage.setItem("avatar", res.data.avatar);
      } else {
        console.error("Upload failed:", res.data.error);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };
  // Handle Profile Image Removal
  const handleRemoveImage = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID is missing");
      return;
    }

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_USER_URL}/remove-profile`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setAvatar(null);
        localStorage.removeItem("avatar");
      }
    } catch (error) {
      console.error("Error removing profile image:", error);
    }
  };

  // Fetch user links when page loads

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("userLinks"));
    if (storedLinks && storedLinks.length > 0) {
      setUserLinks(storedLinks);
    } else {
      fetchUserLinks();
    }
  }, []);

  const fetchUserLinks = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_USER_URL}/links/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log("Fetched Data:", res.data);
      const links = Array.isArray(res.data) ? res.data : [];

      setUserLinks(links);
      localStorage.setItem("userLinks", JSON.stringify(links));
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };
  // Fetch user shops when page loads
  useEffect(() => {
    const storedShops = JSON.parse(localStorage.getItem("userShops"));
    if (storedShops && storedShops.length > 0) {
      setUserShop(storedShops);
    } else {
      fetchUserShop()
    }
  }, []);

  const fetchUserShop = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_USER_URL}/shop/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const shops = Array.isArray(res.data) ? res.data : [];

      setUserShop(shops);
      localStorage.setItem("userShop", JSON.stringify(shops));
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

 // Handle Link Click & Update UI
 const handleLinkClick = async (linkId) => {
  try {
    const res = await axios.put(`${import.meta.env.VITE_USER_URL}/links/${linkId}/click`);
    console.log("Click updated:", res.data);

    setUserLinks((prevLinks) =>
      prevLinks.map((link) =>
        link._id === linkId ? { ...link, clicks: link.clicks + 1 } : link
      )
    );
  } catch (error) {
    console.error("Error updating click count:", error);
  }
};

// Handle Shop Click & Update UI
const handleShopClick = async (shopId) => {
  try {
    const res = await axios.put(`${import.meta.env.VITE_USER_URL}/shop/${shopId}/click`);
    console.log("Click updated:", res.data);

    setUserShop((prevShops) =>
      prevShops.map((shop) =>
        shop._id === shopId ? { ...shop, clicks: shop.clicks + 1 } : shop
      )
    );
  } catch (error) {
    console.error("Error updating shop click count:", error);
  }
};

const handleDeleteLink = async (linkId) => {
  if (!linkId) return;
  try {
    await axios.delete(`${import.meta.env.VITE_USER_URL}/links/delete/${linkId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    fetchUserLinks()

    setUserLinks((prevLinks) => prevLinks.filter((link) => link._id !== linkId));
    alert("Link deleted successfully ✅");
  } catch (error) {
    console.error("Error deleting link:", error.response?.data || error.message);
    alert("Failed to delete link ❌");
  }
};

const handleDeleteShop = async (shopId) => {
  if (!shopId) return;
  try {
    await axios.delete(`${import.meta.env.VITE_USER_URL}/shop/delete/${shopId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    fetchUserShop()
    setUserShop((prevShops) => prevShops.filter((shop) => shop._id !== shopId));
    alert("Shop deleted successfully ✅");
  } catch (error) {
    console.error("Error deleting shop:", error.response?.data || error.message);
    alert("Failed to delete shop ❌");
  }
}


const handleSaveProfile = async () => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("User ID is missing!");
    return;
  }

  const payload = {
    userId,
    profileTitle,
    bio,
    bgColor,
  };

  try {
    const res = await axios.put(`${import.meta.env.VITE_AUTH_URL}/saved`,
      payload,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    if (res.data.success) {
      alert("Profile saved successfully ✅");

      // Save data to localStorage for instant persistence
      localStorage.setItem("profileTitle", profileTitle);
      console.log(profileTitle)
      localStorage.setItem("bio", bio);
      localStorage.setItem("bgColor", bgColor);
      if (typeof theam === "object") {
        localStorage.setItem("themes", JSON.stringify(theam));
      } 
      if(layaout){
        localStorage.setItem('layaout',JSON.stringify(layaout))
      }
     
    if (fillLineButton) {
      localStorage.setItem("fillLineButton", JSON.stringify(fillLineButton));
    }
    }
  } catch (error) {
    console.error("Error saving profile:", error);
    alert("Failed to save profile ❌");
  }
};

useEffect(() => {
  const storedProfileTitle = localStorage.getItem("profileTitle");
  const storedBio = localStorage.getItem("bio");
  const storedBgColor = localStorage.getItem("bgColor");
    const storedLayaout = localStorage.getItem("layaout");
    const storedfillLineButton=localStorage.getItem("fillLineButton")
    const storedTheam = localStorage.getItem("themes");
    // const storedFont = localStorage.getItem("selectedFont");
  
    if (storedLayaout) {
      const parsedLayaout = JSON.parse(storedLayaout);
      setLayaout(parsedLayaout);
  
      const foundLayout = layouts.find(layout => layout.id === parsedLayaout);
      if (foundLayout) {
        setLayoutbox(foundLayout);
      }
    }
  
    if (storedfillLineButton) {
      const parsedstoredfillLineButton = JSON.parse(storedfillLineButton);
      setFillLineButton(parsedstoredfillLineButton);
  
      const foundstoredfillLineButton = fillLine.find(FillLine => FillLine.id === parsedstoredfillLineButton);
      if (foundstoredfillLineButton) {
        setSelectedButtonStyle(foundstoredfillLineButton);
      }
    }
    if (storedTheam) setTheam(JSON.parse(storedTheam));
  if (storedProfileTitle) setProfileTitle(storedProfileTitle);
  if (storedBio) setBio(storedBio);
  if (storedBgColor) setBgColor(storedBgColor);


  // if (storedFont) {
  //   const parsedFont = JSON.parse(storedFont);
  //   setSelectFont(parsedFont);
  //   const foundFont = fonts.find(font => font.fonts === parsedFont);
  //   if (foundFont) {
  //     setFontChange({ fontFamily: foundFont.fonts });
  //     if (!document.querySelector(`link[href="${foundFont.url}"]`)) {
  //       const link = document.createElement("link");
  //       link.href = foundFont.url;
  //       link.rel = "stylesheet";
  //       document.head.appendChild(link);
  //     }
  //   }
  // }

  
}, []);

  return (
    <>
      <section className="links">
        <Nav />
        <div className="links_scroll">
          {/* phone */}
          <Phone
            avatar={avatar}
            toggle={toggle}
            bgColor={bgColor}
            setToggle={setToggle}
          />

          <div className="profile">
            <div className="profile_sec">
              <h2>profile</h2>

              <div className="profile_box">
                <div className="image_piker">
                  <img src={avatar || "default-profile.png"} alt="" />

                  <div className="image_piker_button">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      style={{ display: "none" }}
                      id="fileInput"
                    />
                    <button
                      className="image_piker_upload"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      {uploading ? "Uploading..." : "Pick an image"}
                    </button>
                    <button
                      className="image_piker_remove"
                      onClick={handleRemoveImage}
                    >
                      remove
                    </button>
                  </div>
                </div>

                <div className="profile_title_profile">
                  <label htmlFor="profileTitle">Profile Title</label>

                  <input
                    className="profile_title"
                    type="text"
                    value={profileTitle}
                    onChange={(e) => setProfileTitle(e.target.value)}
                    id="profileTitle"
                  />
                </div>
                <div className="profile_title_grp_bio">
                  <label htmlFor="profilebio">bio</label>
                  <textarea
                    className="profile_bio"
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    name=""
                    id="profilebio"
                  />
                </div>
              </div>

              <div className="profile_links">
                <div className="profile_save">
                  <div className="phone_save_container">
                    
                    <div
                      onClick={() => {
                        setToggle("link");
                        setIsShopModalOpen(false);
                      }}
                      className={`p_s_l  ${
                        toggle === "link" ? "p_link" : "p_inital"
                      }`}
                    >
                      Add link
                    </div>
                    <div
                      onClick={() => {
                        setToggle("shop");
                        setIsLinkModalOpen(false);
                      }}
                      className={`p_s_l ${
                        toggle === "shop" ? "p_link" : "p_inital"
                      }`}
                    >
                      Add Shop
                    </div>
                  </div>
                </div>

                {/* "+Add" Button for Link */}
                {toggle === "link" && (
                  <button
                    className="profile_links_add"
                    onClick={() => setIsLinkModalOpen(true)}
                  >
                    +Add
                  </button>
                )}

                {/* "+Add" Button for Shop */}
                {toggle === "shop" && (
                  <button
                    className="profile_links_add"
                    onClick={() => setIsShopModalOpen(true)}
                  >
                    +Add
                  </button>
                )}

                {/* LinkCard Modal */}
                {isLinkModalOpen && (
                  <LinkModal
                    isOpen={isLinkModalOpen}
                    onClose={() => {
                      setIsLinkModalOpen(false);
                      setCurrentEditLink(null);
                      fetchUserLinks();
                    }}
                    
                    setUserLinks={setUserLinks}
                    userLinks={userLinks}
                    editLink={currentEditLink}
          
                  />
                )}

                {/* ShopCard Modal */}
                {isShopModalOpen && (
                  <ShopModal
                    isOpen={isShopModalOpen}
                    onClose={() => {
                      setIsShopModalOpen(false);
                      setCurrentEditShop(null)
                      fetchUserShop();
                    }}
                    editShop={currentEditshop}
                    setUserShop={setUserShop}
                    userShop={userShop}
                  />
                )}

                {/* Display Saved Links */}

                {toggle === "link" && (
                  <div className="saved-links">
                    {userLinks.length === 0
                      ? ""
                      :
                       userLinks.map((link) => (
                          <div key={link._id}
                            className="phone_save_container_saved-link">

                               <div key={link._id} className="edit_link_shop_flex">
                                 <div className="edit_link_shop_flex_container">

                                  
                                   <div className="phone_save_container_saved-link_url_text"
                                    
                                    onClick={() =>{ 
                                      setCurrentEditLink(link);
                                      setIsLinkModalOpen(true)
                                    }}
                                     >
                                   <div>
                                     {link.title}
                                   </div>
                                   <img onClick={() => handleLinkClick(link._id)} src="/public/pen.png" alt="" />
                                   </div>
                                   
                                
                                 <div className="phone_save_container_saved-link_url_div" >
                                   <div className="phone_save_container_saved-link_url_link" onClick={() => handleLinkClick(link._id)}>
                                    
                                    <a
                                     style={{overflow:"hidden",height:'5vh',width:"30vw"}}
                                     className="phone_save_container_saved-link_url"
                                     href={link.url}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     
                                   >
                                     {link.url}
                                   </a>
                                    
                                  
                                   
                                   <img  src="/public/pen.png" alt=""  onClick={() =>{ 
                                      setCurrentEditLink(link);
                                      setIsLinkModalOpen(true)
                                    }}/>

                                   </div>
                                 </div>


                                 <div className="click-count">
                                 <img src="/public/click.svg" alt="" />
                                 Clicks: {link.clicks}
                                 </div>
                                 </div>

                                <div className="toggle-switch_delete">
                                <div
                                   className="toggle-switch on">
                                   <div className="toggle-thumb"></div>
                                 </div>
                                 <div onClick={() => handleDeleteLink(link._id)}><RiDeleteBin6Line /></div>
                                </div>
                                 

                               </div>
                             
                          </div>
                        ))}
                  </div>
                )}

                {/* Display Saved Shops */}

                {toggle === "shop" && (
                  <div className="saved-links">
                    {userShop.length === 0
                      ? ""
                      : userShop.map((shop) => (
                          <div
                            key={shop._id}
                            className="phone_save_container_saved-link">
                            
                                <div key={shop._id} className="edit_link_shop_flex">

                                  <div className="edit_link_shop_flex_container">
                                  <div className="phone_save_container_saved-link_url_text"
                                    
                                    onClick={() =>{ 
                                      setCurrentEditShop(shop);
                                      setIsShopModalOpen(true)
                                    }}
                                     >
                                      <div>{shop.title}</div>
                                      <img onClick={() => handleShopClick(shop._id)}   src="/public/pen.png" alt="" />
                                     </div>

                                  

                                  <div className="phone_save_container_saved-link_url_div">
                                  <div className="phone_save_container_saved-link_url_link" onClick={() => handleShopClick(shop._id)}>
                                    <a
                                    style={{overflow:"hidden",height:'5vh',width:"30vw"}}
                                      className="phone_save_container_saved-link_url"
                                      href={shop.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      
                                    >
                                      {shop.url}
                                    </a>
                                   
                               
                                    <img  src="/public/pen.png" alt=""  onClick={() =>{ 
                                     setCurrentEditShop(shop);
                                     setIsShopModalOpen(true)
                                    }}/>
                                    </div>
                                  </div>
                                  <div className="click-count">
                                    <img src="/public/click.svg" alt="" />
                                    Clicks: {shop.clicks}</div>
                                  </div>
                             
                              
                                  <div className="toggle-switch_delete">
                                  <div
                                   className="toggle-switch on">
                                   <div className="toggle-thumb"></div>
                                 </div>
                                 <div onClick={() => handleDeleteShop(shop._id)}><RiDeleteBin6Line /></div>
                                  </div>

                                </div>
                            
                          </div>

                        ))}
                  </div>
                )}


              </div>


              <div className="profile_banner">
                <div
                  style={{ background: `${bgColor}` }}
                  className="banner_black"
                >
                  <img
                    className="banner_black_logo"
                    src={avatar || "default-profile.png"}
                    alt=""
                  />
                  <h2 style={{ color: textColor }} className="banner_black_h2">
                    {profileTitle}
                  </h2>
                  <p className="banner_black_p" style={{ color: textColor }}>
                    <img src="/public/logos.svg" alt="" />
                    {`/${bio}`}
                  </p>
                </div>

                <div className="banner_black_color_piker">
                  <p>Custom Background Color</p>
                  <div className="banner_black_color_box">
                    {presetColors.map((color) => (
                      <button
                        key={color}
                        className="banner_black_color_box_button"
                        style={{ background: color }}
                        onClick={() => setBgColor(color)}
                      ></button>
                    ))}
                  </div>

                  <div className="banner_black_tag">
                    <div
                      style={{ background: `${bgColor}` }}
                      className="banner_black_icon"
                    ></div>
                    <input
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="profile_sec_button_box">
                {" "}
                <button className="profile_sec_button" onClick={handleSaveProfile}>save</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Linkspage;
