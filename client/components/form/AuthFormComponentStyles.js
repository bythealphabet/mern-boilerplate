import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export const styles = css`
  display: grid;
  grid-template-rows: 200px repeat(2, minmax(200px, 1fr));

  height: 70vh;
  margin-bottom: 4em;

  h1 {
    grid-column: 2 / -2;
    grid-row: 1;
    align-self: center;
    justify-self: center;
  }

  form {
    grid-column: 2 / -2;
    grid-row: 2 / span 2;

    @media (min-width: 900px) {
      min-width: 400px;
      justify-self: center;
    }

    p {
      margin-top: 1em;
    }

    .option {
      a {
        margin-left: 1em;
      }
    }
  }

  .other-option {
    display: flex;
    margin-top: 1em;
    text-decoration: none;

    grid-column: 6 / span 2;
    grid-row: 1;
    justify-self: flex-end;

    @media (min-width: 900px) {
      grid-column: 8 / span 2;
    }

    a {
      margin-left: 0.8em;
    }
  }
`;
