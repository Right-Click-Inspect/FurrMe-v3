import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/FurrMe Logo.png";
import "../components/Navbar.css";
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
    MdOutlineDocumentScanner,
} from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FiBook } from "react-icons/fi";
import {
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaQuestion,
    FaCat,
    FaDog,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePets } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import userProfilePic from "../assets/avatar-dp.jpg";

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);//For Simulation (Please replace with correct authentication logic)
    const navbarRef = useRef(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    //For Simulation (Please replace with correct authentication logic)
    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
        setOpenDropdown(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                closeDropdown();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar" ref={navbarRef}>
            <div className="logo">
                <img src={Logo} alt="FurrMe Logo" />
                <h2>FurrMe</h2>
            </div>
            <div className="navList">
                <div className="navItem pets">
                    <p onClick={() => toggleDropdown("pets")}>
                        Pets{" "}
                        {openDropdown === "pets" ? (
                            <MdOutlineKeyboardArrowUp />
                        ) : (
                            <MdOutlineKeyboardArrowDown />
                        )}
                    </p>
                    {openDropdown === "pets" && (
                        <ul className="dropdown pets" onClick={closeDropdown}>
                            <li>
                                <FaCat />
                                Cats <FaAngleRight className="rightIcon" />
                            </li>
                            <li>
                                <FaDog />
                                Dogs <FaAngleRight className="rightIcon" />
                            </li>
                        </ul>
                    )}
                </div>
                <div className="navItem community">
                    <p>Community</p>
                </div>
                <div className="navItem resources">
                    <p onClick={() => toggleDropdown("resources")}>
                        Resources{" "}
                        {openDropdown === "resources" ? (
                            <MdOutlineKeyboardArrowUp />
                        ) : (
                            <MdOutlineKeyboardArrowDown />
                        )}
                    </p>
                    {openDropdown === "resources" && (
                        <ul
                            className="dropdown resources"
                            onClick={closeDropdown}
                        >
                            <li>
                                <FaQuestion />
                                FAQs <FaAngleRight className="rightIcon" />
                            </li>
                            <li>
                                <MdOutlineDocumentScanner />
                                Terms & Conditions{" "}
                                <FaAngleRight className="rightIcon" />
                            </li>
                            <li>
                                <FiBook />
                                Education <FaAngleRight className="rightIcon" />
                            </li>
                        </ul>
                    )}
                </div>
                <div className="navItem socials">
                    <p onClick={() => toggleDropdown("socials")}>
                        Socials{" "}
                        {openDropdown === "socials" ? (
                            <MdOutlineKeyboardArrowUp />
                        ) : (
                            <MdOutlineKeyboardArrowDown />
                        )}
                    </p>
                    {openDropdown === "socials" && (
                        <ul
                            className="dropdown socials"
                            onClick={closeDropdown}
                        >
                            <li>
                                <FaInstagram />
                                Instagram <FaAngleRight className="rightIcon" />
                            </li>
                            <li>
                                <FaFacebook />
                                Facebook <FaAngleRight className="rightIcon" />
                            </li>
                            <li>
                                <FaTiktok />
                                Tiktok <FaAngleRight className="rightIcon" />
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="loginBtn-accountIcon">
                {/* From Here */}
                {isLoggedIn ? (
                    <div
                        className="DP-Icon"
                        onClick={() => toggleDropdown("user")}
                    >
                        <img src={userProfilePic} />
                    </div>
                ) : (
                    <button onClick={handleLogin}>Login</button>
                )}
                {/*To here : Replace with <Button>Login<Button/> kay gi modify rana pang simulation sa Login Button og Avatar Icon if naka login or wala */}
                {openDropdown === "user" && (
                    <ul className="userDropdown" onClick={closeDropdown}>
                        <li>
                            <CgProfile className="dropdownIcon" />
                            My Profile
                            <FaAngleRight className="rightIcon-UDP" />
                        </li>
                        <li>
                            <MdOutlinePets className="dropdownIcon" />
                            Adoption Requests
                            <FaAngleRight className="rightIcon-UDP" />
                        </li>
                        <li>
                            <MdContactSupport className="dropdownIcon" />
                            Help & Support
                            <FaAngleRight className="rightIcon-UDP" />
                        </li>
                        <li>
                            <IoIosLogOut className="dropdownIcon" />
                            Logout
                            <FaAngleRight className="rightIcon-UDP" />
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Navbar;
