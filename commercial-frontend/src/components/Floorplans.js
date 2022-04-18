import React from 'react';
import { Link } from 'react-router-dom';


// Styles
import './styles/floorplans.css';

// Floorplans
let twoBed = [
      {     
            title: "The Forest Walk",
            plan: "http://www.crgliving.com/photos/floorplans/summit/2_bedroom_1_bath.jpg",
            price: "$1,250",
            sqrFt: "960 square feet"
      },

      {
            title: "The Mountaineer",
            plan: "http://www.rbahomes.com/images/FloorPlans/floor%20plan%20The%20Sandpiper.jpg",
            price: "$1,600",
            sqrFt: "1200 square feet"
      },
]

let oneBed = [
      {
            title: "The Cave",
            plan: "https://i.etsystatic.com/16380591/r/il/c38f17/2578010747/il_794xN.2578010747_8k95.jpg",
            price: "$1,000",
            sqrFt: "750 square feet"
      },

      {
            title: "The Cliffside",
            plan: "https://cdngeneral.rentcafe.com/dmslivecafe/3/662439/p0671372_1Bedroom_2_Floorplan.jpg?quality=85?quality=70&width=1400",
            price: "$1,050",
            sqrFt: "800 square feet"
      },
]

let studio = [
      {
            title: "The Cove",
            plan: "https://doorpinecrest.com/images/floorplans/studio.jpg",
            price: "$700",
            sqrFt: "650 square feet"
      },

      {
            title: "The Field",
            plan: "https://www.harrisonglendale.com/wp-content/uploads/2017/05/Harrison_Plan-S1.png",
            price: "$650",
            sqrFt: "607 square feet"
      },
]

const Floorplans = () => {

  return (
    <div className="page-wrapper">
                  <div className="floorplans-wrapper two-bedroom">
                        <div className="container">
                              <div className="gallery-wrapper">
                                    <div className="gallery-title">
                                          <h4>Two Bedrooms</h4>
                                    </div>

                                    <div className="floorplans">
                                          {twoBed.map((floorplan, i) => {
                                                return(
                                                      <div key={i} className="floorplan">
                                                            <div className="plan-title">
                                                                  <h2>{floorplan.title}</h2>
                                                            </div>
                                                            <img src={floorplan.plan} alt="Two Bedroom Floorplans"/>

                                                            <div className="plan-content">
                                                                  <h3>
                                                                        {floorplan.price}
                                                                  </h3>

                                                                  <h3>
                                                                        {floorplan.sqrFt}
                                                                  </h3>
                                                            </div>
                                                            <Link className="link" to="/apply">
                                                                  <button className="button">
                                                                        Apply Now
                                                                  </button>
                                                            </Link>
                                                      </div>
                                                )
                                          })}
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div className="floorplans-wrapper one-bedroom">
                        <div className="container">
                              <div className="gallery-wrapper">
                                    <div className="gallery-title">
                                          <h4>One Bedroom</h4>
                                    </div>

                                    <div className="floorplans">
                                          {oneBed.map((floorplan, i) => {
                                                return(
                                                      <div key={i} className="floorplan">
                                                            <div className="plan-title">
                                                                  <h2>{floorplan.title}</h2>
                                                            </div>
                                                            <img src={floorplan.plan} alt="One Bedroom Floorplans"/>

                                                            <div className="plan-content">
                                                                  <h3>
                                                                        {floorplan.price}
                                                                  </h3>

                                                                  <h3>
                                                                        {floorplan.sqrFt}
                                                                  </h3>
                                                            </div>
                                                            <Link className="link" to="/apply">
                                                                  <button className="button">
                                                                        Apply Now
                                                                  </button>
                                                            </Link>
                                                      </div>
                                                )
                                          })}
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div className="floorplans-wrapper two-bedroom">
                        <div className="container">
                              <div className="gallery-wrapper">
                                    <div className="gallery-title">
                                          <h4>Studio</h4>
                                    </div>

                                    <div className="floorplans">
                                          {studio.map((floorplan, i) => {
                                                return(
                                                      <div key={i} className="floorplan">
                                                            <div className="plan-title">
                                                                  <h2>{floorplan.title}</h2>
                                                            </div>
                                                            <img src={floorplan.plan} alt="Studio Floorplans"/>

                                                            <div className="plan-content">
                                                                  <h3>
                                                                        {floorplan.price}
                                                                  </h3>

                                                                  <h3>
                                                                        {floorplan.sqrFt}
                                                                  </h3>
                                                            </div>
                                                            <Link className="link" to="/apply">
                                                                  <button className="button">
                                                                        Apply Now
                                                                  </button>
                                                            </Link>
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

export default Floorplans