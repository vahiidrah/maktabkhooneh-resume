import React, { Component } from "react";
import data from "../data.json";
import "../component/SkillCard.css";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return [
      <div className="col-6 col-md-3">
        <div className="card mb-4">
          <div className="card-img-top" style={{ height: "180px" }}>
            <img
              className="img-fluid img"
              src={data.section[1].items[skill].content.image}
              alt="skill"
            />
          </div>
          <div className="card-body font-weight-bold pb-2">
            {data.section[1].items[skill].content.title}
          </div>
        </div>
      </div>
    ];
  }
}

export default SkillCard;
