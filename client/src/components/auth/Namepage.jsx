import React, { useState } from 'react'
import logo from "../../../public/logo.svg"
 import Frame from "../../../public/Frame.png"
 import "./auth.css"
import { categories } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Namepage = () => {
  const [bio, setBio] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate=useNavigate()



  const handleUpdateProfile = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Authentication token missing. Please log in again.");
      return;
    }


    const storedUser = localStorage.getItem("user");
    // console.log("Stored User:", storedUser);
  
      if (!storedUser) { alert("User not found. Please log in again.");
        return navigate('/login')
      }
  
      const parsedUser = JSON.parse(storedUser);
      const userId = parsedUser?.id || parsedUser?._id;
  
      // console.log("Extracted User ID:", userId);
  
      if (!userId) {alert("User ID missing. Please log in again."); return;}
      
      if (!bio || !selectedCategory) {alert("Please fill out all fields.");return;}
  
      try {
        const res = await axios.put(`${import.meta.env.VITE_AUTH_URL}/update-profile/${userId}`,
          
          { bio, category: selectedCategory },
          {
            headers: { 
              "Content-Type": "application/json",
               Authorization: `Bearer ${token}`
             },
            
          }
        );
  
        // console.log("API Response:", res.data);
        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          // console.log("User Stored in localStorage:", localStorage.getItem("user"))
        }
        // alert(res.data.msg);
        navigate('/dashboard');
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile");
      }
    }
  

    
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
                    <div>
                       <input className='from_input_div' type="text"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                       placeholder='Tell us about yourself' />
                    </div>
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

                  <button className='name_box_button'  onClick={handleUpdateProfile}  >Continue</button>         
              </div>
              
             
              </div>
              <img className='name_img' src={Frame} alt=""  />
            </section>
    </>
  )
}

export default Namepage

