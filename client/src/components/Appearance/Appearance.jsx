import React, {  useContext, useState } from "react";
import "./appearance.css";
import Nav from "../Navbar/Nav";
import {
  fillLine,
  fonts,
  layouts,
  themebox,
} from "../../utils/constants";
import Phone from "../phone/Phone";
import { PhoneContext } from "../../hooks/PhoneContext";


const appearancespage = () => {
  const [isFontOpen, setIsFontOpen] = useState(false);
  const [selectFont, setSelectFont] = useState("");
  const [fillLineButton, setFillLineButton] = useState(null);
  const [layaout, setLayaout] = useState(null);
 const { avatar,  bgColor,  toggle,setSelectedButtonStyle,setLayoutbox , setFontChange,fontColor, setFontColor,setTheam,theam} = useContext(PhoneContext)


 const handleFontSelect = (fontName, fontUrl) => {
  setSelectFont(fontName);
  setIsFontOpen(false);

  // Avoid duplicate font link elements
  if (!document.querySelector(`link[href="${fontUrl}"]`)) {
    const link = document.createElement("link");
    link.href = fontUrl;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
};

  return (
    <>
      <section className="apperences">
        <Nav isVisible={false} />
        <div className="apperences_scroll">
          
        {/* phone */}
           <Phone avatar={avatar} toggle={toggle} bgColor={bgColor} />

          <div className="apperence_box">

            <div className="layout">
              <h2 className="layout_h2">Layout</h2>

              <div  className="layout_box">

              {layouts.map((layout)=>(
                <div 
                className="layout_box_container"
                key={layout.id}>
                <div
                
                className={`layout_box_templets  buttons_box_fill_button ${
                  layaout === layout.id ? "buttons_box_fill_button1" : ""
                }`}
              
                onClick={() => {
                  const { height, width, ...filteredStyle } =layout 
                  setLayoutbox(filteredStyle);
                  setLayaout(layout.id)
                }}
                style={{
                  cursor: "pointer",       
                  border: layaout === layout.id ? "2px solid blue" : "none",
                }}
              >
                <img src={layout.src} alt={layout.id} />
                
              </div>
              <p className="layout_box_container_p">{layout.name}</p>
              </div>
              ))}

              </div>

            </div>

            <div className="buttons">
              <h2 className="buttons_h2">Button</h2>

              <div className="buttons_sEc">

                <div className="buttons_box">

                  <div className="buttons_box_fill_box">
                    
                    <div className="buttons_box_fill">
                      {fillLine.map((FillLine) => (
                        <div
                          key={FillLine.id}
                          style={{
                            ...FillLine,
                            cursor: "pointer",
                            transition: "all 0.3s ease-in-out",
                          }}
                          className={`buttons_box_fill_button ${
                            fillLineButton === FillLine.id
                              ? "buttons_box_fill_button1"
                              : ""
                          }`}
                         
                          onClick={() => {
                            const { height, width, ...filteredStyle } =FillLine; 
                            setSelectedButtonStyle(filteredStyle);
                            setFillLineButton(FillLine.id);
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>



                </div>

              

              </div>
            </div>

            <div className="Fonts">
              <h2 className="Fonts_h2">Fonts</h2>
              <div className="Fonts_sEc">

                 {/* Font Selection Section */}
                     <div className="Fonts">
                       <h3 className="Fonts_h3">Fonts</h3>

                       {/* Font Selection Box */}
                       <div className="Fonts_box" onClick={() => setIsFontOpen(!isFontOpen)}>
                         <div className="Font_box_fonts">
                           <span>Aa</span>
                         </div>
                         <span>{selectFont}</span>
                       </div>

                       {/* Font Dropdown List */}
                       {isFontOpen && (
                         <div className="Fonts_grp">
                           {fonts.map((font) => (
                             <div
                               className="Fonts_one"
                               key={font.id}
                              //  onClick={() => handleFontSelect(font.fonts, font.url)}
                               style={{ fontFamily: font.fonts }}

                               onClick={() => {
                                if (setFontChange) {
                                  setFontChange({ fontFamily: font.fonts });
                                }
                                handleFontSelect(font.fonts, font.url);
                              }}
                             >
                               {font.fonts}
                             </div>
                           ))}
                         </div>
                       )}
                     </div>

                {/* Color Selection */}

                <div className="button_color_1">
                  <p className="button_color_text">Color</p>
                  <div className="button_color_colerbox_2">
                    <div className="color_box">
                      <div
                        className="button_color_piker"
                        style={{ Color: fontColor }}
                        onClick={() =>
                          document.getElementById("ColorPicker").click()
                        }
                      />

                      <input
                        id="ColorPicker"
                        className="button_color_colerbox_input"
                        type="color"
                        onChange={(e) => setFontColor(e.target.value)}
                        name=""
                        placeholder="Button color"
                      />
                    </div>

                    <div className="buttons_colors_textarea">
                      <div>color</div>
                      <div>{fontColor}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="theam">
              <h2 className="theam_h2">Themes</h2>
              <div className="theam_sEc">
                <div className="theam_box">

                  <div className="theam_grp">
                    {themebox.map((theme) => (
                      <div className="theam_Contain" key={theme.id}>
                        <button
                          onClick={() => setTheam(theme)}
                          className={`theam_box_container_button ${
                            theam?.id === theme.id ? "theam_box_container_button1" : ""
                          }`}
                        >
                          <div
                            className={`theamboxs`}
                            style={{ backgroundColor: theme.bgColor }}
                          >
                            <div
                              className={`theamboxs_1 ${theme.bgColor}`}
                              style={{
                                backgroundColor: theme.barColor,
                                border: theme.barBorder,
                              }}
                            ></div>
                            <div
                              className={`theamboxs_1 ${theme.bgColor}`}
                              style={{
                                backgroundColor: theme.barColor,
                                border: theme.barBorder,
                              }}
                            ></div>
                            <div
                              className={`theamboxs_1 ${theme.bgColor}`}
                              style={{
                                backgroundColor: theme.barColor,
                                border: theme.barBorder,
                              }}
                            ></div>
                          </div>
                          
                        </button>

                        <span className="text-sm font-medium">
                          {theam.name}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
            
            <div className="apperence_box_button_box"> <button className="apperence_box_button">save</button></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default appearancespage;
