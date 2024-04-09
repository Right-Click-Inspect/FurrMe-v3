import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import AllPets from "./components/AllPets";
import DogsPage from './components/DogsPage'
import CatsPage from './components/CatsPage'
import PetPrev from './components/PetPreview'

import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            {/* <Signup /> */}
            <PetPrev />
            {/* <Homepage/> */}
        </Router>
    );
}

export default App;
