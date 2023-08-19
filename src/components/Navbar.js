
import PropTypes from 'prop-types'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [homeColor, setHomeColor] = useState("one");
  // const [aboutColor, setAboutColor] = useState("");
  // const [detailsColor, setDetailsColor] = useState("");
  // const [contactColor, setContactColor] = useState("");
  
  // const changeColorofHome = () =>{
  //   setHomeColor(homeColor === "" ? "active" : "no-active")
  //   setAboutColor("")
  //   setDetailsColor("")
  //   setContactColor("")
  // }

  // const changeColorofAbout = () =>{
  //   setAboutColor(aboutColor === "" ? "active" : "no-active")
  //   setHomeColor("")
  //   setDetailsColor("")
  //   setContactColor("")
  // }

  // const changeColorofDetails = () =>{
  //   setDetailsColor(detailsColor === "" ? "active" : "no-active")
  //   setHomeColor("")
  //   setAboutColor("")
  //   setContactColor("")
  // }

  // const changeColorofContact = () =>{
  //   setContactColor(contactColor === "" ? "active" : "no-active")
  //   setHomeColor("")
  //   setAboutColor("")
  //   setDetailsColor("")
  // }   

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={homeColor === "one" ? "active ms-3" : "no-active ms-3"} to="/About" aria-current="page" onClick={() => setHomeColor("one")}>About Us</Link>
        </li>
        <li className="nav-item">
          <Link className={homeColor === "two" ? "active ms-3" : "no-active ms-3"} to="/Calculators" aria-current="page" onClick={() => setHomeColor("two")}>Calculator</Link>
        </li>
        <li className="nav-item">
          <Link className={homeColor === "three" ? "active ms-3" : "no-active ms-3"} to="/Numbers" aria-current="page" onClick={() => setHomeColor("three")}>Numbers</Link>
        </li>
        <li className="nav-item">
          <Link className={homeColor === "four" ? "active ms-3" : "no-active ms-3"} to="/Details" aria-current="page" onClick={() => setHomeColor("four")}>Detials</Link>
        </li>
      </ul>
          <div className="form-check form-switch text-light">
          <input className="form-check-input" onClick={props.changethemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className ="form-check-label" htmlFor="flexSwitchCheckDefault">Enable</label>
    </div>
      <form className="d-flex">
        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
        {/* <button classNameName="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
  </nav>
  )
}
