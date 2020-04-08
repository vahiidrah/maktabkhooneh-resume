import React, { Component } from "react";
import Fullpage from "../component/Fullpage";
import SkillCard from "../component/SkillCard";
import data from "../data.json";
import "./Skill.css";
import ArrowUp from "../component/ArrowUp";
import { Link } from "react-scroll";

class Skill extends Component {
  render() {
    return [
      <Fullpage className="bg-color skills">
        <h3
          className="text-center pt-2 d-inline-block mb-4"
          style={{ height: "50px", width: "90px" }}
        >
          {data.section[1].title}
        </h3>
        <div className="container">
          <div className="row justify-content-center">
            {Object.keys(data.section[1].items).map((eachSkill) => {
              return [
                <SkillCard skill={eachSkill} />
              ];
            })}
          </div>
        </div>
        <Link
            className="test6"
            to="title"
            spy={true}
            smooth={true}
            duration={500}
          >
            <ArrowUp
              style={{
                transform: "translateY(270px)",
                display: "inline-block",
                animationName: "arrowUp",
                animationDuration: "1.5s",
                animationIterationCount: "infinite",
              }}
            />
          </Link>
      </Fullpage>
    ];
  }
}

export default Skill;
