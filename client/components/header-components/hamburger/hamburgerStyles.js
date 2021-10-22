import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */

export function hamburgerStyles(active) {
  console.log("active", active);
  return css`
    z-index: 10;
    width: 30px;
    height: 25px;
    border: transparent;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: 2ms ease;

    span {
      background: ${active ? "#ffff" : "var(--dark)"};
      border: solid 0.5px ${active ? "#ffff" : "var(--dark)"};
      border-radius: 3px;
      display: block;
      height: 0.2em;
    }

    @media (min-width: 900px) {
      display: none;
    }
  `;
}

export function hamburgerAnimations(active) {
  const topBun = keyframes`
 	  	0% {
 			transform: translate(0, ${active ? 0 : 9}px) rotate(${active ? 0 : 45}deg);
 		}
 		60% {
 			transform: translate(0, 9px);
 		}

 		100% {
 			transform: translate(0, ${active ? 8.5 : 0}px) rotate(${active ? 45 : 0}deg);
 		}
 	`;

  const bottomBun = keyframes`
 		0% {
 			transform: translate(0, ${active ? 0 : -9}px) rotate(${active ? 0 : -45}deg);
 		}
 		60% {
 			transform: translate(0, -9px);
 		}

 		100% {
 			transform: translate(0, ${active ? -8.5 : 0}px) rotate(${active ? -45 : 0}deg);
 		}
 	`;

  const meat = keyframes`
    0% {
      transform: scale(${active ? 1 : 0})
    }
    60% {
      transform: scale(.5)
    }

    100% {
      transform: scale(${active ? 0 : 1})
    }
  `;
  return {
    topBun: css`
      animation: ${topBun} 0.2s ease-in-out forwards;
    `,
    meat: css`
      animation: ${meat} 0.2s ease-in-out forwards;
    `,
    bottomBun: css`
      animation: ${bottomBun} 0.2s ease-in-out forwards;
    `,
  };
}
