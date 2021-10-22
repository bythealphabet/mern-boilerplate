import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { hamburgerAnimations, hamburgerStyles } from "./hamburgerStyles";

export function Hamburger({ active = true, setActive, position }) {
  const { topBun, meat, bottomBun } = hamburgerAnimations(active);

  return (
    <div
      css={[hamburgerStyles(active), position]}
      onClick={() => setActive((prev) => !prev)}
    >
      <span css={topBun}></span>
      <span css={meat}></span>
      <span css={bottomBun}></span>
    </div>
  );
}
