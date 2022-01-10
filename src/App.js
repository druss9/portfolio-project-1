import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from "./components/navbar";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Services from "./components/services";
import Experience from "./components/experience";


class App extends Component {
  render() {
    return ( 
        <div>
          <Particles 
            className="particles-canvas"
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable:true,
                    value_are:900
                  }
                },
                shape:{
                  type: "circle",
                  stroke:{
                    width: 6,
                    color: "#f9ab00"
                  }
                }
              } 
            }}
          />
          <Navbar />
          <Header />
          <AboutMe />
          <Services />
          <Experience />
        </div> 
    );
  };
}

export default App;
