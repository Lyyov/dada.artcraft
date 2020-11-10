import logo from '../../assets/logo/logo.svg';

import "./header.scss";

const header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div className="header__container">
            <ul className="header__bloc">
              <a className="header__link" href="/">Home</a>
              <a className="header__link" href="/">Services</a>
            </ul>
            <ul className="header__bloc">
              <a className="header__link" href="/">About Us</a>
              <a className="header__link" href="/">Contact Us</a>
              <a className="header__link" href="/">Ro/En</a>
            </ul>
            <a className="header__logo logo" href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header;