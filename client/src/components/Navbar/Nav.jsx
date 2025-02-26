import React from "react";
import "./nav.css";
import { GoShareAndroid } from "react-icons/go";
const Nav = ({isVisible}) => {

  return (
    <>
      <section className="nav">
        <div>
          <h3>Hi, Jenny Wilson!</h3>
          <p>Congratulations . You got a great response today .</p>
        </div>
        <div  className={` ${isVisible==true?'nav_share':'hidden_boxx'}`}>
          <GoShareAndroid />
          <p>Share</p>
        </div>
      </section>
    </>
  );
};

export default Nav;
