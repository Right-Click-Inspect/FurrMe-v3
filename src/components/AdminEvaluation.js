import React, { useState, useEffect, useRef } from "react";
import "../components/AdminEvaluation.css";
import AdminDashboardSidebar from "./AdminDashboardSidebar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import validID from "../assets/avatar-dp.jpg";

function AdminEvaluation() {
    const [charCount, setCharCount] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null); // State to track selected button
    const [rejectButtonText, setRejectButtonText] = useState("Reject"); // State for reject button text
    const [showRejectReason, setShowRejectReason] = useState(false); // State to control visibility of reject reason textarea
    const [openDropdown, setOpenDropdown] = useState(null);
    const maxChar = 500;

    const handleTextChange = (event) => {
        const input = event.target.value;
        if (input.length <= maxChar) {
            setCharCount(input.length);
        }
    };

    const handleButtonClick = (buttonType) => {
        if (buttonType === "approve") {
            setSelectedButton("approve");
            setShowRejectReason(false); // Hide reject reason textarea when Approve button is clicked
            setRejectButtonText("Reject");
        } else if (buttonType === "reject") {
            if (selectedButton === "reject") {
                setSelectedButton(null);
                setShowRejectReason(false); // Hide reject reason textarea when Cancel button is clicked
                setRejectButtonText("Reject");
            } else {
                setSelectedButton("reject");
                setShowRejectReason(true); // Show reject reason textarea when Reject button is clicked
                setRejectButtonText("Cancel");
            }
        }
    };

    useEffect(() => {
        const textarea = document.getElementById("rejectionReason");
        if (textarea) {
            textarea.addEventListener("input", handleTextChange);
            return () =>
                textarea.removeEventListener("input", handleTextChange);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest(".dropdown") === null) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const openImageInNewTab = () => {
        window.open(validID); // Opens the image in a new tab
    };

    return (
        <div className="adminEvaluation">
            <div className="sidebarComp">
                <AdminDashboardSidebar />
            </div>
            <div className="mainContent">
                <div className="applicantInfoHeader">
                    <h1>Application Evaluation</h1>
                    <p>Application Date: May 25, 2024</p>
                    <div className="appStatus">
                        <p>Application Status: </p>
                        <p className="appStatusVal">Pending</p>
                    </div>
                </div>
                <div className="InformationContainer applicantInfoCont">
                    <h2>Applicant information</h2>
                    <div className="applicantInfo namePrev">
                        <div className="lbl-disp firstNamePrev">
                            <p className="dispLabels">First Name</p>
                            <input type="text" readOnly value="Kaneki" />
                        </div>
                        <div className="lbl-disp lastNamePrev">
                            <p className="dispLabels">Last Name</p>
                            <input type="text" readOnly value="Goated" />
                        </div>
                    </div>
                    <div className="applicantInfo email-validID">
                        <div className="lbl-disp email-ValidIDprev">
                            <p className="dispLabels">Email</p>
                            <input
                                type="text"
                                readOnly
                                value="kanekiGoated@gmail.com"
                            />
                        </div>
                        <div className="lbl-disp validIdPrev">
                            <p className="dispLabels">Valid ID</p>
                            <p
                                className="validID-fileName"
                                onClick={openImageInNewTab}
                            >
                                {validID.split("/").pop()}
                            </p>
                        </div>
                    </div>
                    <div className="applicantInfo address-cNumPrev">
                        <div className="lbl-disp addressPrev">
                            <p className="dispLabels">Address</p>
                            <input
                                type="text"
                                readOnly
                                value="Punta Princesa, Cebu City Philippines"
                            />
                        </div>
                        <div className="lbl-disp cNumPrev">
                            <p className="dispLabels">Contact Number</p>
                            <input type="text" readOnly value="09452328651" />
                        </div>
                    </div>
                    <div className="infoDropdownsContainer">
                        <div className="dropdown householdInfo">
                            <p onClick={() => toggleDropdown("householdInfo")}>
                                Household Information
                                {openDropdown === "householdInfo" ? (
                                    <IoIosArrowUp />
                                ) : (
                                    <IoIosArrowDown />
                                )}
                            </p>
                            <div
                                className="dpCont houseinfoDP"
                                style={{
                                    display:
                                        openDropdown === "householdInfo"
                                            ? "block"
                                            : "none",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ab, possimus.
                            </div>
                        </div>
                        <div className="dropdown employmentLifestyle">
                            <p
                                onClick={() =>
                                    toggleDropdown("employmentLifestyle")
                                }
                            >
                                Employment & Lifestyle
                                {openDropdown === "employmentLifestyle" ? (
                                    <IoIosArrowUp />
                                ) : (
                                    <IoIosArrowDown />
                                )}
                            </p>
                            <div
                                className="dpCont employmentLifestyleDP"
                                style={{
                                    display:
                                        openDropdown === "employmentLifestyle"
                                            ? "block"
                                            : "none",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cum, nostrum est perferendis
                                eum dolor nihil.
                            </div>
                        </div>
                        <div className="dropdown petExperiences">
                            <p onClick={() => toggleDropdown("petExperiences")}>
                                Pet Experiences
                                {openDropdown === "petExperiences" ? (
                                    <IoIosArrowUp />
                                ) : (
                                    <IoIosArrowDown />
                                )}
                            </p>
                            <div
                                className="dpCont petExperiencesDP"
                                style={{
                                    display:
                                        openDropdown === "petExperiences"
                                            ? "block"
                                            : "none",
                                }}
                            >
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Similique et asperiores
                                distinctio eligendi explicabo esse enim nesciunt
                                dolor ipsam soluta harum hic voluptatibus
                                perspiciatis ducimus, consequuntur facilis
                                impedit aperiam vel qui repellendus aspernatur
                                tempora eaque!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="informationContainer petInfoCont">
                    <h2>Pet Information</h2>
                    <div className="petInfo name-type">
                        <div className="lbl-disp petNamePrev">
                            <p className="dispLabels">Name</p>
                            <input type="text" readOnly value="Sushi" />
                        </div>
                        <div className="lbl-disp petBreedPrev">
                            <p className="dispLabels">Type</p>
                            <input type="text" readOnly value="Cat" />
                        </div>
                    </div>
                    <div className="petInfo breed-color">
                        <div className="lbl-disp breedColorPrev">
                            <p className="dispLabels">Breed</p>
                            <input type="text" readOnly value="Hello Kitty" />
                        </div>
                        <div className="lbl-disp petColorPrev">
                            <p className="dispLabels">Color</p>
                            <input type="text" readOnly value="Black" />
                        </div>
                    </div>
                    <div className="petInfo age-gender">
                        <div className="lbl-disp ageGenderPrev">
                            <p className="dispLabels">Age</p>
                            <input type="text" readOnly value="6" />
                        </div>
                        <div className="lbl-disp petColorPrev">
                            <p className="dispLabels">Gender</p>
                            <input type="text" readOnly value="Male" />
                        </div>
                    </div>
                    <div className="infoDropdownsContainer">
                        <div className="dropdown behaviorPrev">
                            <p onClick={() => toggleDropdown("behaviorPrev")}>
                                Behavior
                                {openDropdown === "behaviorPrev" ? (
                                    <IoIosArrowUp />
                                ) : (
                                    <IoIosArrowDown />
                                )}
                            </p>
                            <div
                                className="dpCont behaviorPrev"
                                style={{
                                    display:
                                        openDropdown === "behaviorPrev"
                                            ? "block"
                                            : "none",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ab, possimus.
                            </div>
                        </div>
                        <div className="dropdown healthPrev">
                            <p onClick={() => toggleDropdown("healthPrev")}>
                                Health
                                {openDropdown === "healthPrev" ? (
                                    <IoIosArrowUp />
                                ) : (
                                    <IoIosArrowDown />
                                )}
                            </p>
                            <div
                                className="dpCont healthPrev"
                                style={{
                                    display:
                                        openDropdown === "healthPrev"
                                            ? "block"
                                            : "none",
                                }}
                            >
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Sint unde labore eum quos
                                voluptatibus cupiditate laborum quo modi saepe
                                accusantium?
                            </div>
                        </div>
                        <div className="dropdown descriptionPrev">
                            <p
                                onClick={() =>
                                    toggleDropdown("descriptionPrev")
                                }
                            >
                                Description
                                {openDropdown === "descriptionPrev" ? (
                                    <IoIosArrowUp />
                                ) : (
                                    <IoIosArrowDown />
                                )}
                            </p>
                            <div
                                className="dpCont descriptionPrev"
                                style={{
                                    display:
                                        openDropdown === "descriptionPrev"
                                            ? "block"
                                            : "none",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam suscipit facilis sunt
                                iste, consequatur sit culpa, impedit laborum ea
                                repellat ipsam, explicabo quam nulla id debitis
                                alias vel eveniet officiis!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evalResultCont">
                    <div className="buttons">
                        <button
                            className={`btnApprove ${
                                selectedButton === "approve" ? "selected" : ""
                            }`}
                            onClick={() => handleButtonClick("approve")}
                        >
                            Approve
                        </button>
                        <button
                            className={`btnReject ${
                                selectedButton === "reject" ? "selected" : ""
                            }`}
                            onClick={() => handleButtonClick("reject")}
                        >
                            {rejectButtonText}
                        </button>
                    </div>
                    {showRejectReason && (
                        <div className="rejectReasonCont">
                            <textarea
                                name="rejectionReason"
                                id="rejectionReason"
                                placeholder="Please state the reason for rejection"
                                onChange={handleTextChange}
                                maxLength={maxChar}
                            ></textarea>
                            <p className="charCount">
                                {charCount} / {maxChar}
                            </p>
                        </div>
                    )}
                    <button className="evalSubmitButton">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default AdminEvaluation;
