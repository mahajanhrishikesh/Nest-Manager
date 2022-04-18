import React from 'react'

import './styles/gallery.css';


let extGallery = [
      {
            img: "https://images.unsplash.com/photo-1563287850-43074a35e139?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80",
      },
      {
            img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
      },
      {
            img: "https://images.unsplash.com/photo-1562602136-b64ddd991ea2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=564&q=80",
      },
      {
            img: "https://images.unsplash.com/photo-1552817445-d4a407caf7ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
      }
]

let intGallery = [
      {
            img: "https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      },
      {
            img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      },
      {
            img: "https://images.unsplash.com/photo-1534595038511-9f219fe0c979?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      },
      {
            img: "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      },
]

const Gallery = () => {
  return (
    <div className="page-wrapper">
                  <div className="gallery-container">
                        <div className="container">
                              <div className="gallery-wrapper">
                                    <div className="gallery-title">
                                          <h4>Exterior</h4>
                                    </div>

                                    <div className="gallery">
                                          {extGallery.map((gallery, i) => {
                                                return(
                                                      <div key={i} className="galImg">
                                                            <img src={gallery.img} alt="Exterior Apartment"/>
                                                      </div>
                                                )
                                          })}
                                    </div>
                              </div>

                              <div className="gallery-wrapper">
                                    <div className="gallery-title">
                                          <h4>Interior</h4>
                                    </div>

                                    <div className="gallery">
                                          {intGallery.map((gallery, i) => {
                                                return(
                                                      <div key={i} className="galImg">
                                                            <img src={gallery.img} alt="Exterior Apartment"/>
                                                      </div>

                                                )
                                          })}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
  )
}

export default Gallery