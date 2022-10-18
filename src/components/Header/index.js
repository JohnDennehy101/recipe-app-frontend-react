import React, { useState } from "react";
import "../../scss/header.scss";
import HeaderLinks from "../HeaderLinks";

export default function Header() {
  const [mobileMenuState, setMobileMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuState(!mobileMenuState);
  };

  return (
    <>
      <header className="header">
        <h1 className="site-title">Recipe Collection</h1>
        <HeaderLinks listClassName={"header-links-list"} />
        <div className="header-profile-recipe-search-container">
          <img
            src="/images/search-icon.svg"
            className="header-search-icon"
            alt="Search Icon"
          />
          <img
            src="/images/test-user.jpg"
            className="header-profile-image"
            alt="User Profile"
          />
          <img
            onClick={toggleMobileMenu}
            src="/images/hamburger-icon.svg"
            className="hamburger-icon"
            alt="Menu Icon"
          />
        </div>
      </header>
      {mobileMenuState && (
        <div className="mobile-menu">
          <HeaderLinks listClassName={"header-links-list-mobile"} />
        </div>
      )}
    </>
  );
}
