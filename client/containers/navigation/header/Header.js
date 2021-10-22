import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { useLocation } from "react-router-dom";
import { Hamburger } from "../../../components/header-components/hamburger/Hamburger";
import { Logo } from "../../../components/logo/Logo";
import { Menu } from "../../../components/header-components/menu/Menu";

function Header() {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <div className="base-grid" css={headerStyles}>
      <Logo
        position={css`
          grid-column: 2 / span 2;
        `}
      />
      <Menu />
      <Hamburger
        active={active}
        setActive={setActive}
        position={css`
          grid-column: -3;
          align-self: center;
        `}
      />
    </div>
  );
}
export default Header;

//////// STYLES

function headerStyles() {
  return css`
    height: var(--headerHeight);
    grid-column: 1 / -1;
    grid-row: 1;
  `;
}
