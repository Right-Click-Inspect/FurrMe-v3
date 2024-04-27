import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Logo from "../assets/FurrMe Logo.png";
import DisplayPhoto from "../assets/pet photos/cat photos/cat_img1.jpg";
import "../components/Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const closeDropdown = () => setDropdownOpen(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const closeMenuOnOutsideClick = (e) => {
            if (
                dropdownOpen &&
                !document.querySelector(".iconDropDown").contains(e.target) &&
                !document.querySelector(".accountName").contains(e.target)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", closeMenuOnOutsideClick);

        return () => {
            document.removeEventListener("mousedown", closeMenuOnOutsideClick);
        };
    }, [dropdownOpen]);

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
                <h3 className="accountName" onClick={toggleDropdown}>
                    Account Name
                </h3>
                <div className={`iconDropDown ${dropdownOpen ? "open" : ""}`}>
                    <Link onClick={closeMobileMenu}>
                        <h3 className="profileName" onClick={closeDropdown}>
                            Frankie Richards
                        </h3>
                    </Link>
                    <hr />
                    <div className="dpNavList">
                        <Link onClick={closeDropdown}>
                            <h3>Adoption Requests</h3>
                            <FiChevronRight className="rightIcon" />
                        </Link>
                        <Link onClick={closeDropdown}>
                            <h3>Help & Support</h3>
                            <FiChevronRight className="rightIcon" />
                        </Link>
                        <Link onClick={closeDropdown}>
                            <h3>Logout</h3>
                            <FiChevronRight className="rightIcon" />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
