import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Section/Home/";
import Biography from "../Section/Biography";
import Work from "../Section/Work";
import Contact from "../Section/Contact";
import About from "../Section/About";
import ScrollToTop from "../ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/biografia" component={Biography} />
          <Route path="/obra" exact component={Work} />
          <Route path="/contacto" exact component={Contact} />
          <Route path="/acerca-de" exact component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
