import React, { Component } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./ArrowDown.css";

class ArrowDown extends Component {
    constructor(props){
        super(props)
        this.style = props.style
    }
  render() {
    return [
      <div className="arrow text-center">
        <button
          className="bg-transparent border-0"
          onClick={this.props.onClick}
          style={this.props.style}
        >
          <FaChevronDown />
        </button>
      </div>,
    ];
  }
}

export default ArrowDown