import React from "react";
import "./App.css";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import About from "./sections/About";
import Skill from "./sections/Skill";
import Navigation from "./sections/Navigation";
import SnowStorm from 'react-snowstorm';

function App() {
  return (
    <div className="App">
      <SnowStorm />
      <Navigation />
      <TitlesAndIcons />
      <About />
      <Skill />
    </div>
  );
}

export default App;
