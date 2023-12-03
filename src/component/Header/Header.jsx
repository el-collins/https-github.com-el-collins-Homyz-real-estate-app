import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpen && "-100%",
      };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" srcset="" width={100} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpen)}>
            <a href="#residencies">Residencies</a>
            <a href="#Our-values">Our Values</a>
            <a href="#contact">Contact Us</a>
            <a href="#getstarted">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div onClick={() => setMenuOpen((prev) => !prev)} className="menu-icon">
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
