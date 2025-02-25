import React from 'react'
import "./display.css"
import Audiomack from '../../../public/Audiomack.svg'
import Brandsingtown from '../../../public/Brandsingtown.svg'
import Bonfair from '../../../public/Bonfair.svg'
import Books from '../../../public/Books.svg'
import Buy_me_a_gift from '../../../public/Buy_me_a_gift.svg'
import Cameo from '../../../public/Cameo.svg'
import Clubhouse from '../../../public/Clubhouse.svg'
import Community from '../../../public/Community.svg'
import Contact_detials from '../../../public/Contact_detials.svg'
const Link = () => {
  return (
    <>
      <section className='link_sec'>

      <h2>All Link Apps and Integrations</h2>
        <div className='link'>

        <div className='link_wrap'>

        <div className='link_group'>
            <img src={Audiomack} alt="" />

            <div>
            <h5>Audiomack</h5>
            <p>Add an Audiomack player to your Linktree</p>
            </div>
        </div>

        <div className='link_group'>
            <img src={Brandsingtown} alt="" />

            <div>
            <h5>Brandsingtown</h5>
            <p>Drive ticket sales by listing your events</p>
            </div>
        </div>

        <div className='link_group'>
            <img src={Bonfair} alt="" />

            <div>
            <h5>Bonfair</h5>
            <p>Display and sell your custom merch</p>
            </div>
        </div>


        <div className='link_group'>
            <img src={Books} alt="" />

            <div>
            <h5>Books</h5>
            <p>Promote books on your Linktree</p>
            </div>
        </div>

        <div className='link_group'>
            <img src={Buy_me_a_gift} alt="" />

            <div>
            <h5>Buy Me A Gift</h5>
            <p>Let visitors support you with a small gift</p>
            </div>
        </div>

        <div className='link_group'>
            <img src={Cameo} alt="" />

            <div>
            <h5>Cameo</h5>
            <p>Make impossible fan connections possible</p>
            </div>
        </div>


        <div className='link_group'>
            <img src={Clubhouse} alt="" />

            <div>
            <h5>Clubhouse</h5>
            <p>Let your community in on the conversation</p>
            </div>
        </div>

        <div className='link_group'>
            <img src={Community} alt="" />

            <div>
            <h5>Community</h5>
            <p>Build an SMS subscriber list</p>
            </div>
        </div>

        <div className='link_group'>
            <img src={Contact_detials} alt="" />

            <div>
            <h5>Contact Details</h5>
            <p>Easily share downloadable contact details</p>
            </div>
        </div>

        
        

        </div>


        </div>



        

      </section>
    </>
  )
}

export default Link
