import React from "react";
import "../components/PetCard.css";

function PetCard(props) {
    return (
        <div className="petCard">
            <div className="petImgContainer">
                <img src={props.image} alt="" className="petImage" />
            </div>
            <div className="petName">
                <i class="fa-solid fa-paw"></i>
                <h2>{props.name}</h2>
            </div>
            <div className="petAddress">
                <i class="fa-solid fa-location-dot"></i>
                <p>{props.address}</p>
            </div>
        </div>
    );
}

export default PetCard;
