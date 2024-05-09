import React from "react";
import "../components/ForgotPassword.css";
import Navbar from "../components/Navbar";

function ForgotPassword() {
    return (
        <div>
            <Navbar />
            <div className="forgotPasswordPage">
                <div className="forgotPasswordContainer">
                    <h2>Forgot your password?</h2>
                    <p>Enter the email address associated with your account and we'll send a temporary password for your next login and you can change your password thereon.</p>
                    <input type="email" placeholder="Email address"/>
                    <button>Reset Password</button>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
