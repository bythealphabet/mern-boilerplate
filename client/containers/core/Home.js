import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import bgimg from "../../assets/img/background.jpg";
import useWindowSize from "../../hooks/useWindowSize";

function Home() {
  const windowSize = useWindowSize();
  return (
    <main className="base-grid" css={homeStyle}>
      <div className="background-img"></div>
      <article className="description">
        <h1>Bythealphabet Web Development</h1>
        <p>
          This project was build as e template that can be used in future
          projects.
        </p>

        <p className="link">
          link to the template 👇
          <a href="https://github.com/bythealphabet/mern-boilerplate.git">
            https://github.com/bythealphabet/mern-boilerplate.git
          </a>
        </p>
        <p>Hope you like it,</p>

        <p className="me">Dudley Isaac Lucas</p>
      </article>
      <h3 className="thanks">
        <span>Photo by</span> <span>Jess Loiterton</span>{" "}
        <span>from Pexels</span>
      </h3>
    </main>
  );
}
export default Home;

////

/////////STYLES

function homeStyle() {
  return css`
    display: grid;
    grid-template-rows: var(--headerHeight) repeat(
        3,
        calc((100vh - var(--headerHeight)) / 2)
      );
    grid-column: 1 / -1;
    grid-row: 1 / span 2;

    .background-img {
      background-image: url(${bgimg});
      background-position: center;
      background-size: cover;
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      border: solid 0.3em;
    }

    .description {
      margin-top: 2em;
      grid-column: 2 / -4;
      grid-row: 2 / span 2;
      @media (min-width: 900px) {
        grid-column: 2 / span 3;
      }

      h1 {
        margin-bottom: 0.8rem;
      }

      > p {
        font-size: 1.2rem;
        margin-bottom: 1.5em;
      }

      .link {
        color: var(--accent);
        font-weight: 700;
      }

      a {
        font-size: 1rem;
      }
    }

    .thanks {
      font-size: 1.5rem;
      grid-column: 2 / -2;
      grid-row: -2;
      align-self: flex-end;
      text-align: right;
      margin: 2em;

      @media (min-width: 900px) {
        grid-column: span 4 / -1;
      }

      span {
        display: block;
      }
    }
  `;
}
