import React from "react";
import "../components/CreatePetListing.css";
import AdminDashboardSidebar from "./AdminDashboardSidebar";
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from "react-icons/md";

function CreatePetListing() {
    return (
        <div className="createPetListing">
            <div className="sidebarComp">
                <AdminDashboardSidebar />
            </div>
            <div className="mainContent">
                <div className="inputsContainer">
                    <h2>Add New Pet Listing</h2>
                    <div className="basicInfo">
                        <div className="petNameContainer">
                            <label htmlFor="petName">Name</label>
                            <input type="text" />
                        </div>
                        <div className="containers">
                            <div className="inputs type">
                                <label htmlFor="petType">Pet Type</label>
                                <p>
                                    Select Pet Type
                                    <MdOutlineKeyboardArrowDown />
                                </p>
                            </div>
                            <div className="inputs breed">
                                <label htmlFor="petBreed">Breed</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="containers">
                            <div className="inputs age">
                                <label htmlFor="petAge">Age</label>
                                <input type="text" />
                            </div>
                            <div className="inputs color">
                                <label htmlFor="petColor">Color</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="descriptionInfo">
                        <div className="descContainer behavior">
                            <label htmlFor="petBahavior">Behavior</label>
                            <textarea
                                name="petBehavior"
                                id="petBehavior"
                            ></textarea>
                            <p>Maximum of 15 words</p>
                        </div>
                        <div className="descContainer health">
                            <label htmlFor="petHealth">Health</label>
                            <textarea
                                name="petHealth"
                                id="petHealth"
                            ></textarea>
                            <p>Maximum of 30 words</p>
                        </div>
                        <div className="descContainer petDescription">
                            <label htmlFor="petDescription">Behavior</label>
                            <textarea
                                name="petDescription"
                                id="petDescription"
                            ></textarea>
                            <p>Maximum of 45 words</p>
                        </div>
                    </div>
                    <div className="uploadImgContainer">
                        <button>Upload Images</button>
                        <div className="imgFileNames"><p>No Files Chosen</p></div>
                    </div>
                    <button className="addButton">Add Pet to Listings</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePetListing;
