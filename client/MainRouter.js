import React, { useState } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Switch, Route, withRouter } from "react-router-dom";
import scrollToTop from "./hooks/scrollToTop";

//NAVIGATION
import Header from "./containers/navigation/header/Header";
import Footer from "./containers/navigation/footer/Footer";

import Home from "./containers/core/Home";

const ScrollToTop = withRouter(scrollToTop);

function mainRouterStyles() {
  return css`
    display: grid;
    grid-template-rows:
      var(--headerHeight) calc(
        100vh - var(--headerHeight) + var(--footerHeight)
      )
      var(--footerHeight);
  `;
}

function MainRouter() {
  const [active, setActive] = useState(false);
  function isMenuActive(isactive) {
    setActive(isactive);
  }

  return (
    <div className="base-grid main-router-rows" css={mainRouterStyles}>
      <Header isMenuActive={isMenuActive} />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </ScrollToTop>
    </div>
  );
}

export default MainRouter;
