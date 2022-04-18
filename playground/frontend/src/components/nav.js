import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to='/login' className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                <Link to='/register' className="nav-link">Register</Link>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Nav;