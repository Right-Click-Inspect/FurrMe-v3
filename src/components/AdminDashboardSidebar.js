import React from "react";
import "../components/AdminDashboardSidebar.css";
import Logo from "../assets/FurrMe Logo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPawOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";

function AdminDashboardSidebar() {
    return (
        <div className="sidebar">
            <div className="header">
                <div className="logo">
                    <img src={Logo} className="webLogo" />
                    <h2>FurrMe</h2>
                </div>
                <IoNotificationsOutline className="notificationIcon" />
            </div>
            <div className="sidebarNav">
                <ul>
                    <li>
                        <IoPawOutline className="navIcon" />
                        Pets
                    </li>
                    <li>
                        <IoPeopleOutline className="navIcon" />
                        Adoption Requests
                    </li>
                    <li>
                        <MdOutlineAccountCircle className="navIcon" />
                        Admin Accounts
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboardSidebar;
