import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */

export function menuStyles(active) {
  const { open, close } = menuAnimation();
  return css`
    z-index: 9;
    position: fixed;
    overflow-y: scroll;
    background-image: linear-gradient(
      to right,
      rgba(36, 57, 73, 0.95) 0%,
      rgba(81, 127, 164, 0.99) 100%
    );

    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: grid;
    grid-template-rows: var(--headerHeight) repeat(3, 1fr);
    transform: translateX(-100%);
    transition: transform 0.25s ease-out;

    @media (max-width: 900px) {
      ${active ? open : close}
    }

    @media (min-width: 900px) {
      grid-template-rows: var(--headerHeight);
      position: initial;
      background: transparent;
      overflow-y: hidden;
      transform: translateX(0);
      border: none;
      opacity: 1;
    }
  `;
}

export function menuAnimation() {
  const closeAnimations = keyframes`
	  	0% {
			transform: translateX(0);
		}
		10% {
			transform: translateX(20%);
		}

		20% {
			transform: translateX(40%);
		}
		50% {
			transform: translateX(60%);
		}
		80% {
			transform: translateX(80%);
		}

		100% {
			transform: translateX(100%);
		}
	`;

  const openAnimation = keyframes`
	  	0% {
			transform: translateX(100%);
		}
		20% {
			transform: translateX(80%);
		}

		40% {
			transform: translateX(60%);
		}
		60% {
			transform: translateX(40%);
		}
		80% {
			transform: translateX(20%);
		}
		100% {
			transform: translateX(0);
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
