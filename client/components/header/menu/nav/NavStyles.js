import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export function navStyle() {
  return css`
    z-index: 11;
    display: grid;

    @media (min-width: 900px) {
      background: transparent;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (min-width: 900px) {
        width: 100%;
        flex-direction: row;
        align-items: flex-end;
      }

      li {
        @media (min-width: 900px) {
          margin: 0 0.7em;
          padding: 0 0.7em;
          border: none;

          :hover {
            background: transparent;
          }

          :last-of-type {
            padding-right: 0;
            margin-right: 0;
          }
        }

        .nav-btn {
          display: inline-block;
          padding: 0.5em 1.2em;
          font-size: 0.8rem;
          font-weight: bold;
          text-align: center;

          background: var(--white);
          color: var(--accent);
          cursor: pointer;
          border-radius: 0.25em;
          width: 100%;
          margin: 0.5em 0;

          @media (min-width: 900px) {
            border: solid 0.2em var(--dark);
            background: transparent;
          }

          :hover,
          :focus {
            color: salmon;
            background: var(--dark);
          }
        }

        .nav-btn-signup {
          background: var(--accent);
          color: var(--white);
          :hover,
          :focus {
            color: var(--accent);
            background: var(--dark);
          }
        }

        a {
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          font-size: 2rem;
          text-transform: capitalize;
          color: white;

          @media (min-width: 900px) {
            font-size: 1.2rem;
            color: var(--dark);
            text-align: center;
            font-weight: bold;
          }
          .small-arrow {
            @media (min-width: 900px) {
              display: none;
            }
          }
        }
      }
    }
  `;
}
