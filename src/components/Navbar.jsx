import React from "react";
import css from "../styles/navbar.module.scss";

const Navbar = (props) => {
  const gotoSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <nav className={css.navbarContainer}>
      <div>
        <span className={css.logoText}>DScanner</span>
      </div>
      <ul>
        <li onClick={() => gotoSection(props.homeRef)}>home</li>
        <li onClick={() => gotoSection(props.featureRef)}>features</li>
        <li onClick={() => gotoSection(props.aboutRef)}>about us</li>
        <li onClick={() => gotoSection(props.contactRef)}>contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
