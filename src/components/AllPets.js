import React from "react";
import "../components/AllPets.css";
import AllPetsData from "../assets/AllPetsData";
import PetCard from "./PetCard";
import Navbar from "../components/Navbar";

function AllPets() {
    return (
        <div>
            <Navbar />
            <div className="allPets">
                <div className="allPetsHeader">
                    <h1>All Available Pets</h1>
                    <hr />
                </div>
                <div className="petsContainer">
                    {AllPetsData.map((pet, i) => {
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

export default AllPets;
