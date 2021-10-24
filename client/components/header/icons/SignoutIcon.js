import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

const style = () => {
  return css`
    width: 20px;
    height: 20px;
  `;
};

function SignoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      css={[style]}
    >
      <g>
        <g>
          <path d="M12 16l5-4-5-4v3H3v2h9v3z"></path>
          <path d="M19 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H8v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
        </g>
      </g>
    </svg>
  );
}

export default SignoutIcon;
