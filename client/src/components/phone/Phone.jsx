import React, { useContext } from 'react'
import "./phone.css"
import logo from "../../../public/logos.svg";
import { PhoneContext } from '../../hooks/PhoneContext';
import { socialApps } from '../../utils/constants';

const Phone = () => {

  const { avatar, bgColor, toggle,setToggle,textColor,profileTitle,username,bio,userLinks,userShop} = useContext(PhoneContext);

 
  return (
     <>
      <div className="phone">
                 <div style={{ background: `${bgColor}` }} className="phone_profile">
                   <img
                     className="image_piker"
                     src={avatar || "default-profile.png"}
                     alt=""
                   />
                   <p className='phone_text' style={{ color: textColor }}>
                    {profileTitle.trim() ? profileTitle : username}
                    </p>

                    <p className='phone_bio' style={{ color: textColor }}>
                    {bio}
                    </p>
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




             {toggle === "link" &&(
                 <div className="phone_links">
                   <div id="tasklist" className="phone_links_scroll">
                     {userLinks.length > 0 ?(
                      userLinks.map((link)=>{
                        const socialApp = socialApps.find((app) =>
                          link.title.toLowerCase().includes(app.name.toLowerCase())
                        );
                        
                        return(
                          <div key={link._id} className="phone_links_scroll_bar">
                            <div className='phone_links_scroll_bar_img_div'>
                            <img className='phone_links_scroll_bar_img' src={socialApp ? socialApp.img : ""} alt=""/>
                            </div>
                          
                         <p>{link.title}</p>
                         <a href={link.url} target="_blank" rel="noopener noreferrer" className="hidden-link">{link.url}</a>
                  
                </div>
                        )

                     })
                     ):(
                      <p style={{ color: textColor }}></p>
                     )}    
                   </div>
                 </div>
           )}
                 



             
                 {toggle === "shop" &&(
                   <div className="phone_links">
                   <div id="tasklist" className="phone_links_scroll">
                     {userShop.length > 0 ?(
                      userShop.map((shop)=>(
                    
                        <div key={shop._id} className="phone_links_scroll_bar">
                            <div className='phone_links_scroll_bar_img_div'>
                            <img className='phone_links_scroll_bar_img' src={shop.img} alt=""/>
                            </div>
                          
                         <p>{shop.title}</p>
                         <a href={shop.url} target="_blank" rel="noopener noreferrer" className="hidden-link">{shop.url}</a>
                  
                         </div>
                    ))
                     ):(
                      <p style={{ color: textColor }}></p>
                     )}    
                   </div>
                 </div> 
                 )}
                 
                 <div className="phone_button">
                   <button>Get Connected</button>
                 </div>
                 <div className="logo">
                   <h2>SPARK</h2>
                   <img src={logo} alt="" />
                 </div>
               </div>
     </>
  )
}

export default Phone
