import React from "react";
import Typed from "react-typed"

const header = () => {
    return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1> Web development and websites promotions </h1>
            <Typed 
            className="typed-text"
            strings={["Web Design","Web Development","Facebook Ads SMM", "Google Ads"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
        </div>
    </div>
    )
}

export default header