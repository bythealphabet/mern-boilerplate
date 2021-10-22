import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function logoStyles() {
  return css`
    width: 100%;
    max-width: 100px;
    max-height: 100px;
    background: salmon;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
  `;
}

export function Logo({ position }) {
  return (
    <div css={[logoStyles, position]}>
      <h1>Logo</h1>
    </div>
  );
}
