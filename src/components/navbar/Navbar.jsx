import React, { useState } from "react";
import "./navbar.css";
import pic from "../../assets/image/homepage.jpg";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, title: "Home", className: "nav-item-home" },
    { id: 2, title: "About", className: "nav-item-home" },
    { id: 3, title: "Portfolio", className: "nav-item-home" },
    { id: 4, title: "Experience", className: "nav-item-home" },
    { id: 5, title: "Contact", className: "nav-item-home" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={pic} alt="Logo" className="navbar-logo" />
          <div className="navbar-info">
            <h1 className="navbar-name">Badal</h1>
            <p className="navbar-role">Web Developer</p>
          </div>
        </div>

        <ul className={`navbar-menu ${menu ? "navbar-menu-mobile" : ""}`}>
          {navItems.map(({ id, title, className }) => (
            <li key={id} className={`navbar-item ${className}`}>
              <Link
                to={title}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                onClick={() => setMenu(false)}
                className="navbar-link"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" onClick={() => setMenu(!menu)}>
          {menu ? <IoMdClose size={24} /> : <HiOutlineMenu size={24} />}
        </div>
      </div>

      {menu && (
        <div className="navbar-mobile-menu">
          <ul>
            {navItems.map(({ id, title, className }) => (
              <li key={id} className={`navbar-item-mobile ${className}`}>
                <Link
                  to={title}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  onClick={() => setMenu(false)}
                  className="navbar-link"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
