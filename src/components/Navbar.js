import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/FurrMe Logo.png";
import "../components/Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="logo" src={Logo} alt="" />
                    FurrMe
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Cats
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Dogs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Community
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Resources
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-links mobile-link"
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Link to="/">
                    <button className="btn-login">Login</button>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
