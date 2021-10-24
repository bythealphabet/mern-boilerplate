import React, { useState, useEffect, useContext } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { AuthContext } from "../../../auth/AuthContext/AuthContext";
import { useLocation } from "react-router-dom";
import { Hamburger } from "../../../components/header/hamburger/Hamburger";
import { Logo } from "../../../components/logo/Logo";
import { Menu } from "../../../components/header/menu/Menu";

function Header() {
  const { auth, signOutHandler } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <header className="base-grid" css={headerStyles}>
      <Logo
        active={active}
        position={css`
          grid-column: 2 / span 2;
          grid-row: 1 / -1;
          margin-top: 0.3em;
        `}
      />
      <Menu
        signout={signOutHandler}
        userAuth={auth}
        active={active}
        position={css`
          grid-column: 1 / -1;
          grid-row: 1 / -1;
        `}
      />
      <Hamburger
        active={active}
        setActive={setActive}
        position={css`
          grid-column: -3;
          align-self: center;
          grid-row: 1 / -1;
        `}
      />
    </header>
  );
}
export default Header;

//////// STYLES

function headerStyles() {
  return css`
    display: grid;
    grid-template-rows: repeat(2, calc(var(--headerHeight) / 2));
    height: var(--headerHeight);
    grid-column: 1 / -1;
    grid-row: 1;
  `;
}
