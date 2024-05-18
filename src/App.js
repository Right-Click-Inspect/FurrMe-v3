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
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import TermsAndConditions from "./components/TermsAndConditions";
import FAQs from "./components/FAQs";
import AdminDashboard from "./components/AdminDashboard";
import AdminDashboardSidebar from "./components/AdminDashboardSidebar";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <AdminDashboard />
            </Router>
        </div>
    );
}

export default App;
