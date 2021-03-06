import React from "react";
import iconLogo from "./icon-logo.png";

class Header extends React.Component {
  constructor() {
    super();
    this.iconLogo = iconLogo;
    console.log("oi");
  }

  render() {
    return (
      <header>
        <nav className="header__nav">
          <div className="header__nav__logo">
            <div className="header__nav__logo__container-image">
              <img src={`${this.iconLogo}`} alt="" srcset="" />
            </div>
            <div className="header__nav__text">
              <h1 className="header__nav__text__h1">zutterman</h1>
              <p className="header__nav__text__p">Measure Tapes</p>
            </div>
          </div>
          <div className="header__nav__btn">
            <ul>
              <li>
                <a className="header__nav__btn__text" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="header__nav__btn__text" href="#">
                  Models
                </a>
              </li>
              <li>
                <a className="header__nav__btn__text" href="#">
                  Guarantee
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
