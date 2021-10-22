import React from "react";
import { navStyle } from "./NavStyles";
import { Link } from "react-router-dom";

export function Nav({ position }) {
  return (
    <nav css={[navStyle, position]}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>{" "}
        <li>
          <Link to="/projects">Other Projects</Link>
        </li>{" "}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link className="nav-btn" to="/sign-in">
            Sign In
          </Link>
        </li>
        <li>
          <Link className="nav-btn nav-btn-signup" to="/sign-up">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
