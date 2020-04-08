import React, { Component } from "react";
import Fullpage from "../component/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesAndIcons.css";
import ArrowDown from "../component/ArrowDown";
import { Link, Element } from "react-scroll";

class TitlesAndIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: "",
      transition: "",
      cursor: "",
    };
  }
  up = () => {
    this.setState({
      transform: "translateY(-5px)",
      transition: "1s",
      cursor: "pointer",
    });
  };
  down = () => {
    this.setState({
      transform: "translateY(0px)",
      transition: "1s",
      cursor: "pointer",
    });
  };
  render() {
    return [
    <Element name="title" className="element p-0 m-0"></Element>,
      <div>
        <Fullpage className="top">
          <h1
            className="title text-light"
            onMouseOver={this.up}
            onMouseLeave={this.down}
            style={{
              transform: this.state.transform,
              transition: this.state.transition,
              cursor: this.state.cursor,
            }}
          >
            {data.title}
          </h1>
          <h4 className="text-warning">{data.subtitle}</h4>
          <div>
            {Object.keys(data.links).map((key) => {
              return [
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>,
              ];
            })}
          </div>
          <Link
            className="test6"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <ArrowDown
              style={{
                transform: "translateY(270px)",
                display: "inline-block",
                animationName: "arrowDown",
                animationDuration: "1.5s",
                animationIterationCount: "infinite",
              }}
            />
          </Link>
        </Fullpage>
        <Element name="about" className="element p-0 m-0"></Element>
      </div>,
    ];
  }
}

export default TitlesAndIcons;
