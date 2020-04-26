import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Section/Home/";
import Biography from "../Section/Biography";
import Work from "../Section/Work";
import Contact from "../Section/Contact";
import About from "../Section/About";
import ScrollToTop from "../ScrollToTop";
import Review from "../../shared/components/Works/Review/Review";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/biografia" component={Biography} />
          <Route path="/obra/:item" component={Review} />
          <Route path="/obra" component={Work} />
          <Route path="/contacto" exact component={Contact} />
          <Route path="/acerca-de" exact component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
