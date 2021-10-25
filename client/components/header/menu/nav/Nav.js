import React, { useContext } from "react";
import { navStyle } from "./NavStyles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../auth/AuthContext/AuthContext";

export function Nav({ position }) {
  const { auth } = useContext(AuthContext);
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
        {!auth && (
          <>
            <li>
              <Link className="nav-btn" to="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="nav-btn nav-btn-signup" to="/signup">
                Sign up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
