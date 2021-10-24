import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

function styles(active) {
  return css`
    display: ${active ? "block" : "none"};
    position: fixed;
    overflow-y: hidden;
    z-index: 12;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: repeat(3, 1fr);

    .modal-background {
      z-index: 13;
      width: 100%;
      height: 100%;

      top: 0;
      background-color: rgb(0, 0, 0);
      background-color: rgba(0, 0, 0, 0.7);
      grid-column: 1 / -1;
      grid-row: 1 / -1;
    }

    .modal-content {
      z-index: 100;
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 30%;
      grid-column: 1 / -1;
      grid-row: 1 / span 2;
      align-self: flex-end;

      .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;

        :hover,
        :focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  `;
}

function Modal({ active = true, setModalActive, children }) {
  return (
    <div id="myModal" className="modal base-grid" css={[styles(active)]}>
      <div
        className="modal-background"
        onClick={() => setModalActive(false)}
      ></div>
      <div className="modal-content">
        <span className="close" onClick={() => setModalActive(false)}>
          ×
        </span>
        <div>{children}</div>
      </div>
    </div>
  );
}
export default Modal;
