import React, { useState, useEffect, useContext } from "react";
import "./links.css";
import Nav from "../Navbar/Nav";
import { presetColors } from "../../utils/constants";
import axios from "axios";
import LinkCard from "./LinkCard";
import Phone from "../phone/Phone";
import { PhoneContext } from "../../hooks/PhoneContext";
import ShopCard from "./ShopCard";

const Linkspage = () => {
  const [bio, setBio] = useState("");
  const [uploading, setUploading] = useState(false);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [userLinks, setUserLinks] = useState([]);
  const [userShop, setUserShop] = useState([]);

  const [editingLinkId, setEditingLinkId] = useState(null);
  const [editingShopId, setEditingShopId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedUrl, setEditedUrl] = useState("");

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
    // console.log("Stored Links:", storedLinks);
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
    // console.log("Stored Shops:", storedShops);
    if (storedShops && storedShops.length > 0) {
      setUserShop(storedShops);
    } else {
      fetchUserShop();
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
      // console.log("Fetched Data:", res.data);
      const shops = Array.isArray(res.data) ? res.data : [];

      setUserShop(shops);
      localStorage.setItem("userShop", JSON.stringify(shops));
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  // Start editing a link
  const startEditingLink = (link) => {
    setEditingLinkId(link._id);
    setEditedTitle(link.title);
    setEditedUrl(link.url);
  };

  // Start editing a shop
  const startEditingShop = (shop) => {
    setEditingShopId(shop._id);
    setEditedTitle(shop.title);
    setEditedUrl(shop.url);
  };

  // Update Link Function
  const handleUpdateLink = async (linkId) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_USER_URL}/links/update/${linkId}`,
        { title: editedTitle, url: editedUrl },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchUserLinks();
      setEditingLinkId(null);
    } catch (error) {
      console.error("Error updating link:", error);
    }
  };

  // Update Shop Function
  const handleUpdateShop = async (shopId) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_USER_URL}/shop/update/${shopId}`,
        { title: editedTitle, url: editedUrl },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchUserShop();
      setEditingShopId(null);
    } catch (error) {
      console.error("Error updating shop:", error);
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

  return (
    <>
      <section className="links">
        <Nav isVisible={true} />
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
                  <LinkCard
                    isOpen={isLinkModalOpen}
                    onClose={() => {
                      setIsLinkModalOpen(false);
                      fetchUserLinks();
                    }}
                    setUserLinks={setUserLinks}
                    userLinks={userLinks}
                  />
                )}

                {/* ShopCard Modal */}
                {isShopModalOpen && (
                  <ShopCard
                    isOpen={isShopModalOpen}
                    onClose={() => {
                      setIsShopModalOpen(false);
                      fetchUserShop();
                    }}
                    setUserShop={setUserShop}
                    userShop={userShop}
                  />
                )}

                {/* Display Saved Links */}

                {toggle === "link" && (
                  <div className="saved-links">
                    {userLinks.length === 0
                      ? ""
                      : userLinks.map((link) => (
                          <div
                            key={link._id}
                            className="phone_save_container_saved-link"
                          >
                            {/* Edit Mode */}
                            {editingLinkId === link._id ? (
                              <div className="edit_link_shop_flex">
                                <div className="edit_link_shop_flex_div" onClick={() => handleLinkClick(link._id)}>
                                <input
                                className="edit_link_shop_flex_input"
                                  type="text"
                                  value={editedTitle}
                                  onChange={(e) =>
                                    setEditedTitle(e.target.value)
                                  }
                                />
                                <input
                                className="edit_link_shop_flex_input"
                                  type="text"
                                  value={editedUrl}
                                  onChange={(e) => setEditedUrl(e.target.value)}
                                />
                                </div>
                                

                                <div
                                  className={`toggle-switch ${
                                    editingLinkId === link._id ? "" : "on"
                                  }`}
                                  onClick={() => handleUpdateLink(link._id)}
                                >
                                  <div className="toggle-thumb"></div>
                                </div>
                              </div>
                            ) : (
                              // Display Mode
                              <>
                                <div key={link._id} className="edit_link_shop_flex">
                                  <div>
                                  <div>{link.title}</div>
                                  <div className="phone_save_container_saved-link_url_div" >
                                    <div onClick={() => handleLinkClick(link._id)}>
                                    <a
                                      className="phone_save_container_saved-link_url"
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      
                                    >
                                      {link.url}
                                    </a>
                                    </div>
                                  </div>
                                  <div className="click-count">Clicks: {link.clicks}</div>
                                  </div>
                                 
                                  <div
                                    className={`toggle-switch ${
                                      editingLinkId === link._id ? "" : "on"
                                    }`}
                                    onClick={() => startEditingLink(link)}
                                  >
                                    <div className="toggle-thumb"></div>
                                  </div>
                                </div>
                              </>
                            )}
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
                            className="phone_save_container_saved-link"
                          >
                            {/* Edit Mode */}
                            {editingShopId === shop._id ? (
                              <div className="edit_link_shop_flex">
                                <div className="edit_link_shop_flex_div" onClick={() => handleShopClick(shop._id)}>
                                <input
                                className="edit_link_shop_flex_input"
                                  type="text"
                                  value={editedTitle}
                                  onChange={(e) =>
                                    setEditedTitle(e.target.value)
                                  }
                                />
                                <input
                                className="edit_link_shop_flex_input"
                                  type="text"
                                  value={editedUrl}
                                  onChange={(e) => setEditedUrl(e.target.value)}
                                />
                                </div>
                              
                                <div
                                  className={`toggle-switch ${
                                    editingShopId === shop._id ? "" : "on"
                                  }`}
                                  onClick={() => handleUpdateShop(shop._id)} // Calls update function when toggled
                                >
                                  <div
                                    className="toggle-thumb"
                                    onClick={() => setEditingShopId(null)} // Cancels edit on thumb click
                                  ></div>
                                </div>

                              </div>
                            ) : (
                              <>
                                <div key={shop._id} className="edit_link_shop_flex">
                                  <div >
                                  <div>{shop.title}</div>
                                  <div className="phone_save_container_saved-link_url_div">
                                  <div onClick={() => handleShopClick(shop._id)}>
                                  <a
                                      className="phone_save_container_saved-link_url"
                                      href={shop.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => handleShopClick(shop._id)}
                                    >
                                      {shop.url}
                                    </a>
                                    </div>
                                  </div>
                                  <div className="click-count">Clicks: {shop.clicks}</div>
                                  </div>
                                  
                                  <div
                                    className={`toggle-switch ${
                                      editingShopId === shop._id ? "" : "on"
                                    }`}
                                    onClick={() => startEditingShop(shop)}
                                  >
                                    <div className="toggle-thumb"></div>
                                  </div>
                                </div>
                              </>
                            )}
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
                    {`/${profileTitle}`}
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
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="profile_sec_button_box">
                {" "}
                <button className="profile_sec_button">save</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Linkspage;
