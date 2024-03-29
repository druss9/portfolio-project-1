import React from "react";
import Typed from "react-typed"

const header = () => {
    return (
    <div className="header-wrapper">
        <div id="home" className="main-info">
            <h1> Web development and websites promotions </h1>
            <Typed 
            className="typed-text"
            strings={["Web Design","Web Development","Facebook Ads SMM", "Google Ads"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="#" className="btn-main-offer" >contact me</a>
        </div>
    </div>
    )
}

export default header