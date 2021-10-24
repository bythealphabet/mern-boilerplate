import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { menuStyles } from "./menuStyles";
import { Nav } from "./nav/Nav";

export function Menu({ active, position, userAuth, signout }) {
  return (
    <div className="menu base-grid" css={[menuStyles(active), position]}>
      <Nav
        signout={signout}
        userAuth={userAuth}
        position={css`
          grid-column: 1 / -1;
          grid-row: 2 / -2;
          align-self: center;
          justify-self: center;
          @media (min-width: 900px) {
            grid-column: 4 / -1;
            grid-row: 1;
          }
        `}
      />
    </div>
  );
}

///////////////// STYLES
