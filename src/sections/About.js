import React, { Component } from "react";
import Fullpage from "../component/Fullpage";
import data from "../data.json";
import "./About.css";
import ArrowDown from "../component/ArrowDown";
import { Link, Element } from "react-scroll";

class About extends Component {
  render() {
    return [
      <Fullpage className="about">
        <h3 className="text-center mb-4 pt-4">{data.section[0].title}</h3>
        <p>{data.section[0].items[0].content}</p>
        <Link
          className="test6"
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
        >
          <ArrowDown           
          style={{
            transform: "translateY(270px)",
            display: "inline-block",
            animationName: "arrowDownAbout",
            animationDuration: "1.5s",
            animationIterationCount: "infinite",
          }}/>
        </Link>
      </Fullpage>,
      <Element name="skills" className="element p-0 m-0"></Element>,
    ];
  }
}

export default About;
