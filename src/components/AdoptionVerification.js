import React, { useState } from "react";
import "../components/AdoptionVerification.css";
import Navbar from "../components/Navbar";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

function AdoptionVerification() {
    const [showTerms, setShowTerms] = useState(false);
    const [fileName, setFileName] = useState("No file chosen");
    const [imageAttached, setImageAttached] = useState(false);

    const toggleTerms = () => {
        setShowTerms(!showTerms);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setImageAttached(true);
        } else {
            setFileName("No file chosen");
            setImageAttached(false);
        }
    };

    const removeImage = () => {
        setFileName("No file chosen");
        setImageAttached(false);
        // Optionally, you can clear the file input value
        document.getElementById("validID").value = "";
    };

    return (
        <div>
            <Navbar />
            <div className="adoptionVerification">
                <div className="header">
                    <h2>Verify Pet Adoption Application</h2>
                    <p>
                        Please provide the following information to verify your
                        pet adoption application. This helps ensure the
                        well-being of our furry friends.
                    </p>
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="example@gmail.com"
                    />
                    <label htmlFor="validID" className="validIDImg">
                        Upload a valid ID
                    </label>
                    <input
                        type="file"
                        id="validID"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                    <div className="attachValidID">
                        <button
                            className="btnValidID"
                            onClick={() =>
                                document.getElementById("validID").click()
                            }
                        >
                            {fileName}
                        </button>
                        {imageAttached && (
                            <IoIosCloseCircleOutline
                                className="removeID"
                                onClick={removeImage}
                            />
                        )}
                    </div>

                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        placeholder="Enter your address"
                    ></textarea>
                    <label htmlFor="contactNum">Contact Number</label>
                    <input
                        type="text"
                        id="contactNum"
                        placeholder="Enter your phone number"
                    />
                </div>
                <p className="TAC-header" onClick={toggleTerms}>
                    Terms and Conditions for Pet Adoption
                    {showTerms ? <FaChevronUp /> : <FaChevronDown />}
                </p>
                <div className="termsAndConditions">
                    <p
                        className="TAC-list"
                        style={{ display: showTerms ? "block" : "none" }}
                    >
                        1. Provide a safe and loving home for the adopted pet,
                        ensuring their well-being and proper care. <br />
                        2. Comply with all local laws and regulations regarding
                        pet ownership, including licensing and vaccination
                        requirements.
                        <br />
                        3. Agree to regular check-ins and home visits by the
                        adoption agency to ensure the pet's continued
                        well-being.
                        <br />
                        4. Notify the adoption agency immediately if the pet
                        needs to be rehomed for any reason. <br />
                        5. Understand that the adoption agency reserves the
                        right to deny or revoke the adoption if the terms and
                        conditions are not met.
                    </p>
                </div>
                <button className="submitBtn">Submit</button>
            </div>
        </div>
    );
}

export default AdoptionVerification;
