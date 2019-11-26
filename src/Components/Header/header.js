import React, { Component } from "react";

import "./header.css";
import Banner from "../Banner/banner";
import Intro from "../Intro/intro";
import TabView from "../TabView/tabView";
import Work from "../Working/works";
import Team from "../Team/team";
import Metaverse from "../Metaverse/metaverse";
import NewsLetter from "../NewsLetter/newsLetter";

class Header extends Component {
  state = {
    currentTab: 0
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md bg-color navbar-dark mb-1">
          <div className="nav-item ml-2 mt-2">
            <a className="nav-link text-white" href="#">
              <img
                className="logo display"
                src={require("../../Assets/Logo/home-button.png")}
                alt="home"
              />
              {/* <span className="display">HOME</span> */}
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav" style={{ fontSize: 22 }}>
              <li className="nav-item">
                <a
                  className="nav-link text-white link-style mr-5"
                  onClick={() => this.setState({ currentTab: 0 })}
                  href="#tab"
                >
                  {/* <div className="motion"></div> */}
                  Create
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white link-style mr-5"
                  onClick={() => this.setState({ currentTab: 1 })}
                  href="#tab"
                >
                  Verify
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white link-style mr-5"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white link-style mr-5" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white link-style mr-5"
                  href="#newsletter"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container" id="banner">
          <Banner />
        </div>
        <div className="container" id="tab">
          <TabView currentTab={this.state.currentTab} />
        </div>
        <div className="container-fluid" id="about">
          <Intro />
          <div className="container mt-5 mb-5" id="work">
            <Work />
          </div>
        </div>
        <div className="container" id="team">
          <Team />
        </div>
        <div className="container" id="metaverse">
          <Metaverse />
        </div>
        <div className="container" id="newsletter">
          <NewsLetter />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
