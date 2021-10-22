import React from "react";
import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";

export function Logo({ position, active }) {
  return (
    <Link to="/" css={[logoStyles(active), position]}>
      <h1>Logo</h1>
    </Link>
  );
}

//////////Styles

function logoStyles(active) {
  const { open, close } = logoAnimation();
  return css`
    z-index: 11;
    cursor: pointer;
    width: 100%;
    max-width: 90px;
    max-height: 90px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    @media (max-width: 900px) {
      ${active ? open : close}
    }
  `;
}

function logoAnimation() {
  const closeAnimations = keyframes`
	  	0% {
        color: white;
			
		}
	
		50% {
      color: #88CAC6;
			
		}
	
		100% {
      color: #009E8F;
			
		}
	`;

  const openAnimation = keyframes`
	  	0% {
        color: #009E8F;
		
		}
	
		50% {
      color: #88CAC6;
		}
	
		100% {
      color: white;
		}
	`;

  return {
    open: css`
      animation: ${openAnimation} 0.2s ease forwards;
    `,
    close: css`
      animation: ${closeAnimations} 0.2s ease forwards;
    `,
  };
}
