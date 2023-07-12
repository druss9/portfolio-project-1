import React from "react";
import author from "../me.jpg";

const aboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Hello! My name is [Your Name] and I am an Automation Engineer with 7 years of experience working for TTT. Throughout my career, I have used numerous tools and solutions including Java and TestNG framework. I have since moved on to C#, Visual Studio BDD framework, Cucumber Selenium, and most recently TypeScript VSCode, Cucumber JS, Node JS Selenium. I have also worked with Azure DevOps pipelines and integration with Slack.

                        I am passionate about automation testing and enjoy working on projects that challenge me to learn new things. My experience has taught me the importance of collaboration and communication in achieving project goals. I am always looking for ways to improve my skills and stay up-to-date with the latest technologies.

                        Thank you for taking the time to read my introduction. Please feel free to contact me if you have any questions or would like to learn more about my work.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default aboutMe