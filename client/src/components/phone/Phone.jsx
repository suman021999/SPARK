import React from 'react'

const Phone = () => {
  return (
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
  )
}

export default Phone
