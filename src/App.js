import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import AllPets from "./components/AllPets";
import DogsPage from "./components/DogsPage";
import CatsPage from "./components/CatsPage";
import PetPrev from "./components/PetPreview";
import PostCard from "./components/CommunityPostCard";
import Community from "./components/Community";
import AdoptionVerification from "./components/AdoptionVerification";
import ForgotPassword from "./components/ForgotPassword";
import ManageProfile from "./components/ManageProfile";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <AdoptionVerification />
        </Router>
    );
}

export default App;
