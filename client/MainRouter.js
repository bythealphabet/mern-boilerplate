import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import scrollToTop from "./hooks/scrollToTop";

//NAVIGATION
import Header from "./container/navigation/header/Header";
import Footer from "./container/navigation/footer/Footer";

import Home from "./container/core/Home";

const ScrollToTop = withRouter(scrollToTop);

function MainRouter() {
  const [active, setActive] = useState(false);
  function isMenuActive(isactive) {
    setActive(isactive);
  }

  return (
    <div className="base-grid main-router-rows">
      <Header isMenuActive={isMenuActive} />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default MainRouter;
