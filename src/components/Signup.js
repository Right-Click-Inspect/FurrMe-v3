import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../components/Signup.css";

function Signup() {
    return (
        <div>
            <Navbar />
            <div className="signup-page-container">
                <div className="signupbg"></div>
                <div className="signup-form">
                    <div className="signup-header">
                        <h1>Sign up</h1>
                        <p>
                            Join us in making a difference by opening your heart
                            and home to a pet in need today. Together, we can
                            create countless tail-wagging and purr-filled
                            moments of joy!
                        </p>
                    </div>
                    <div className="signup-inputs-container">
                        <input
                            id="firstname"
                            type="text"
                            className="signup-firstname"
                            placeholder="First Name"
                        />
                        <input
                            id="lastname"
                            type="text"
                            className="signup-firstname"
                            placeholder="Last Name"
                        />
                        <input
                            id="email"
                            type="text"
                            className="signup-email"
                            placeholder="Email"
                        />
                        <input
                            id="password"
                            type="password"
                            className="signup-password"
                            placeholder="Password"
                        />
                        <input
                            id="cnfrm-password"
                            type="password"
                            className="signup-cnfrmPassword"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className="signupBtn-container">
                        <Link>
                            <button className="btn-createAccnt">
                                Create Account
                            </button>
                        </Link>
                    </div>
                    <p className="terms">
                        By creating an account, you agree to FurrMe's{" "}
                        <Link>Terms of Service</Link> and{" "}
                        <Link>Privacy Policy</Link>
                    </p>
                    <h3>
                        Already have an account?{" "}
                        <Link className="footer-login">Login</Link>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Signup;
