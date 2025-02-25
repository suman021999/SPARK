
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

          <div   onClick={() => setToggle('link')} className={ `p_s_l  ${toggle === 'link'? 'p_link':'p_inital'}` }>link</div>
          <div  onClick={() => setToggle('shop')} className={ `p_s_l ${toggle === 'shop'? 'p_link':'p_inital'}` }>Shop</div>

          </div>
        </div>

        <div className='phone_links'>
          <div id="tasklist" className="phone_links_scroll">

                  <div className='phone_links_scroll_bar'>
                  <img src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk3MzR8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHx8fHwxNzQwNDc3NjI5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                  <p>Latest YouTube Video</p>
                  </div>

                  <div className='phone_links_scroll_bar'>
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

                <div className='profile_title'>
                  <p className='profile_title_text'>Profile Title</p>
                  <h2>@24251</h2>
                </div>

                <div className='profile_bio'>
                  <h2>bio</h2>
                  <p>bio</p>
                </div>
                
              </div>


              <div className='profile_links'>


              <div className='profile_save'>
          <div className='phone_save_container'>

          <div   onClick={() => setToggle('link')} className={ `p_s_l  ${toggle === 'link'? 'p_link':'p_inital'}` }>link</div>
          <div  onClick={() => setToggle('shop')} className={ `p_s_l ${toggle === 'shop'? 'p_link':'p_inital'}` }>Shop</div>

          </div>

          
               </div>

               <button className='profile_links_add'>+Add</button>

              </div>


              <div className='profile_banner'>
                  <div className="banner_black">
                    <img className='banner_black_logo' src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk3MzR8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHx8fHwxNzQwNDc3NjI5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                    <h2>@opopo_08</h2>
                    <p><img src="/public/logos.svg" alt="" />/opopo_08</p>
                  </div>


                  <div className="banner_black_color_piker">
                    <p>Custom Background Color</p>
                    <div>
                      <div className='light_black'></div>
                      <div className='white'></div>
                      <div className='black'></div>
                    </div>
                  </div>
              </div>


              <button></button>
            </div>


            
      </div>

    </div>
    </section>
   </>
  )
}

export default Linkspage
