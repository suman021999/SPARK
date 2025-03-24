import React from "react";
import Analytic from "../../../public/Analytics 1.png"
import sell1 from "../../../public/sell1.svg"
import sell2 from "../../../public/sell2.svg"
import sell3 from "../../../public/sell3.svg"
import sell4 from "../../../public/sell4.svg"
import sell5 from "../../../public/sell5.svg"
import selllogo from "../../../public/square01.webp.png"
import selllogo2 from "../../../public/square02.webp.png"
import selllogo3 from "../../../public/div.png"

const Front = () => {
  return (
    <>
      <section className="front">

        <div className="front_base">
          <div className="text">
            <h2>The easiest place to update and share your Connection</h2>
            <p>Help your followers discover everything you’re sharing all over the internet, in one simple place. They’ll thank you for it!</p>
            <button>Get your free Spark</button>
          </div>
          <div className="img_box"><img src={Analytic} alt="" /></div>
        </div>


        <div className="front_sell">
              <div className="frist_sell">
                <img className="sell1" src={sell1} alt="" />
                <img className="sell2" src={sell2} alt="" />
                <img className="sell3" src={sell3} alt="" />
                <img className="sell4" src={sell4} alt="" />
                <img className="sell5" src={sell5} alt="" />
                <p>Sell products and collect payments. It’s monetization made simple.</p>
              </div>

              <div className="second_sell">
                <h3>Analyze your audience and keep your followers engaged</h3>
                <p>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
              </div>

        </div>



        <div className="front_sells">
              <div className="frist_sells">
                <div>
                <img className="sells1" src={selllogo} alt="" />
                <img className="sells1" src={selllogo2} alt="" />
                <img className="sells2" src={selllogo3} alt="" />
                </div>
               
                
                <p>Share your content in limitless ways on your Spark</p>
              </div>

              <div className="second_sell">
                <h3>Share limitless content in limitless ways</h3>
                <p>Connect your content in all its forms and help followers find more of what they’re looking for. Your TikToks, Tweets, YouTube videos, music, articles, recipes, podcasts and more… It all comes together in one powerful place</p>
              </div>

        </div>



     


      </section>
    </>
  );
};

export default Front;
