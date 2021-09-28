import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home, Contact } from "../views";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
