import React from "react";
import "../components/Homepage.css";
import { Link } from "react-router-dom";
import Login from "../components/Login";

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="homepage-bg">
                <h1 className="homepage-logo">FurrMe</h1>
                <h3 className="homepage-tagline">
                    Warming Hearts, One Paw at a Time: Bringing Comfort to Less
                    Fortunate Pets.
                </h3>
                <p>
                    Discover a world of wagging tails and playful purrs, where
                    every adoption is a chance to make a difference in a furry
                    friend's life. From cuddly cats to loyal dogs, our diverse
                    selection of pets is sure to melt your heart. Start your
                    adoption journey today and experience the joy of giving a
                    loving home to a deserving pet.
                </p>
                <div className="homepage-buttons">
                    <Link>
                        <button className="discover">Discover</button>
                    </Link>
                    <Link>
                        <button className="login">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
