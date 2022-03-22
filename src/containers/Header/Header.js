import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

import { myContext } from "../State/Store";

import logo from "../../assets/logo/logo-text-svg.svg";

import "./header.scss";

const Header = () => {
  const { burger, setBurger } = useContext(myContext);
  const [locBurger, setLocBurger] = useState(burger);
  useEffect(() => {}, [locBurger]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div className="header__container">
            <ul className="header__bloc">
              <Link className="header__link" to="/">
                Home
              </Link>
              <Link className="header__link" to="/projects">
                Works
              </Link>
              <Link className="header__link" to="/services">
                Services
              </Link>
            </ul>
            <ul className="header__bloc">
              <Link className="header__link" to="/about">
                About Us
              </Link>
              <Link className="header__link" to="/contacts">
                Contacts
              </Link>
              {/* <a className="header__link" href="/">Ro/En</a> */}
            </ul>
            <Link className="header__logo header__logo-desk logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Link className="header__logo header__logo-mobile logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <myContext.Consumer>

          </myContext.Consumer>
          <button
            className={`burger  ${locBurger ? "burgerOpen" : ""}`}
            onClick={() => {
              setLocBurger(!locBurger);

              setBurger(locBurger);
            }}
          >
            <div className="burger-icon"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
