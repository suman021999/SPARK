import React from 'react'
import "./display.css"
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import logos from "../../../public/logos.svg"
const Contact = () => {
  return (
    <>
      <section id='contact_sec'>
        <div className='contact'>
            <div className='contact_pages'>
                <div className='page'>
                    <div className='auth'>
                        <button className='login'>Log in</button>
                        <button className='singin'>Sing up free</button>
                    </div>

                    <div className='page_text'>
                        <div>
                            <h4>About Spark</h4>
                            <h4>Blog</h4>
                            <h4>Press</h4>
                            <h4>Social Good</h4>
                            <h4>Contact</h4>
                        </div>

                        <div>
                            <h4>Careers</h4>
                            <h4>Getting Started</h4>
                            <h4>Features and How-Tos</h4>
                            <h4>FAQs</h4>
                            <h4>Report a Violation</h4>
                        </div>

                        <div>
                            <h4>Terms and Conditions</h4>
                            <h4>Privacy Policy</h4>
                            <h4>Cookie Notice</h4>
                            <h4>Trust Center</h4>
                        </div>
                    </div>
                    
                </div>

                <div className='contact_connection'>
                        <p className='contact_connection_text'>
                            We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging.
                        </p> 
                    <div className='contact_connection_icons'>
                            <FaTwitter/>
                            <AiFillInstagram/>
                            <img className='icons_img' src={logos} alt="" />
                            <FaYoutube/>
                            <FaTiktok/>
                            
                    </div>
                </div>

            </div>
        </div>

      </section>
    </>
  )
}

export default Contact
