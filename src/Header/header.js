import React, { useState } from "react";
import './style.css'
import img from '../assets/images/dashboard.png';
import calendar_view from '../assets/images/calendar_view_day.png'
import docs_icon from '../assets/images/document.png'
import gitHub_icon from '../assets/images/github.png'
export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false)
  const [showDropdown3, setShowDropdown3] = useState(false)
  const handleMouseOver = () => {
    setShowDropdown(true);
  };
  const handleMouseOver2 = () => {
    setShowDropdown2(true)
  };
  const handleMouseOver3 = () => {
    setShowDropdown3(true)
  };
  const handleMouseOut = () => {
    setShowDropdown(false);
   
  };
  const handleMouseOut2 = () => {
    setShowDropdown2(false)
  };
  const handleMouseOut3 = () => {
    setShowDropdown3(false)
  };

  return (
    <div className="d-flex justify-content-center pt-3">
      <div className="d-flex col-11 justify-content-between header-bg ps-4">
        <div className="d-flex col-6 py-3 fw-600 title">My first project</div>
        <div className="d-flex col-6 justify-content-between px-4 align-items-center">
          <div className="d-flex gap-3 align-items-center">
            <img src={img} alt="dashboard" className="img-icon" />
            <div className="dropdown"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}>
              <span
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </span>
              <ul className={`dropdown-menu ps-2 ${showDropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                <li>Landing Pages
                  <ul className="dropdown-item  list-group">
                    <li className="list-group-item border-0">About Us</li>
                    <li className="list-group-item border-0">Contact Us</li>
                    <li className="list-group-item border-0">Author</li>
                  </ul>
                </li>
                <li>Account
                  <ul className="list-group">
                    <li className="list-group-item border-0">Sign In</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <img src={calendar_view} alt="dashboard" className="img-icon" />
            <div className="dropdown"
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}>
              <span
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sections
              </span>
              <ul className={`dropdown-menu ps-2 ${showDropdown2 ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                <li >
                <div className="dropdown dropend"
              onMouseOver={handleMouseOver3}
              onMouseOut={handleMouseOut3}>
                <div className="dropdown-toggle  dropdown_icon"  type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <h6>Page sections</h6>
                <p>See all sections</p>
                </div>
                <ul className={`dropdown-menu ps-2 ${showDropdown3 ? 'show' : ''}`} aria-labelledby="dropdownMenuButton2">
                    <li className="dropdown-item border-0">Page headers</li>
                    <li className="dropdown-item border-0">Features</li>
                  </ul>
              </div>
                
                </li>
                <li>Account
                  <ul className="list-group">
                    <li className="list-group-item border-0">Sign In</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <img src={docs_icon} alt="dashboard" className="img-icon" />
            <div className="dropdown"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}>
              <span
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Docs
              </span>
              <ul className={`dropdown-menu ps-2 ${showDropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                <li>Landing Pages
                  <ul className="dropdown-item  list-group">
                    <li className="list-group-item border-0">About Us</li>
                    <li className="list-group-item border-0">Contact Us</li>
                    <li className="list-group-item border-0">Author</li>
                  </ul>
                </li>
                <li>Account
                  <ul className="list-group">
                    <li className="list-group-item border-0">Sign In</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <img src={gitHub_icon} alt="dashboard" className="img-icon" />
            <div className="dropdown"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}>
              <span
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Github
              </span>
              <ul className={`dropdown-menu ps-2 ${showDropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                <li>Landing Pages
                  <ul className="dropdown-item  list-group">
                    <li className="list-group-item border-0">About Us</li>
                    <li className="list-group-item border-0">Contact Us</li>
                    <li className="list-group-item border-0">Author</li>
                  </ul>
                </li>
                <li>Account
                  <ul className="list-group">
                    <li className="list-group-item border-0">Sign In</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn_primary p-2">Free Download</button>
          </div>
        </div>
      </div>
    </div>
  )
}
