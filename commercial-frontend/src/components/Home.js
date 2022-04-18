import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import "./styles/home.css";

// Data
import  prodItems  from '../data';


const Home = () => {
  return (
    <div className="page-wrapper">
                  <div className="hero-wrapper">
                        {/* <div className="container"> */}
                              <div className="hero-container">
                                    <div className="hero-content">
                                          <h1>Apartments Inc</h1>

                                          <p>Luxury Downtown Rentals</p>
                                    </div>
                              </div>
                        {/* </div> */}
                  </div>

                  <div className="prod-info-container">
                        <div className="container">
                              <div className="prod-info-wrapper">
                                    {prodItems.map((prod, index) => {
                                          return(
                                                <div className="prod-item" key={index}>
                                                      <div className="prod-title">
                                                            <h1>{prod.title}</h1>
                                                      </div>
                                                      
                                                      <div className="prod-img">
                                                            <img src={prod.img} alt=""/>
                                                      </div>

                                                      <div className="prod-content">
                                                            <p>{prod.content}</p>
                                                      </div>

                                                      <Link to={prod.link} className="button">
                                                            {prod.buttonContent}
                                                      </Link>
                                                </div>
                                          )
                                    })}
                              </div>
                        </div>
                  </div>
            </div>
  )
}

export default Home