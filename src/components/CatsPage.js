import React, { useState, useEffect, useRef } from "react";
import "../components/CatsPage.css";
import CatsPageData from "../assets/Cats";
import PetCard from "./PetCard";
import Navbar from "../components/Navbar";

function CatsPage() {
    const [ageClick, setAgeClick] = useState(false);
    const [breedClick, setBreedClick] = useState(false);
    const [colorClick, setColorClick] = useState(false); // State for color filter
    const [ageCaretDirection, setAgeCaretDirection] = useState("down");
    const [breedCaretDirection, setBreedCaretDirection] = useState("down");
    const [colorCaretDirection, setColorCaretDirection] = useState("down"); // State for color caret direction
    const ageRef = useRef(null);
    const breedRef = useRef(null);
    const colorRef = useRef(null); // Ref for color dropdown

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                ageRef.current &&
                !ageRef.current.contains(event.target) &&
                breedRef.current &&
                !breedRef.current.contains(event.target) &&
                colorRef.current && // Check if colorRef exists
                !colorRef.current.contains(event.target)
            ) {
                setAgeClick(false);
                setAgeCaretDirection("down");
                setBreedClick(false);
                setBreedCaretDirection("down");
                setColorClick(false); // Set colorClick to false
                setColorCaretDirection("down"); // Reset color caret direction
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleFilterClick = (setState, setDirection, currentState) => {
        setState(!currentState);
        setDirection(currentState ? "down" : "up");
        if (currentState) {
            setAgeClick(false);
            setAgeCaretDirection("down");
            setBreedClick(false);
            setBreedCaretDirection("down");
            setColorClick(false);
            setColorCaretDirection("down");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="catsPage">
                <div className="cp-bannerContainer">
                    <div className="cp-Banner"></div>
                </div>
                <div className="filter-dropdowns">
                    <div
                        className="petFilter ageFilter"
                        onClick={() =>
                            handleFilterClick(
                                setAgeClick,
                                setAgeCaretDirection,
                                ageClick,
                                ageCaretDirection
                            )
                        }
                        ref={ageRef}
                    >
                        <div className="filterTitle">
                            <p>Age</p>
                            <i
                                className={`fa-solid fa-caret-${ageCaretDirection}`}
                            ></i>
                        </div>
                        <ul
                            className={
                                ageClick ? "filterMenu active" : "filterMenu"
                            }
                        >
                            <li>Puppy</li>
                            <li>Middle-Aged</li>
                            <li>Adult</li>
                        </ul>
                    </div>
                    <div
                        className="petFilter breedFilter"
                        onClick={() =>
                            handleFilterClick(
                                setBreedClick,
                                setBreedCaretDirection,
                                breedClick,
                                breedCaretDirection
                            )
                        }
                        ref={breedRef}
                    >
                        <div className="filterTitle">
                            <p>Breed</p>
                            <i
                                className={`fa-solid fa-caret-${breedCaretDirection}`}
                            ></i>
                        </div>
                        <ul
                            className={
                                breedClick ? "filterMenu active" : "filterMenu"
                            }
                        >
                            <li>German Shepherd</li>
                            <li>Golden Retriever</li>
                            <li>Great Dane</li>
                        </ul>
                    </div>
                    <div
                        className="petFilter colorFilter"
                        onClick={() =>
                            handleFilterClick(
                                setColorClick,
                                setColorCaretDirection,
                                colorClick,
                                colorCaretDirection
                            )
                        }
                        ref={colorRef}
                    >
                        <div className="filterTitle">
                            <p>Color</p>
                            <i
                                className={`fa-solid fa-caret-${colorCaretDirection}`}
                            ></i>
                        </div>
                        <ul
                            className={
                                colorClick ? "filterMenu active" : "filterMenu"
                            }
                        >
                            <li>Orange</li>
                            <li>White</li>
                            <li>Black</li>
                        </ul>
                    </div>
                </div>
                <div className="petsContainer">
                    {CatsPageData.map((pet, i) => {
                        return (
                            <PetCard
                                key={i}
                                id={pet.id}
                                name={pet.name}
                                address={pet.address}
                                image={pet.image}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CatsPage;
