import React, { useState, useEffect, useRef } from "react";
import "../components/AdminPetPreview.css";
import AdminDashboardSidebar from "./AdminDashboardSidebar";
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import petImg1 from "../assets/pet photos/cat photos/cat_img1.jpg";
import petImg2 from "../assets/pet photos/cat photos/cat_img2.jpg";

function AdminPetPreview() {
    // Initial state
    const initialPetInfo = {
        name: "Aiah",
        type: "Cat",
        gender: "Male",
        breed: "Hello Kitty",
        color: "White",
        age: "6",
        behavior: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        health: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        images: [petImg1, petImg2],
    };

    // State for dropdown selections
    const [selectedType, setSelectedType] = useState(initialPetInfo.type);
    const [selectedGender, setSelectedGender] = useState(initialPetInfo.gender);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);

    // State for inputs and textareas
    const [name, setName] = useState(initialPetInfo.name);
    const [breed, setBreed] = useState(initialPetInfo.breed);
    const [color, setColor] = useState(initialPetInfo.color);
    const [age, setAge] = useState(initialPetInfo.age);
    const [behavior, setBehavior] = useState(initialPetInfo.behavior);
    const [health, setHealth] = useState(initialPetInfo.health);
    const [description, setDescription] = useState(initialPetInfo.description);

    // State for images
    const [images, setImages] = useState(initialPetInfo.images);

    // State to track if changes were made
    const [isChanged, setIsChanged] = useState(false);

    const typeDropdownRef = useRef(null);
    const genderDropdownRef = useRef(null);

    const handleDropdownToggle = (dropdown) => {
        if (dropdown === "type") {
            setIsTypeDropdownOpen(!isTypeDropdownOpen);
            setIsGenderDropdownOpen(false);
        } else if (dropdown === "gender") {
            setIsGenderDropdownOpen(!isGenderDropdownOpen);
            setIsTypeDropdownOpen(false);
        }
    };

    const handleOptionSelect = (dropdown, option) => {
        if (dropdown === "type") {
            setSelectedType(option);
            setIsTypeDropdownOpen(false);
        } else if (dropdown === "gender") {
            setSelectedGender(option);
            setIsGenderDropdownOpen(false);
        }
        setIsChanged(true);
    };

    const handleClickOutside = (event) => {
        if (
            typeDropdownRef.current &&
            !typeDropdownRef.current.contains(event.target)
        ) {
            setIsTypeDropdownOpen(false);
        }
        if (
            genderDropdownRef.current &&
            !genderDropdownRef.current.contains(event.target)
        ) {
            setIsGenderDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleUploadClick = () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.multiple = true;
        fileInput.onchange = (event) => {
            const files = Array.from(event.target.files);
            if (files.length + images.length > 8) {
                alert("You can only upload up to 8 photos.");
                return;
            }
            const newImages = files.map((file) => URL.createObjectURL(file));
            setImages((prevImages) => [...prevImages, ...newImages]);
            setIsChanged(true);
        };
        fileInput.click();
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
        setIsChanged(true);
    };

    const handleImageClick = (image) => {
        window.open(image, "_blank");
    };

    // Check for changes in the form inputs
    useEffect(() => {
        const isFormChanged =
            name !== initialPetInfo.name ||
            selectedType !== initialPetInfo.type ||
            selectedGender !== initialPetInfo.gender ||
            breed !== initialPetInfo.breed ||
            color !== initialPetInfo.color ||
            age !== initialPetInfo.age ||
            behavior !== initialPetInfo.behavior ||
            health !== initialPetInfo.health ||
            description !== initialPetInfo.description ||
            images.length !== initialPetInfo.images.length || // Check if image count has changed
            !images.every(
                (image, index) => image === initialPetInfo.images[index]
            ); // Check if images are the same

        setIsChanged(isFormChanged);
    }, [
        name,
        selectedType,
        selectedGender,
        breed,
        color,
        age,
        behavior,
        health,
        description,
        images,
    ]);

    return (
        <div className="adminPetPreview">
            <div className="sidebarComp">
                <AdminDashboardSidebar />
            </div>
            <div className="mainContent">
                <div className="divider">
                    <div className="petInfoCont">
                        <h2>Pet Information</h2>
                        <div className="allPetInfo">
                            <div className="infoCont name-type">
                                <div className="infoSet nameSet">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setIsChanged(true);
                                        }}
                                    />
                                </div>
                                <div
                                    className="infoSet TypeSet"
                                    ref={typeDropdownRef}
                                >
                                    <label htmlFor="type">Type</label>
                                    <p
                                        className="dropdownHeader"
                                        onClick={() =>
                                            handleDropdownToggle("type")
                                        }
                                    >
                                        {selectedType}
                                        {isTypeDropdownOpen ? (
                                            <MdOutlineKeyboardArrowUp />
                                        ) : (
                                            <MdOutlineKeyboardArrowDown />
                                        )}
                                    </p>
                                    {isTypeDropdownOpen && (
                                        <ul className="Dropdown">
                                            <li
                                                onClick={() =>
                                                    handleOptionSelect(
                                                        "type",
                                                        "Dog"
                                                    )
                                                }
                                            >
                                                Dog
                                            </li>
                                            <li
                                                onClick={() =>
                                                    handleOptionSelect(
                                                        "type",
                                                        "Cat"
                                                    )
                                                }
                                            >
                                                Cat
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="infoCont breed-color">
                                <div className="infoSet breedSet">
                                    <label htmlFor="breed">Breed</label>
                                    <input
                                        type="text"
                                        id="breed"
                                        value={breed}
                                        onChange={(e) => {
                                            setBreed(e.target.value);
                                            setIsChanged(true);
                                        }}
                                    />
                                </div>
                                <div className="infoSet colorSet">
                                    <label htmlFor="color">Color</label>
                                    <input
                                        type="text"
                                        value={color}
                                        onChange={(e) => {
                                            setColor(e.target.value);
                                            setIsChanged(true);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="infoCont age-gender">
                                <div className="infoSet ageSet">
                                    <label htmlFor="age">Age</label>
                                    <input
                                        type="text"
                                        value={age}
                                        onChange={(e) => {
                                            setAge(e.target.value);
                                            setIsChanged(true);
                                        }}
                                    />
                                </div>
                                <div
                                    className="infoSet genderSet"
                                    ref={genderDropdownRef}
                                >
                                    <label htmlFor="gender">Gender</label>
                                    <p
                                        className="dropdownHeader"
                                        onClick={() =>
                                            handleDropdownToggle("gender")
                                        }
                                    >
                                        {selectedGender}
                                        {isGenderDropdownOpen ? (
                                            <MdOutlineKeyboardArrowUp />
                                        ) : (
                                            <MdOutlineKeyboardArrowDown />
                                        )}
                                    </p>
                                    {isGenderDropdownOpen && (
                                        <ul className="Dropdown">
                                            <li
                                                onClick={() =>
                                                    handleOptionSelect(
                                                        "gender",
                                                        "Male"
                                                    )
                                                }
                                            >
                                                Male
                                            </li>
                                            <li
                                                onClick={() =>
                                                    handleOptionSelect(
                                                        "gender",
                                                        "Female"
                                                    )
                                                }
                                            >
                                                Female
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="textAreaConts">
                                <div className="TA-set behavior">
                                    <label htmlFor="behavior">Behavior</label>
                                    <textarea
                                        name="behavior"
                                        id="behavior"
                                        value={behavior}
                                        maxLength="100"
                                        onChange={(e) => {
                                            setBehavior(e.target.value);
                                            setIsChanged(true);
                                        }}
                                    ></textarea>
                                    <p className="charCount">
                                        {behavior.length}/100 characters
                                    </p>
                                </div>
                                <div className="TA-set health">
                                    <label htmlFor="health">Health</label>
                                    <textarea
                                        name="health"
                                        id="health"
                                        value={health}
                                        maxLength="200"
                                        onChange={(e) => {
                                            setHealth(e.target.value);
                                            setIsChanged(true);
                                        }}
                                    ></textarea>
                                    <p className="charCount">
                                        {health.length}/200 characters
                                    </p>
                                </div>
                                <div className="TA-set description">
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        value={description}
                                        maxLength="300"
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                            setIsChanged(true);
                                        }}
                                    ></textarea>
                                    <p className="charCount">
                                        {description.length}/300 characters
                                    </p>
                                </div>
                            </div>
                            {isChanged && (
                                <button className="saveChanges">
                                    Save Changes
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="petImagesContainer">
                        <div className="petImgBox">
                            {images.map((image, index) => (
                                <div className="img-container" key={index}>
                                    <img
                                        src={image}
                                        alt={`pet-${index}`}
                                        onClick={() => handleImageClick(image)}
                                    />
                                    <IoCloseCircle
                                        className="closeIcon"
                                        onClick={() => handleRemoveImage(index)}
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            className="uploadPhotos"
                            onClick={handleUploadClick}
                        >
                            Upload Photos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPetPreview;
