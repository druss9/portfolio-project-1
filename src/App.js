import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/header";


class App extends Component {
  render() {
    return ( 
        <div><Navbar /><Header /></div> 
    );
  }
}

export default App;
