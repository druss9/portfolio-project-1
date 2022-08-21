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
import Contacts from "./components/contacts";

class App extends Component {
  render() {
    return (
      <div>

        <Particles
          className="particles-canvas"
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0
            },
            particles: {
              number: {
                value: 30,
                limit: 300,
                density: {
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "##f9ab00"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "images/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.5,
                  sync: false
                }
              },
              size: {
                value: 30,
                random: true,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 10,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 100,
                color: "#ffffff",
                opacity: 1,
                width: 1
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10
                  }
                },
                onClick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  lineLinked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 100,
                  duration: 2,
                  opacity: 1,
                  speed: 2
                },
                repulse: {
                  distance: 200
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
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
        <Portfolio />
        <Contacts />
      </div>
    );
  };
}

export default App;
