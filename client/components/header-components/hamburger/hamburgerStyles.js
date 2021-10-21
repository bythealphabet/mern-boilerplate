import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */

export function hamburgerStyles(active) {
  return css`
    width: 30px;
    height: 25px;
    border: transparent;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span {
      background: #000;
      border: solid 0.5px #000;
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
  console.log("active in burger anime", active);
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
      transform: translate(0, ${active ? 0 : -9}px)
        rotate(${active ? 0 : -45}deg);
    }
    60% {
      transform: translate(0, -9px);
    }

    100% {
      transform: translate(0, ${active ? -8.5 : 0}px)
        rotate(${active ? -45 : 0}deg);
    }
  `;
  return { topBun, meat, bottomBun };
}
