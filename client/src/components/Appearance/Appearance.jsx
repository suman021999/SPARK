import React, { useState } from "react";
import "./appearance.css";
import Nav from "../Navbar/Nav";
import logo from "../../../public/logos.svg";
import {
  fillLine,
  fonts,
  HardShadow,
  layouts,
  outLine,
  SoftShadow,
  Spacial,
  themebox,
} from "../../utils/constants";
import Sidebar from "../sidebar/Sidebar";

const appearancespage = () => {
  const [selectfont, setSelectfont] = useState("DM Sans");
  const [isFontOpen, setIsFontOpen] = useState(false);
  const [Color, setColor] = useState("#222");
  const [buttonColor, setButtonColor] = useState("#ffffff");
  const [buttonFontColor, setButtonFontColor] = useState("#888888");
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [fillLineButton, setFillLineButton] = useState(null);
  const [outLineButton, setOutLineButton] = useState(null);
  const [hardShadowButton, setHardShadowButton] = useState(null);
  const [softShadowButton, setSoftShadowButton] = useState(null);
  const [spacialButton, setSpacialButton] = useState(null);
  const [layaout, setLayaout] = useState(null);


  // Handle font selection
  const handleFontSelect = (font) => {
    setSelectfont(font);
    setIsFontOpen(false);
  };

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
              <h2 className="layout_h2">Layout</h2>

              <div  className="layout_box">

              {layouts.map((layout)=>(
                <div
                key={layout.id}
                className={`layout_box_templets  buttons_box_fill_button ${
                  layaout === layout.id ? "buttons_box_fill_button1" : ""
                }`}
                onClick={() => setLayaout(layout.id)}
                style={{
                  cursor: "pointer",       
                  border: layaout === layout.id ? "2px solid blue" : "none",
                }}
              >

                <img src={layout.src} alt={layout.id} />
              </div>
              ))}

              </div>
            </div>

            <div className="buttons">
              <h2 className="buttons_h2">Button</h2>

              <div className="buttons_sEc">
                <div className="buttons_box">
                  <div className="buttons_box_fill_box">
                    <p className="fill">Fill</p>

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
                          onClick={() => setFillLineButton(FillLine.id)}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="buttons_box_fill_box">
                    <p className="fill">Outline</p>
                    <div className="buttons_box_fill">
                      {outLine.map((OutLine) => (
                        <div
                          key={OutLine.id}
                          style={OutLine}
                          className={`buttons_box_fill_button ${
                            outLineButton === OutLine.id
                              ? "buttons_box_fill_button1"
                              : ""
                          }`}
                          onClick={() => setOutLineButton(OutLine.id)}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="buttons_box_fill_box">
                    <p className="fill">Hard shadow</p>

                    <div className="buttons_box_fill">
                      {HardShadow.map((HardShadow) => (
                        <div
                          key={HardShadow.id}
                          style={{
                            ...HardShadow,
                            boxShadow:
                              hardShadowButton === HardShadow.id
                                ? "0 0 0 2px #3b82f6"
                                : HardShadow.boxShadow,
                            cursor: "pointer",
                          }}
                          className={`buttons_box_fill_button ${
                            hardShadowButton === HardShadow.id
                              ? "buttons_box_fill_button1"
                              : ""
                          }`}
                          onClick={() => setHardShadowButton(HardShadow.id)}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="buttons_box_fill_box">
                    <p className="fill">Soft shadow</p>
                    <div className="buttons_box_fill">
                      {SoftShadow.map((SoftShadow) => (
                        <div
                          key={SoftShadow.id}
                          style={{
                            ...SoftShadow,
                            boxShadow:
                              softShadowButton === SoftShadow.id
                                ? "0 0 0 2px #3b82f6"
                                : SoftShadow.boxShadow,
                            cursor: "pointer",
                          }}
                          className={`buttons_box_fill_button ${
                            softShadowButton === SoftShadow.id
                              ? "buttons_box_fill_button1"
                              : ""
                          }`}
                          onClick={() => setSoftShadowButton(SoftShadow.id)}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="buttons_box_fill_box">
                    <p className="fill">Special</p>

                    <div className="buttons_box_fill">
                      {Spacial.map((Spacial) => (
                        <div
                          key={Spacial.id}
                          style={Spacial}
                          className={`buttons_box_fill_button ${
                            spacialButton === Spacial.id
                              ? "buttons_box_fill_button1"
                              : ""
                          }`}
                          onClick={() => setSpacialButton(Spacial.id)}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* button_color */}

                <div className="button_color">
                  <p className="button_color_text">Button color</p>
                  <div className="button_color_colerbox">
                    <div className="color_box">
                      <div
                        className="button_color_piker"
                        style={{ backgroundColor: buttonColor }}
                        onClick={() =>
                          document.getElementById("buttonColorPicker").click()
                        }
                      />

                      <input
                        id="buttonColorPicker"
                        className="button_color_colerbox_input"
                        type="color"
                        onChange={(e) => setButtonColor(e.target.value)}
                        name=""
                        placeholder="Button color"
                      />
                    </div>

                    <div className="buttons_colors_textarea">
                      <div>Button color</div>
                      <div>{buttonColor}</div>
                    </div>
                  </div>
                </div>

                <div className="button_color">
                  <p className="button_color_text">Button font color</p>
                  <div className="button_color_colerbox">
                    <div className="color_box">
                      <div
                        className="button_color_piker"
                        style={{ backgroundColor: buttonFontColor }}
                        onClick={() =>
                          document.getElementById("buttonColorPicker").click()
                        }
                      />

                      <input
                        id="buttonColorPicker"
                        className="button_color_colerbox_input"
                        type="color"
                        onChange={(e) => setButtonFontColor(e.target.value)}
                        name=""
                        placeholder="Button color"
                      />
                    </div>

                    <div className="buttons_colors_textarea">
                      <div>Button font color</div>
                      <div>{buttonFontColor}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Fonts">
              <h2 className="Fonts_h2">Fonts</h2>
              <div className="Fonts_sEc">
                <div className="Fonts_div">
                  <h3 className="Fonts_div_h3">Fonts</h3>

                  <div
                    className="Fonts_box"
                    onClick={() => setIsFontOpen(!isFontOpen)}
                  >
                    <div className="Font_box_fonts">
                      <span>Aa</span>
                    </div>

                    <span>{selectfont}</span>
                  </div>

                  {isFontOpen && (
                    <div className="Fonts_grp">
                      {fonts.map((font, index) => (
                        <div
                          className="Fonts_one"
                          key={index}
                          onClick={() => handleFontSelect(font)}
                          style={{ fontFamily: font }}
                        >
                          {font}
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
                        style={{ backgroundColor: Color }}
                        onClick={() =>
                          document.getElementById("ColorPicker").click()
                        }
                      />

                      <input
                        id="ColorPicker"
                        className="button_color_colerbox_input"
                        type="color"
                        onChange={(e) => setColor(e.target.value)}
                        name=""
                        placeholder="Button color"
                      />
                    </div>

                    <div className="buttons_colors_textarea">
                      <div>color</div>
                      <div>{Color}</div>
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
                    {themebox.map((theam) => (
                      <div className="theam_Contain" key={theam.id}>
                        <button
                          onClick={() => setSelectedTheme(theam.name)}
                          className={`theam_box_container_button ${
                            selectedTheme === theam.name
                              ? "theam_box_container_button1"
                              : ""
                          }`}
                        >
                          <div
                            className={`theamboxs`}
                            style={{ backgroundColor: theam.bgColor }}
                          >
                            <div
                              className={`theamboxs_1 ${theam.bgColor}`}
                              style={{
                                backgroundColor: theam.barColor,
                                border: theam.barBorder,
                              }}
                            ></div>
                            <div
                              className={`theamboxs_1 ${theam.bgColor}`}
                              style={{
                                backgroundColor: theam.barColor,
                                border: theam.barBorder,
                              }}
                            ></div>
                            <div
                              className={`theamboxs_1 ${theam.bgColor}`}
                              style={{
                                backgroundColor: theam.barColor,
                                border: theam.barBorder,
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
