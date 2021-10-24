import React from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */

function SubmitSuccess({ message = "Welcome Back" }) {
  const style = css`
    max-width: 300px;
    height: 100%;
    grid-column: 2 / -2;
    grid-row: 1 / -1;
    align-self: center;
    justify-self: center;
    display: flex;
    align-items: flex-start;
    margin-top: 200px;

    @media (min-width: 900px) {
      max-width: 500px;
    }
  `;
  return (
    <div className="succes" css={style}>
      <h2 className="title-3"> {message}</h2>
    </div>
  );
}
export default SubmitSuccess;
