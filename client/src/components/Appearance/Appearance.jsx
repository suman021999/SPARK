import React, { useState } from "react";
import "./appearance.css";
import Nav from "../Navbar/Nav";
import logo from "../../../public/logos.svg";
import { fillLine, HardShadow, outLine, SoftShadow, Spacial,} from "../../utils/constants";
// import { presetColors } from "../../utils/constants";

const appearancespage = () => {
  const [toggle, setToggle] = useState("link");
  //  const [bgColor, setBgColor] = useState("#3B2E25");
  // const [name,setName]=useState()

  return (
    <>
      <section className="apperences">
        <Nav isVisible={false} />
        <div className="apperences_scroll">
          <div className="phone">
            <div className="phone_profile">
              <img
                src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk3MzR8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHx8fHwxNzQwNDc3NjI5fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
              />
              <p>@anujoy</p>
            </div>

            

            

            <div className="phone_button">
              <button>Get Connected</button>
            </div>
            <div className="logo">
              <h2>SPARK</h2>
              <img src={logo} alt="" />
            </div>
          </div>


          <div className="apperence_box">
          <div className="layout">
            <h2>Layout</h2>
              <div className="layout_box">
                <div className="layout_box_templets"><img src="/public/stack.svg" alt="" /></div>
                <div className="layout_box_templets"><img src="/public/grids.svg" alt="" /></div>
                <div className="layout_box_templets"><img src="/public/carosel.svg" alt="" /></div>
              </div>
            </div>


            <div className="buttons">
            <h2>Button</h2>
            
            <div className="buttons_sEc">
              <div className="buttons_box">



                <div className="buttons_box_fill_box">
                  <p className="fill">Fill</p>
                  <div  className="buttons_box_fill">

                    {fillLine.map((connected, index) => (
                    <div key={index} style={connected}>
                    </div>
                     ))}

                  </div>
                </div>


                <div className="buttons_box_fill_box">
                  <p className="fill">Outline</p>
                  <div  className="buttons_box_fill">

                    {outLine.map((connected, index) => (
                    <div key={index} style={connected}>
                    </div>
                     ))}

                  </div>
                </div>

                <div className="buttons_box_fill_box">
                  <p className="fill">Hard shadow</p>
                  <div  className="buttons_box_fill">

                    {HardShadow.map((connected, index) => (
                    <div key={index} style={connected}>
                    </div>
                     ))}

                  </div>
                </div>


                <div className="buttons_box_fill_box">
                  <p className="fill">Soft shadow</p>
                  <div  className="buttons_box_fill">

                    {SoftShadow.map((connected, index) => (
                    <div key={index} style={connected}>
                    </div>
                     ))}

                  </div>
                </div>


                <div className="buttons_box_fill_box">
                  <p className="fill">Special</p>


                  <div  className="buttons_box_fill">

                    {Spacial.map((connected, index) => (
                    <div key={index} style={connected}>
                    </div>
                     ))}

                  </div>
                </div>

                
              </div>

              </div>

            </div>

          </div>





        </div>
      </section>
    </>
  );
};

export default appearancespage;
