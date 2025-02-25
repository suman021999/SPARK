
import React, { useState } from 'react'
import "./links.css"
import Nav from '../Navbar/Nav'
import logo from "../../../public/logos.svg"
const Linkspage = () => {

  const [toggle, setToggle] = useState('link');
  return (
   <>
    
    <section className='links'>
    <Nav/>
    <div className='links_scroll'>

      <div className='phone'>
        <div className='phone_profile'>
          <img src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk3MzR8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHx8fHwxNzQwNDc3NjI5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
          <p>@anujoy</p>
        </div>

        <div className='phone_save'>
          <div className='phone_save_container'>

          <div  onClick={() => setToggle('link')} className={ `p_s_l  ${toggle === 'link'? 'p_link':'p_inital'}` }>link</div>
          <div onClick={() => setToggle('shop')} className={ `p_s_l ${toggle === 'shop'? 'p_link':'p_inital'}` }>Shop</div>

          </div>
        </div>

        <div className='phone_links'>
          <div id="tasklist" className="phone_links_scroll">

                  <div>
                  <img src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk3MzR8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHx8fHwxNzQwNDc3NjI5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                  <p>Latest YouTube Video</p>
                  </div>

                  <div>
                  <img src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk3MzR8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHx8fHwxNzQwNDc3NjI5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                  <p>Latest YouTube Video</p>
                  </div>
                  
          </div>
        </div>

        <div className='phone_button'><button>Get Connected</button></div>
        <div className='logo'><h2>SPARK</h2><img src={logo} alt="" /></div>
      </div>


      <div className='profile'>
            <div>
              <h2>profile</h2>
              <div className='profile_box'>
                <div className='image_piker'>
                  <img src="https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk3MzR8MHwxfHNlYXJjaHwzfHxnb2R8ZW58MHx8fHwxNzQwNDg1NDUwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" />

                  <div className='image_piker_button'>
                    <button className='image_piker_upload'>Pick an image</button>
                    <button className='image_piker_remove'>remove</button>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div></div>
            <div></div>
            <button></button>
      </div>

    </div>
    </section>
   </>
  )
}

export default Linkspage
