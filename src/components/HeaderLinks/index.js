import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLinks({ listClassName }) {
  return (
    <ul className={listClassName}>
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
  );
}
