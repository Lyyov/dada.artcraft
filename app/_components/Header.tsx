"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const pathname = usePathname();

  // on location change, close nav
  useEffect(() => {
    closeBurger();
  }, [pathname]);

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
              <Link className="header__link" href="/">
                Home
              </Link>
              <Link className="header__link" href="/works">
                Works
              </Link>
              <Link className="header__link" href="/services">
                Services
              </Link>
            </ul>
            <ul className="header__bloc">
              <Link className="header__link" href="/about">
                About Us
              </Link>
              <Link className="header__link" href="/contacts">
                Contacts
              </Link>
            </ul>
            <Link className="header__logo logo" href="/">
              <Image
                width={77}
                height={24}
                loading="lazy"
                src={"/assets/logo/logo-text-svg.svg"}
                alt="logo"
              />
            </Link>
          </div>
          <button
            className={`burger  ${burger ? "burgerOpen" : ""}`}
            onClick={() => switchBurger()}
          >
            <div className="burger-icon"></div>
          </button>
          <Link className="header__logo header__logo-mobile logo" href="/">
            <Image
              width={77}
              height={24}
              loading="lazy"
              src={"/assets/logo/logo-text-svg.svg"}
              alt="logo"
            />
          </Link>
        </div>
      </div>
      {burger && backdrop()}
    </header>
  );
};

export default Header;
