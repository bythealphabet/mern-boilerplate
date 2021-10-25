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
          --headerHeight: 100px;
          --footerHeight: 100px;
          --dark: #515151;
          --blue: rgba(81, 127, 164, 1);
          --accent: #009e8f;
          --white: #ffff;
        }

        body,
        html {
          margin: 0;
          font-family: "Alata", sans-serif;
          font-size: 1rem;
          color: #515151;
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

        ////////////BUTTONS
        .btn,
        .base-btn {
          display: inline-block;
          padding: 0.5em 1.2em;
          font-size: 0.8rem;
          font-weight: bold;
          border: solid 0.2em var(--dark);
          background: var(--white);
          cursor: pointer;
          border-radius: 0.25em;

          :hover,
          :focus {
            color: var(--accent);
            background: var(--dark);
          }
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
