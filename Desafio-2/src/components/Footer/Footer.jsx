import React from "react";
import iconFacebook from "./icon-facebook.png";
import iconYoutube from "./icon-youtube.png";
import iconTwitter from "./icon-twitter.png";

class Header extends React.Component {
  constructor() {
    super();
    this.iconFacebook = iconFacebook;
    this.iconYoutube = iconYoutube;
    this.iconTwitter = iconTwitter;
  }

  render() {
    return (
      <footer className="footer">
        <nav className="footer__nav">
          <h1>Follow Us</h1>
          <div className="footer__nav__rede-social">
            <div className="footer__nav__rede-social__logo">
              <a href="#">
                <img src={`${this.iconFacebook}`} alt="facebook" />
              </a>
            </div>
            <div className="footer__nav__rede-social__logo">
              <a href="#">
                <img src={`${this.iconYoutube}`} alt="youtube" />
              </a>
            </div>
            <div className="footer__nav__rede-social__logo">
              <a href="#">
                <img src={`${this.iconTwitter}`} alt="twitter" />
              </a>
            </div>
          </div>
        </nav>
        <nav className="footer__nav">
          <h1>Contact</h1>
          <div className="footer__contact">
            <p>2490 Leisure Lane</p>
            <p>San Luis Obispo</p>
            <p>California</p>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Header;
