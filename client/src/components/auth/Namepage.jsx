import React, { useState } from 'react'
import logo from "../../../public/logo.svg"
 import Frame from "../../../public/Frame.png"
 import "./auth.css"
import { categories } from '../../utils/constants'
import DashboardPage from '../../pages/DashboardPage'
import { useNavigate } from 'react-router-dom'
const Namepage = () => {
  const [username, setUsername] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);


  const nevigate=useNavigate(<DashboardPage/>)
  return (
    <>
          <section className='name'>
              <div className='name_from'>
                 <div className='logo'>
                  <img src={logo} alt="" />
                  <h2>SPARK<sup>TM</sup></h2>
                 </div>
      
              <div className='name_box'>
                  <h2 className='name_box_h2'>Tell us about yourself</h2>
                    <h5 className='name_box_h5'>For a personalized Spark experience</h5>
                  
                  <form className='form'>
                      <input type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                       placeholder='Tell us about yourself' />
                  </form>
                  <p className='selected_catagory_text'>Select one category that best describes your Linktree:</p>  

                  
                    <div className='selected_catagory'>
                        {
                          categories.map((catagory)=>(
                            <button 
                            key={catagory.name}

                           className={`catagory_button ${selectedCategory===catagory.name?"catagory_button_after":"catagory_button__before"}`}

                           onClick={() => setSelectedCategory(catagory.name)}
                            >
                              {catagory.icon} {catagory.name}
                            </button>
                          ))
                        }
                    </div>

                  <button className='name_box_button'  onClick={()=>nevigate('/dashboardPage')}  >Continue</button>         
              </div>
              
             
              </div>
              <img className='name_img' src={Frame} alt=""  />
            </section>
    </>
  )
}

export default Namepage
