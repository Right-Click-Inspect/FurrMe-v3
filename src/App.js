import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <Signup />
            {/* <Login /> */}
        </Router>
    );
}

export default App;
