import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { useLocation } from "react-router-dom";
import { Hamburger } from "../../../components/header-components/hamburger/Hamburger";

function headerStyles() {
  return css`
    height: var(--headerHeight);
    grid-column: 1 / -1;
    grid-row: 1;
  `;
}

function Header() {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <div className="base-grid" css={headerStyles}>
      <Hamburger active={active} setActive={setActive} />
    </div>
  );
}
export default Header;
