import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export function SubmitBtn({
  text = "Submit",
  onClick = () => "",
  signin = false,
}) {
  const styles = css`
    width: 100%;
    max-width: 420px;
    background: ${signin ? "var(--blue)" : "var(--accent)"};
    color: var(--white);
    border: none;
    padding: 0.8em;
  `;

  return (
    <button className="base-btn btn" onClick={onClick} css={styles}>
      {text}
    </button>
  );
}
