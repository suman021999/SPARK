import React, { useEffect, useState } from "react";
import "./links.css";
import Nav from "../Navbar/Nav";
import logo from "../../../public/logos.svg";
import { presetColors } from "../../utils/constants";
import axios from 'axios'
import LinkCard from "./LinkCard";


const Linkspage = () => {
  const [toggle, setToggle] = useState("link"); 
  const [isModalOpen, setIsModalOpen] = useState(false);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  const [bgColor, setBgColor] = useState("#3B2E25");
  const [color, setColor] = useState("#222");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [profileTitle, setProfileTitle] = useState("");
  const [bio, setBio] = useState("");
  const [uploading, setUploading] = useState(false);


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
      console.log(setUploading)
  
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
  
  const handleRemoveImage =async () => {
    try {
      const res=await axios.put(`${import.meta.env.VITE_USER_URL}/remove-profile`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      if (res.data.success) {
        setAvatar(null); 
        // alert("Profile image removed successfully!");
      }
    } catch (error) {
      console.error("Error removing profile image:", error);
      // alert("Failed to remove profile image.");
    }
  };



 

  // const handleUpdate = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.put(`${import.meta.env.VITE_USER_URL}/update-profile/${userId}`,
  //       { profileTitle, bio }
  //     );
  //     setMessage(res.data.message);
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   setLoading(false);
  // };


  return (
    <>
      <section className="links">

        <Nav isVisible={true} />
        <div className="links_scroll">


          <div className="phone">

            <div style={{ background: `${bgColor}` }} className="phone_profile">
              <img className="image_piker"
                src={avatar || "default-profile.png"}
                alt=""
              />
              <p>@anujoy</p>
            </div>

            <div className="phone_save">
              <div className="phone_save_container">
                <div
                  onClick={() => setToggle("link")}
                  className={`p_s_l  ${
                    toggle === "link" ? "p_link" : "p_inital"
                  }`}
                >
                  link
                </div>
                <div
                  onClick={() => setToggle("shop")}
                  className={`p_s_l ${
                    toggle === "shop" ? "p_link" : "p_inital"
                  }`}
                >
                  Shop
                </div>
              </div>
            </div>

            <div className="phone_links">
              <div id="tasklist" className="phone_links_scroll">
                <div className="phone_links_scroll_bar">
                  <img
                    src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk3MzR8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHx8fHwxNzQwNDc3NjI5fDA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt=""
                  />
                  <p>Latest YouTube Video</p>
                </div>

                <div className="phone_links_scroll_bar">
                  <img
                    src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk3MzR8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHx8fHwxNzQwNDc3NjI5fDA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt=""
                  />
                  <p>Latest YouTube Video</p>
                </div>
              </div>
            </div>

           
            <div className="phone_button">
              <button>Get Connected</button>
            </div>
            <div className="logo">
              <h2>SPARK</h2>
              <img src={logo} alt="" />
            </div>
          


          </div>




          <div className="profile">

            <div className="profile_sec">
              <h2>profile</h2>

              <div className="profile_box">

                <div className="image_piker">
                  <img
                    src={avatar || "default-profile.png"}
                    alt=""
                  />

                  <div className="image_piker_button">
                  <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        style={{ display: "none" }}
                        id="fileInput"
                      />
                    <button className="image_piker_upload"
                    onClick={()=>document.getElementById("fileInput").click()}
                    >
                      {uploading ? "Uploading..." : "Pick an image"}
                    </button>
                    <button className="image_piker_remove" 
                    onClick={handleRemoveImage}>remove</button>
                  </div>

                </div>
                   
                <div className="profile_title_profile" >
                <label  htmlFor="profileTitle">Profile Title</label>
                  <input 
                  className="profile_title"
                   type="text"
                  //  value={profileTitle}
                  //  onChange={(e) => setProfileTitle(e.target.value)}
                    // placeholder="dfsdf"
                    id="profileTitle"
                     />
                  
                  </div>
                  <div className="profile_title_grp_bio" >
                  <label  htmlFor="profilebio">bio</label>
                  <textarea
                   className="profile_bio" 
                   type="text" 
                  //  value={bio}
                  //  onChange={(e) => setBio(e.target.value)}
                   name="" 
                   id="profilebio" />
                  </div>

                 

                </div>



              <div className="profile_links">

                <div className="profile_save">
                  <div className="phone_save_container">
                    <div
                      onClick={() => setToggle("link")}
                      className={`p_s_l  ${
                        toggle === "link" ? "p_link" : "p_inital"
                      }`}
                    >
                       Add link
                    </div>
                    <div
                      onClick={() => setToggle("shop")}
                      className={`p_s_l ${
                        toggle === "shop" ? "p_link" : "p_inital"
                      }`}
                    >
                       Add Shop
                    </div>
                  </div>
                </div>


                 {/* "+Add" Button */}
                 {toggle === "link" && (
                    <button className="profile_links_add" onClick={() => setIsModalOpen(true)}>
                      +Add
                    </button>
                  )}

                  {/* LinkCard Modal */}
                  {isModalOpen && <LinkCard isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
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
                  <h2 onChange={()=>setColor(color)}  className={`banner_black_h2 ${color=='#ffffffde'?'#222':''}`}>@opopo_08</h2>
                  <p className="banner_black_p">
                    <img src="/public/logos.svg" alt="" />
                    /opopo_08
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
                  <div style={{ background: `${bgColor}` }} className="banner_black_icon"></div>
                  <input
                    type="text"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full mt-2 p-2 border rounded"
                  />
                  </div>
                </div>
              </div>
             <div className="profile_sec_button_box"> <button className="profile_sec_button">save</button></div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Linkspage;
