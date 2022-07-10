import React from 'react'
import {Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
    <div className="container-mt3">
      <ul className="nav nav-tabs">
        {/* <li className="nav-item">
          <a className="nav-link active">  <img width={70} height={70} src='images/flighLogo.png' className="rounded-circle" alt=''/>
          <Link img width={70} height={70} src='images/flighLogo.png' className="rounded-circle" alt='' to="/home"></Link> |{" "}
          </a>
        </li> */}
        <li className="nav-item">
          <Link to="/home" className="nav-link">home</Link>
        </li>
        <li className="nav-item">
             <Link to="/about" className="nav-link">about</Link>
        </li>
        <li className="nav-item">
             <Link to="/login" className="nav-link">Log-In</Link>
        </li>
        <li className="nav-item">
             <Link to="/register" className="nav-link">Register</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar