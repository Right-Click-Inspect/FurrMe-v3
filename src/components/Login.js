import React, { useEffect, useState } from "react";
import "../components/Login.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const emailPlaceholder = windowWidth < 960 ? "Email" : "";
    const passwordPlaceholder = windowWidth < 960 ? "Password" : "";

    return (
        <div>
            <Navbar />
            <div className="page-container">
                <div className="bg-container"></div>
                <div className="login-form">
                    <h1 className="login-header">Login</h1>
                    <div className="tagline-container">
                        <p className="tagline">
                            Homeless to Loved: Adopting Joy, One Paw at a Time
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="inputs email">
                            <label
                                className="signin-input-label"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="tbxEmail"
                                placeholder={emailPlaceholder}
                            />
                        </div>
                        <div className="inputs password">
                            <label
                                className="signin-input-label"
                                htmlFor="email"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="tbxPassword"
                                placeholder={passwordPlaceholder}
                            />
                        </div>
                        <Link to="/" className="forgotPassword">
                            Forgot Password
                        </Link>
                    </div>
                    <div className="button-container">
                        <Link>
                            <button className="login-button">Login</button>
                        </Link>
                    </div>
                    <div className="login-footer">
                        <p>
                            Don't have an account?{" "}
                            <Link className="lblCreateAccount">
                                Create an Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
