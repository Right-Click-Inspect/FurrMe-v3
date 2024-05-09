import React from "react";
import "../components/ManageProfile.css";
import Navbar from "../components/Navbar";
import displayProfile from "../assets/avatar-dp.jpg";

function ManageProfile() {
    return (
        <div>
            <Navbar />
            <div className="manageProfile">
                <div className="container">
                    <h2>Profile</h2>
                    <p>
                        This information will be displayed publicly so be
                        careful what you share.
                    </p>
                    <hr />
                    <div className="profilePicture">
                        <label>Photo</label>
                        <div className="profilePictureContainer">
                            <img src={displayProfile} />
                        </div>
                        <button className="btnChangeDP">Change</button>
                    </div>
                    <hr />
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" />
                    </div>
                    <hr />
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" />
                    </div>
                    <hr />
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <hr />
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" />
                    </div>
                    <hr />
                    {/* Please lang ko add logic fre nga unclickable ang btnSaveChanges if walay na modify sa user information */}
                    <button className="btnSaveChanges">Save Changes</button>
                </div>
            </div>
        </div>
    );
}

export default ManageProfile;
