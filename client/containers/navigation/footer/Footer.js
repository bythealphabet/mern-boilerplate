import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
function footerStyle() {
  return css`
    grid-column: 1 / -1;
    grid-row: 3;
  `;
}
function Footer() {
  return <div css={footerStyle}>Footer</div>;
}
export default Footer;
