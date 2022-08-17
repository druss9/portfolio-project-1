import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles"
import Navbar from "./components/navbar";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Services from "./components/services";
import Experience from "./components/experience";
import Portfolio from "./components/portfolio";


class App extends Component {
  render() {
    return ( 
      <div>
         
         <Particles className="particles-canvas"
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0
            },
            particles: {
              color: {
                value: "#FF0000",
                animation: {
                  enable: true,
                  speed: 10
                }
              },
              move: {
                attract: {
                  enable: true,
                  rotate: {
                    distance: 100,
                    x: 2000,
                    y: 2000
                  }
                },
                direction: "none",
                enable: true,
                outModes: {
                  default: "destroy"
                },
                path: {
                  clamp: false,
                  enable: true,
                  delay: {
                    value: 0
                  },
                  generator: "polygonPathGenerator",
                  options: {
                    sides: 6,
                    turnSteps: 30,
                    angle: 30
                  }
                },
                random: false,
                speed: 3,
                straight: false,
                trail: {
                  fillColor: "#000",
                  length: 20,
                  enable: true
                }
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 0
              },
              opacity: {
                value: 1
              },
              shape: {
                type: "circle"
              },
              size: {
                value: 2
              }
            },
            background: {
              color: "#000"
            },
            fullScreen: {
              zIndex: -1
            },
            emitters: {
              direction: "none",
              rate: {
                quantity: 1,
                delay: 0.25
              },
              size: {
                width: 0,
                height: 0
              },
              position: {
                x: 50,
                y: 50
              }
            }
          }}
        />
        
        <Navbar />
        <Header />
        <AboutMe />
        <Services />
        <Experience />
        <Portfolio />
      </div> 
    );
  };
}

export default App;
