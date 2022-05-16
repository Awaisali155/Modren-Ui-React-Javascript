import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { RiCloseCircleLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#Home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#featuers">
              Case Studies
            </a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>

        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>sign in</p>
        <button type="button">sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseCircleLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#Home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is GPT?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#featuers">Case Studies</a>
              </p>

              <p>
                <a href="#blog">Library</a>
              </p>

              <div className="gpt3__navbar-menu_container-links-sign">
                <p>sign in</p>
                <button type="button">sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
