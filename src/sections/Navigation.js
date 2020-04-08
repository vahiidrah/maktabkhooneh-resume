import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-scroll";

class Navigation extends Component {
  state = {
    checked: localStorage.getItem("theme") === "dark" ? true : false,
    theme: localStorage.getItem("theme"),
  };

  componentDidMount() {
    document
      .getElementsByClassName("top")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    document
      .getElementsByClassName("about")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    document
      .getElementsByClassName("skills")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }

  toggleThemeChange = () => {
    const { checked } = this.state;
    if (checked === false) {
      localStorage.setItem("theme", "dark");

      document
        .getElementsByClassName("top")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      document
        .getElementsByClassName("about")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      document
        .getElementsByClassName("skills")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      this.setState({
        checked: true,
      });
    } else {
      localStorage.setItem("theme", "light");

      document
        .getElementsByClassName("top")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      document
        .getElementsByClassName("about")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      document
        .getElementsByClassName("skills")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      this.setState({
        checked: false,
      });
    }
  };
  render() {
    return [
      <div className="navigation fixed-top">
        <nav class="navbar navbar-dark text-light bg-dark">
          <div class=" navbarNavAltMarkup">
            <div class="">
              <Link
                className="test6"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button class="nav-item nav-link text-light bg-transparent border-0 d-inline-block">
                  About
                </button>
              </Link>

              <Link
                className="test6"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button class="nav-item nav-link text-light bg-transparent border-0 d-inline-block">
                  Skills
                </button>
              </Link>

              <header className="App-header d-inline-block">
                <label class="switch">
                  <input
                    type="checkbox"
                    defaultChecked={this.state.checked}
                    onChange={() => this.toggleThemeChange()}
                  />
                  <span class="slider round" />
                </label>
              </header>
            </div>
          </div>
        </nav>
      </div>,
    ];
  }
}

export default Navigation;
