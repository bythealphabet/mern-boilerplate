import React from "react";
import { jsx, css, Global } from "@emotion/react"; /** @jsx jsx */

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :root {
          --headerHeight: 150px;
          --footerHeight: 100px;
        }

        body,
        html {
          margin: 0;
          font-family: "Alata", sans-serif;
          font-size: 1rem;
          color: #404040;
          line-height: 1.6;
          background-color: #ffff;
        }

        img {
          max-height: 100%;
          display: block;
        }

        a {
          text-decoration: none;
          color: #404040;
        }

        /////GRID LAYOUT
        .base-grid {
          display: grid;
          grid-template-columns:
            minmax(1em, 1fr) repeat(6, minmax(30px, 125px))
            minmax(1em, 1fr);

          @media (min-width: 900px) {
            grid-template-columns:
              minmax(5em, 1fr) repeat(12, minmax(50px, 125px))
              minmax(5em, 1fr);
          }
        }
      `}
    />
  );
}
