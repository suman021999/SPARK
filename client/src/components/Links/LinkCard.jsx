import React from 'react'
import { Link } from 'react-router-dom'

const LiinkCard = () => {




  // const [links, setLinks] = useState([
  //   { id: nanoid(), name: "Instagram", url: "https://www.instagram.com/opopo_08/", active: true, clicks: 0 },
  //   { id: nanoid(), name: "YouTube", url: "https://www.youtube.com/opopo_08/", active: true, clicks: 0 },
  // ]);


  // const addLink = () => {
  //   setLinks([...links, { id: nanoid(), name: "New Link", url: "", active: true, clicks: 0 }]);
  // };

  // const updateLink = (id, key, value) => {
  //   setLinks(links.map(link => link.id === id ? { ...link, [key]: value } : link));
  // };

  // const deleteLink = (id) => {
  //   setLinks(links.filter(link => link.id !== id));
  // };

  return (
    <>
      <div className='LinkCard'>
        <h2>Instagram</h2>

        <div className='link_connection'>
        <Link to='hotrubirichi'>hotrubirichi</Link>
        <div className='link_save'>save</div>
        </div>
        <div className='link_review'>
            <p><img  src='/public/srtimline.svg' alt="" /> <span>0 clicks</span></p>
            <img className='link_delete' src="/public/delete.svg" alt="" />
        
        </div>
        
      </div>
    </>
  )
}

export default LiinkCard
