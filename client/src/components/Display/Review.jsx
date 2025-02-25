import React from "react";
import "./display.css";
import review from '../../../public/review.svg'
const Review = () => {
  return (
    <>
      <section className="review">

        <div className="review_first">

          <div className="review_box1">
            <h3>Here's what our <span>customer</span> has to says</h3>
            <button >Read customer stories</button>
          </div>

          <div className="review_box2"> 
            
            <img src={review} alt="" />
            <p>[short description goes in here] lorem ipsum is a placeholder text to demonstrate.</p>
            
         

         </div>

        </div>

        <div className="review_comments">

            <div className="review_sec">
                <div className="review_sec1">
                    <h3>Amazing tool! Saved me months</h3>
                    <p>This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.</p>
                    <div className="boxx">
                        <div className="circle"></div>
                        <div className="text">
                        <h4>John Master</h4>
                        <p>Director, Spark.com</p>
                        </div>
                    </div>
                </div>
                <div className="review_sec2">
                    <h3>Amazing tool! Saved me months</h3>
                    <p>This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.</p>
                    <div className="boxx">
                        <div className="circle"></div>
                        <div className="text">
                        <h4>John Master</h4>
                        <p>Director, Spark.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="review_secc">
                <div className="review_sec1">
                    <h3>Amazing tool! Saved me months</h3>
                    <p>This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.</p>
                    <div className="boxx">
                        <div className="circle"></div>
                        <div className="text">
                        <h4>John Master</h4>
                        <p>Director, Spark.com</p>
                        </div>
                    </div>
                </div>
                <div className="review_sec2">
                    <h3>Amazing tool! Saved me months</h3>
                    <p>This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.</p>
                    <div className="boxx">
                        <div className="circle"></div>
                        <div className="text">
                        <h4>John Master</h4>
                        <p>Director, Spark.com</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </section>
    </>
  );
};

export default Review;
