import React from "react";
import { NavLink } from "react-router-dom";
import "../../scss/header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="site-title">Recipe Collection</h1>
      <ul className="header-links-list">
        <li className="header-link">
          <NavLink className="header-link-anchor" to="/">
            <span className="header-link-text">Home Page</span>
            <img
              className="header-link-dropdown-icon"
              src="/images/dropdown-icon.svg"
              alt="Dropdown icon"
            />
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink className="header-link-anchor" to="/">
            <span className="header-link-text">Recipes Page</span>
            <img
              className="header-link-dropdown-icon"
              src="/images/dropdown-icon.svg"
              alt="Dropdown icon"
            />
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink className="header-link-anchor" to="/">
            <span className="header-link-text">Pages</span>
            <img
              className="header-link-dropdown-icon"
              src="/images/dropdown-icon.svg"
              alt="Dropdown icon"
            />
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink className="header-link-anchor" to="/">
            <span className="header-link-text">Test Link</span>
          </NavLink>
        </li>
        <li className="header-link">
          <NavLink className="header-link-anchor" to="/">
            <span className="header-link-text">Test Link</span>
          </NavLink>
        </li>
      </ul>
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
      </div>
    </header>
  );
}
