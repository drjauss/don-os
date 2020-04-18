import React from "react";
import "./Biography.scss";
import Header from "../../Header";
import Footer from "../../Footer";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Subscription from "../../../shared/components/Subscription";
import Carousel from "../../../shared/components/Carousel";

function Biography() {
  let { path } = useRouteMatch();
  return (
    <div className="Biography">
      <Header />
      <Switch>
        <Route path={`${path}/:item`} exact component={Carousel} />
        <Route path={path}>
          <Redirect to={`${path}/la-pluma`} />
        </Route>
      </Switch>
      <Subscription />
      <Footer />
    </div>
  );
}

export default Biography;
