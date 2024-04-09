import React, { useRef, useState } from "react";
import "../components/PetPreview.css";
import petImg1 from "../assets/pet photos/dog photos/dog_img1.jpg";
import petImg2 from "../assets/pet photos/dog photos/dog_img2.jpg";
import petImg3 from "../assets/pet photos/dog photos/dog_img3.jpg";
import petImg4 from "../assets/pet photos/dog photos/dog_img4.jpg";
import petImg5 from "../assets/pet photos/dog photos/dog_img5.jpg";
import petImg6 from "../assets/pet photos/dog photos/dog_img6.jpg";
import petImg7 from "../assets/pet photos/dog photos/dog_img7.jpg";
import petImg8 from "../assets/pet photos/dog photos/dog_img8.jpg";
import Navbar from "../components/Navbar";

function PetPreview() {
    const containerRef = useRef(null);

    const handleWheel = (e) => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft += e.deltaY;
            e.preventDefault();
        }
    };

    const [selectedImg, setSelectedImg] = useState(petImg1);

    const handleImageClick = (imgSrc) => {
        setSelectedImg(imgSrc);
    };

    // Variables for pet information
    const petName = "Nikka";
    const petBreed = "Siamese";
    const petColor = "Orange";
    const petAge = 12;
    const petBehavior = "Playful • Goofy • Sleepy";
    const petHealth = "Fully Vaccinated";
    const petDescription =
        "a playful feline companion who brings joy to my home with his mischievous antics and comforting purrs, adding warmth to my life with each gentle nudge and soft paw. My cat's curious nature and affectionate demeanor make everyday moments special, creating a bond that enriches both our lives.";

    return (
        <div>
            <Navbar />
            <div className="petPreview">
                <div className="petImgSec">
                    <div className="selectedImgContainer">
                        <img src={selectedImg} />
                    </div>
                    <div
                        className="petImgCollection"
                        ref={containerRef}
                        onWheel={handleWheel}
                    >
                        <div
                            className="imgBoxes"
                            onMouseEnter={() => handleImageClick(petImg1)}
                        >
                            <img src={petImg1} />
                        </div>
                        <div
                            className="imgBoxes"
                            onMouseEnter={() => handleImageClick(petImg2)}
                        >
                            <img src={petImg2} />
                        </div>
                        <div
                            className="imgBoxes"
                            onMouseEnter={() => handleImageClick(petImg3)}
                        >
                            <img src={petImg3} />
                        </div>
                        <div
                            className="imgBoxes"
                            onMouseEnter={() => handleImageClick(petImg4)}
                        >
                            <img src={petImg4} />
                        </div>
                        <div
                            className="imgBoxes"
                            onMouseEnter={() => handleImageClick(petImg5)}
                        >
                            <img src={petImg5} />
                        </div>
                        <div
                            className="imgBoxes"
                            onMouseEnter={() => handleImageClick(petImg6)}
                        >
                            <img src={petImg6} />
                        </div>
                        <div
                            className="imgBoxes"
                            onMouseEnter={() => handleImageClick(petImg7)}
                        >
                            <img src={petImg7} />
                        </div>
                        <div
                            className="imgBoxes"
                            onMouseEnter={() => handleImageClick(petImg8)}
                        >
                            <img src={petImg8} />
                        </div>
                    </div>
                </div>
                <div className="petInfoContainer">
                    <h1 className="petNameInfo">{petName}</h1>
                    <div className="petInfoList">
                        <h2>Pet Information:</h2>
                        <h3>Breed: {petBreed}</h3>
                        <h3>Color: {petColor}</h3>
                        <h3>Age: {petAge}</h3>
                        <h3>Behavior: {petBehavior}</h3>
                        <h3>Health: {petHealth}</h3>
                        <h3 className="petDescriptionInfo">Description: {petDescription}</h3>
                    </div>
                    <button className="adoptionInqBtn">
                        Inquire of Adoption
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PetPreview;
