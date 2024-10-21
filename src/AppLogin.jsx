import React from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const AppLogin = () => {
    return (
        <>
            <div className="relative max-w-8xl max-auto">
                <Navbar />
                <Login />
                <Footer />
            </div>
        </>
    );
};
export default AppLogin;
