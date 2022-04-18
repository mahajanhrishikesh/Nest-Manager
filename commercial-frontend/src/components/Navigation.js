import React from 'react'
import { Link } from 'react-router-dom';
import './styles/nav.css';
const Navigation = () => {
  return (
    <div className="nav-container">
        <div className="container">
            <div className="nav-wrapper">
                    <Link className="logo" to="/">
                        <h1>Apartments Inc</h1>
                    </Link>

                    <div className="nav-links">
                        <Link className="link" to="/gallery">
                                <h2>Gallery</h2>
                        </Link>

                        <Link className="link" to="/floorplans">
                                <h2>Floorplans</h2>
                        </Link>

                        <Link className="link" to="/apply">
                                <h2>Apply</h2>
                        </Link>

                        <Link className="link" to="/contact">
                                <h2>Contact</h2>
                        </Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation