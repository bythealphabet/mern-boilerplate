import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import Avatar from "../../avatar/Avatar";

const style = css`
  z-index: 13;
  position: relative;
  display: inline-block;

  :hover .dropdown-content {
    display: block;
  }

  .dropdown-content {
    z-index: 20;
    /* display: none; */
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    min-height: 200px;

    transform: translateX(-50%);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

    div {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

      :hover {
        background-color: #f1f1f1;
      }
    }
  }
`;

function HeaderAvatar({ children }) {
  return (
    <div className="dropdown" css={style}>
      <Avatar />
      <div className="dropdown-content">{children}</div>
    </div>
  );
}
export default HeaderAvatar;
