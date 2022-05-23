import { Link } from "react-router-dom";
import React, { useState } from "react";

import logo from "../../assets/logo/logo-text-svg.svg";

import "./header.scss";

const Header = () => {
  const [burger, setBurger] = useState(false);

  // on nav open set a background with opacity on the window
  const backdrop = () => (
    <div onClick={() => closeBurger()} className="header__backdrop"></div>
  );

  const switchBurger = () => {
    const body = document.body.classList;

    // make body overflow hidden on nav open to avoid scroll
    burger ? body.remove("blocked") : body.add("blocked");

    setBurger(!burger);
  };

  const closeBurger = () => {
    const body = document.body.classList;
    body.remove("blocked");

    setBurger(false);
  };

  // on location change, close nav
  const handleItemClick = () => closeBurger();

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div
            className={`header__container ${
              burger ? "header__container-open" : ""
            }`}
          >
            <ul className="header__bloc">
              <Link onClick={handleItemClick} className="header__link" to="/">
                Home
              </Link>
              <Link
                onClick={handleItemClick}
                className="header__link"
                to="/projects"
              >
                Works
              </Link>
              <Link
                onClick={handleItemClick}
                className="header__link"
                to="/services"
              >
                Services
              </Link>
            </ul>
            <ul className="header__bloc">
              <Link
                onClick={handleItemClick}
                className="header__link"
                to="/about"
              >
                About Us
              </Link>
              <Link
                onClick={handleItemClick}
                className="header__link"
                to="/contacts"
              >
                Contacts
              </Link>
              {/* <a className="header__link" href="/">Ro/En</a> */}
            </ul>
            <Link
              onClick={handleItemClick}
              className="header__logo logo"
              to="/"
            >
              <img loading="lazy" src={logo} alt="logo" />
              {/* dada
                <br/>
                art.craft */}
            </Link>
          </div>
          <button
            className={`burger  ${burger ? "burgerOpen" : ""}`}
            onClick={() => switchBurger()}
          >
            <div className="burger-icon"></div>
          </button>
          <Link
            onClick={handleItemClick}
            className="header__logo header__logo-mobile logo"
            to="/"
          >
            <img loading="lazy" src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      {burger && backdrop()}
    </header>
  );
};

export default Header;
