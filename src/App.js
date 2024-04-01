import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import All_Pets from "./components/AllPets";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <All_Pets />
            {/* <Login /> */}
        </Router>
    );
}

export default App;
